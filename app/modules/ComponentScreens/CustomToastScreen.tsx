import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useToast } from '../../context';

const CustomToastScreen = () => {
  const toast = useToast();

  const showToast = () => {
    toast.showToast('THIS IS THE DEMO TOAST', 'SUCCESS');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={showToast}>
      <Text>Show Toast</Text>
    </TouchableOpacity>
  );
};

export default CustomToastScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
