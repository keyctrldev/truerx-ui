import React from 'react';
import { Alert, View } from 'react-native';

import { styles } from './CustomButtonScreenStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { CustomBackButton, CustomButton } from '../../../components';
import { ParamListBase, useNavigation } from '@react-navigation/native';

const CustomButtonScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <CustomBackButton onBackPress={handleBackPress} />
      <View style={styles.container}>
        <CustomButton
          title="Custom Btn Component"
          onPress={() => {
            Alert.alert('THIS IS DEMO CUSTOM BTN');
          }}
        />
      </View>
    </>
  );
};

export default CustomButtonScreen;
