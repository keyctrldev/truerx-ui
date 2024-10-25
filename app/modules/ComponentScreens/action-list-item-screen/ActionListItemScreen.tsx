import React, { useState } from 'react';
import { Alert, Text } from 'react-native';

import { Colors } from '../../../theme';
import { styles } from './ActionListItemScreenStyles';
import { AppText, SafeAreaContainer } from '../../../components';
import ActionListItem from '../../../components/action-list-item/ActionListItem';

const ActionListItemScreen: React.FC = () => {
  const [isBiometricsEnabled, setIsBiometricsEnabled] = useState<boolean>(false);

  const handleSwitchChange = (newValue: boolean) => {
    setIsBiometricsEnabled(newValue);
  };

  return (
    <SafeAreaContainer style={styles.container}>
      <Text style={styles.heading}>{'Action ListItem Screen'}</Text>

      <AppText style={styles.textStyles}>{'Action with Chevron Icon::'}</AppText>
      <ActionListItem
        label={'Profile'}
        onPress={() => {
          Alert.alert('Profile Pressed!!');
        }}
      />

      <AppText style={styles.textStyles}>{'Profile with Switch::'}</AppText>
      <ActionListItem
        isSwitched
        onPress={() => {}}
        label={'Enable Biometrics'}
        value={isBiometricsEnabled}
        onValueChange={handleSwitchChange}
      />

      <AppText style={styles.textStyles}>{'Disable Option with Chevron Icon::'}</AppText>
      <ActionListItem isDisabled label={'Profile'} onPress={() => {}} customStyles={styles.isDisabledStyles} />

      <AppText style={styles.textStyles}>{'Disable Option with Switch::'}</AppText>
      <ActionListItem
        isDisabled
        isSwitched
        onPress={() => {}}
        onValueChange={() => {}}
        label={'Enable Biometrics'}
        customStyles={styles.isDisabledStyles}
      />

      <AppText style={styles.textStyles}>{'Pass CustomStyle::'}</AppText>
      <ActionListItem customStyles={styles.customStyles} label={'Profile'} onPress={() => {}} />

      <AppText style={styles.textStyles}>{'Pass Separator::'}</AppText>
      <ActionListItem label={'Profile'} onPress={() => {}} isSeparator />

      <AppText style={styles.textStyles}>{'Pass Separator::'}</AppText>
      <ActionListItem
        isSeparator
        label={'Profile'}
        onPress={() => {}}
        customStyles={{ ...styles.customStyles, backgroundColor: Colors.transparent }}
      />
    </SafeAreaContainer>
  );
};

export default ActionListItemScreen;
