import React from 'react';
import { Alert, View } from 'react-native';
import { styles } from './CustomButtonScreenStyles';
import { CustomButton } from '../../../components';

const CustomButtonScreen = () => {
  return (
    <View style={styles.container}>
      <CustomButton
        title="Custom Btn Component"
        onPress={() => {
          Alert.alert('THIS IS DEMO CUSTOM BTN');
        }}
      />
    </View>
  );
};

export default CustomButtonScreen;
