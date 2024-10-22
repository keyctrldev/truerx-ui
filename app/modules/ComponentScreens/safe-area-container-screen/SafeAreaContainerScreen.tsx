import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { AppText, CustomBackButton, SafeAreaContainer } from '../../../components';

const SafeAreaContainerScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaContainer>
      <CustomBackButton onBackPress={handleBackPress} />
      <AppText>HELLLOOOO</AppText>
    </SafeAreaContainer>
  );
};

export default SafeAreaContainerScreen;
