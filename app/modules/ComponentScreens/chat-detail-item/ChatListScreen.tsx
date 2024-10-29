import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { chatData } from '../../../utils';
import { chatDataProps } from '../../../types';
import { styles } from './ChatScreenListStyles';
import { AppText, ChatDetailItem, CustomBackButton, SafeAreaContainer } from '../../../components';

const ChatListScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }: { item: chatDataProps }) => {
    return <ChatDetailItem sender={item.isSender} chat={item.chat} />;
  };
  return (
    <SafeAreaContainer style={styles.container}>
      <CustomBackButton onBackPress={handleBackPress} />
      <AppText style={styles.heading}>{'ChatDetail Screen'}</AppText>
      <FlatList
        bounces={false}
        data={chatData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaContainer>
  );
};

export default ChatListScreen;
