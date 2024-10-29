import React from 'react';
import { StyleSheet } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { ChatInputBox, CustomBackButton, SafeAreaContainer } from '../../../components';

const ChatInputBoxScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaContainer>
      <CustomBackButton onBackPress={handleBackPress} />
      <ChatInputBox onMessageSend={() => {}} onOpenMedia={() => {}} />
    </SafeAreaContainer>
  );
};

export default ChatInputBoxScreen;

const styles = StyleSheet.create({});
