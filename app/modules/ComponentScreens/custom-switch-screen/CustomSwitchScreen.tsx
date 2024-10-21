import React, { useState } from 'react';
import { View } from 'react-native';

import { CustomSwitch } from '../../../components';
import { styles } from './CustomSwitchScreenStyles';

const CustomSwitchScreen = () => {
  const [isToggleSwitch, setIsToggleSwitch] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <CustomSwitch value={isToggleSwitch} onValueChange={() => setIsToggleSwitch(!isToggleSwitch)} />
    </View>
  );
};

export default CustomSwitchScreen;
