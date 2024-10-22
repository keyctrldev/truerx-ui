import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useToast } from '../../../context';
import { styles } from './CustomToastScreenStyles';
import { CustomBackButton } from '../../../components';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

const CustomToastScreen = () => {
  const toast = useToast();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const showToast = () => {
    toast.showToast('THIS IS THE DEMO TOAST', 'SUCCESS');
  };

  return (
    <>
      <CustomBackButton onBackPress={handleBackPress} />
      <TouchableOpacity style={styles.container} onPress={showToast}>
        <Text>Show Toast</Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomToastScreen;
