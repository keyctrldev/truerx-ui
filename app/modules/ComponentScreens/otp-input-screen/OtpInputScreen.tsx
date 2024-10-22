import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { CustomBackButton, CustomOtpInputComponent, SafeAreaContainer } from '../../../components';

const OtpInputScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaContainer>
      <CustomBackButton onBackPress={handleBackPress} />
      <CustomOtpInputComponent setOtp={otp => {}} pinCount={6} />
    </SafeAreaContainer>
  );
};

export default OtpInputScreen;
