import React, { useState } from 'react';

import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { Colors } from '../../../theme';
import { styles } from './PasswordValidationScreenStyles';
import { CustomBackButton, CustomTextInput, PasswordValidation, SafeAreaContainer } from '../../../components';

const PasswordValidationScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [inputText, setInputText] = useState<string>('');

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaContainer>
      <CustomBackButton onBackPress={handleBackPress} />
      <CustomTextInput
        style={styles.textInputStyle}
        placeholder="Password"
        placeholderTextColor={Colors.placeHolderTextColor}
        onChangeText={setInputText}
        error=""
        touched
      />
      <View style={styles.errorTextContainer}>
        <PasswordValidation password={inputText} isValid={isValid => {}} />
      </View>
    </SafeAreaContainer>
  );
};

export default PasswordValidationScreen;
