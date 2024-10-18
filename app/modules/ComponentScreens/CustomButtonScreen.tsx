import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { CustomButton } from '../../components';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
