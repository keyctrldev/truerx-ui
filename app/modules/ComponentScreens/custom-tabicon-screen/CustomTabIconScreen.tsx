import React from 'react';
import { View } from 'react-native';

import { Icons } from '../../../assets';
import { styles } from './CustomTabIconScreenStyles';
import { CustomTabIcon } from '../../../components';

const CustomTabIconScreen = () => {
  return (
    <View style={styles.container}>
      <CustomTabIcon focused={true} icon={Icons.claimsIcon} label="TEST" />
    </View>
  );
};

export default CustomTabIconScreen;
