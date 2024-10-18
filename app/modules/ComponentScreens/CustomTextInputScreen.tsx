import { StyleSheet, View } from 'react-native';
import React from 'react';
import { CustomTextInput } from '../../components';

const CustomTextInputScreen = () => {
  return (
    <View style={styles.container}>
      <CustomTextInput error="ERRROR" touched placeholder="DEMO" />
    </View>
  );
};

export default CustomTextInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
