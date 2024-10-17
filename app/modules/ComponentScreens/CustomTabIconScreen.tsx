import { StyleSheet, View } from 'react-native';
import React from 'react';
import { CustomTabIcon } from '../../components';
import { Icons } from '../../assets';

const CustomTabIconScreen = () => {
  return (
    <View style={styles.container}>
      <CustomTabIcon focused={true} icon={Icons.claimsIcon} label="TEST" />
    </View>
  );
};

export default CustomTabIconScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
