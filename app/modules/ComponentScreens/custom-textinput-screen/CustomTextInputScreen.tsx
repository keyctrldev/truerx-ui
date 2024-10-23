import React from 'react';
import { View } from 'react-native';

import { styles } from './CustomTextInputScreenStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { CustomBackButton, CustomTextInput } from '../../../components';
import { ParamListBase, useNavigation } from '@react-navigation/native';

const CustomTextInputScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <CustomBackButton onBackPress={handleBackPress} />
      <View style={styles.container}>
        <CustomTextInput error="ERRROR" touched placeholder="DEMO" />
      </View>
    </>
  );
};

export default CustomTextInputScreen;
