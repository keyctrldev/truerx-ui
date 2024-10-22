import React from 'react';
import { View } from 'react-native';

import { styles } from './CustomTextInputScreenStyles';
import { CustomTextInput } from '../../../components';

const CustomTextInputScreen = () => {
  return (
    <View style={styles.container}>
      <CustomTextInput error="ERRROR" touched placeholder="DEMO" />
    </View>
  );
};

export default CustomTextInputScreen;
