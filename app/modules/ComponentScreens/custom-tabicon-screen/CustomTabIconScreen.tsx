import React from 'react';
import { View } from 'react-native';

import { Icons } from '../../../assets';
import { styles } from './CustomTabIconScreenStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { CustomBackButton, CustomTabIcon } from '../../../components';
import { ParamListBase, useNavigation } from '@react-navigation/native';

const CustomTabIconScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <CustomBackButton onBackPress={handleBackPress} />
      <View style={styles.container}>
        <CustomTabIcon focused={true} icon={Icons.claimsIcon} label="TEST" />
      </View>
    </>
  );
};

export default CustomTabIconScreen;
