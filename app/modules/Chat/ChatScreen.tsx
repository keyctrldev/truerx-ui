import React, { useState, useEffect } from 'react';
import { View, FlatList, KeyboardAvoidingView, TouchableOpacity, Image, Platform } from 'react-native';
import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme';
import { Icons } from '../../assets';
import { styles } from './ChatScreenStyle';
import { addMessages } from '../../redux/Action/Action';
import { headerComponentStrings, soket_url } from '../../constants';
import { AppText, CustomHeader, CustomTextInput, SafeAreaContainer } from '../../components';

const ChatScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [socket, setSocket] = useState<any>(null);
  const [uniqueId, setUniqueId] = useState<string>();
  const messages = useSelector((state: any) => state.chatMessages);
  const dispatch = useDispatch<any>();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const validateUserId = async () => {
    const getUUID = await AsyncStorage.getItem('UUID');
    if (!getUUID) {
      const uuid = Date.now();
      await AsyncStorage.setItem('UUID', uuid.toString());
      setUniqueId(uuid.toString());
    } else {
      setUniqueId(getUUID);
    }
  };

  useEffect(() => {
    validateUserId();
    const unsubscribe = navigation.addListener('focus', () => {
      const newSocket: any = io(soket_url, {
        autoConnect: true,
      });
      newSocket.on('connect', () => {
        // console.log('connected');
      });
      newSocket.on('error', (error: any) => {
        // console.log('error socket', error);
      });
      setSocket(newSocket);
      newSocket.on('chat-message', () => {
        dispatch(addMessages());
      });
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    dispatch(addMessages());
  }, [isFocused]);

  const sendMessage = async () => {
    if (inputValue.trim().length > 0) {
      const newMessage = {
        id: uniqueId,
        chat: inputValue.trim(),
      };
      socket.emit('chat-message', newMessage);
      setInputValue('');
    }
  };

  const renderMessage = ({ item }: any) => {
    const timeString = new Date(item?.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return (
      <View
        style={[
          styles.messageContainer,
          {
            alignItems: item?.chat_id === uniqueId ? 'flex-end' : 'flex-start',
          },
        ]}>
        <View style={styles.meassageInterface}>
          <AppText style={styles.messageChat}>{item?.chat}</AppText>
          <AppText style={styles.messageTime}>{timeString}</AppText>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaContainer style={styles.chatContainerStyle}>
      <CustomHeader heading={headerComponentStrings.chat} />
      <FlatList
        inverted
        bounces={false}
        data={messages}
        renderItem={renderMessage}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ flexDirection: 'column-reverse' }}
      />
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.chatTextInput}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
        <View style={styles.textInput}>
          <CustomTextInput
            error={''}
            touched={false}
            sendChat={false}
            value={inputValue}
            returnKeyType="done"
            keyboardType="default"
            placeholder={'Text Here'}
            onChangeText={setInputValue}
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Image
              style={[styles.send, { tintColor: inputValue.trim().length > 0 ? Colors.white : Colors.gray }]}
              source={Icons.sendIcon}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaContainer>
  );
};

export default ChatScreen;
