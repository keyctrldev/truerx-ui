import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { styles } from './MessageCardComponentScreenStyles';
import { messageCardComponentData } from '../../../constants';
import { CustomBackButton, MessageCardComponent, SafeAreaContainer } from '../../../components';

const MessageCardComponentScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaContainer style={styles.containerStyle}>
      <CustomBackButton onBackPress={handleBackPress} />
      <MessageCardComponent
        status="Active"
        statusText={messageCardComponentData.availableOnline}
        titleText={messageCardComponentData.chatWithHealthStrategist}
        containerStyle={styles.cardContainerStyle}
      />
      <MessageCardComponent
        status="InActive"
        statusText={messageCardComponentData.weBeBackOnline}
        titleText={messageCardComponentData.chatWithHealthStrategist}
      />
    </SafeAreaContainer>
  );
};

export default MessageCardComponentScreen;
