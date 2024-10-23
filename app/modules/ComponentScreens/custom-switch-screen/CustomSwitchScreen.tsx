import React, { useState } from 'react';
import { View } from 'react-native';

import { styles } from './CustomSwitchScreenStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { CustomBackButton, CustomSwitch } from '../../../components';
import { ParamListBase, useNavigation } from '@react-navigation/native';

const CustomSwitchScreen = () => {
  const [isToggleSwitch, setIsToggleSwitch] = useState<boolean>(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <CustomBackButton onBackPress={handleBackPress} />
      <View style={styles.container}>
        <CustomSwitch value={isToggleSwitch} onValueChange={() => setIsToggleSwitch(!isToggleSwitch)} />
      </View>
    </>
  );
};

export default CustomSwitchScreen;
