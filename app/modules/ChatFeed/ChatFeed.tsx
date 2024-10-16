import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { GiftedChat, InputToolbar, Bubble } from 'react-native-gifted-chat';
import { ParamListBase, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { AppText, CustomHeader } from '../../components';
import { Colors } from '../../theme';
import { db } from '../../../firebase';
import { RootState } from '../../redux';
import { styles } from './ChatFeedStyle';
import { headerComponentStrings } from '../../constants';

type ChatFeedRouteType = {
  User: {
    data: {
      avatar: string;
      email: string;
      id: string;
      name: string;
      uid: string;
    };
  };
};
const ChatFeed: React.FC = () => {
  // const { params } = useRoute<RouteProp<ChatFeedRouteType, 'User'>>();
  const currentUserUid = useSelector((state: RootState) => state.user.currentUserId);
  // const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const c_uid = currentUserUid ?? '';
  // const t_uid = params.data.uid;
  const t_uid = 'hVEKBuWE8jgqr7FRL1zhEYziaTh2';
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [messages, setMessages] = useState([]);

  // const onBackPress = () => {
  //   navigation.goBack();
  // };

  const getAllMessages = () => {
    const chatid = t_uid > c_uid ? c_uid + '-' + t_uid : t_uid + '-' + c_uid;
    const q = query(collection(db, 'Chats', chatid, 'messages'), orderBy('createdAt', 'desc'));

    return onSnapshot(q, snapshot =>
      setMessages(snapshot.docs.map(doc => ({ ...doc.data(), createdAt: doc.data().createdAt.toDate() })) as any),
    );
  };

  const onSendMsg = async (msgArray: any) => {
    const msg = msgArray[0];
    const time = new Date();
    const userMsg = {
      ...msg,
      sentBy: c_uid,
      sentTo: t_uid,
      createdAt: time,
    };

    const chatid = t_uid > c_uid ? c_uid + '-' + t_uid : t_uid + '-' + c_uid;

    const docRef = collection(db, 'Chats', chatid, 'messages');

    try {
      await addDoc(docRef, { ...userMsg, createdAt: time });
      // setMessages(previousMessages => GiftedChat.append(previousMessages, userMsg));
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while sending message');
    }
  };

  const customtInputToolbar = (props: any) => {
    return <InputToolbar {...props} containerStyle={styles.inputContainerStyle} />;
  };

  useEffect(() => {
    const unsubscribe = getAllMessages();
    return () => unsubscribe();
  }, [getAllMessages]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <CustomHeader heading={headerComponentStrings.Chat} />
      <View style={styles.userInfoCon}>
        {/* <TouchableOpacity onPress={onBackPress}>
          <Image style={styles.backImgCon} source={Icons.backIcon} />
        </TouchableOpacity> */}
        {/* <AppText style={styles.userName}>{params?.data?.name}</AppText> */}
        <AppText style={styles.userName}>{`Health Strategist`}</AppText>
      </View>
      <GiftedChat
        showAvatarForEveryMessage={false}
        messages={messages}
        onSend={text => onSendMsg(text)}
        user={{
          _id: c_uid,
          avatar: 'https://robohash.org/default',
        }}
        renderInputToolbar={props => customtInputToolbar(props)}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              textStyle={{
                right: {
                  color: Colors.white,
                },
                left: {
                  color: Colors.black,
                },
              }}
              user={{
                avatar: 'https://robohash.org/default',
                _id: t_uid,
              }}
              wrapperStyle={{
                left: {
                  backgroundColor: '#DCE8FF',
                },
                right: {
                  backgroundColor: '#4399FF',
                },
              }}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default ChatFeed;
