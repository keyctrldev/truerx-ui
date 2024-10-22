import React from 'react';
import { View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { CustomBackButton, CustomProgressStepper } from '../../../components';

const CustomProgressBarScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View>
      <CustomBackButton onBackPress={handleBackPress} />
      <CustomProgressStepper />
    </View>
  );
};

export default CustomProgressBarScreen;
