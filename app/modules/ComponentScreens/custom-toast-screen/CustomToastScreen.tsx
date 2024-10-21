import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './CustomToastScreenStyles';
import { useToast } from '../../../context';

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
