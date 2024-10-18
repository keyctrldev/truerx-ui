import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { CustomSwitch } from '../../components';

const CustomSwitchScreen = () => {
  const [isToggleSwitch, setIsToggleSwitch] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <CustomSwitch value={isToggleSwitch} onValueChange={() => setIsToggleSwitch(!isToggleSwitch)} />
    </View>
  );
};

export default CustomSwitchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
