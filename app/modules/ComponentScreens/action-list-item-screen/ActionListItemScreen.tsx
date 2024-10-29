import React, { useState } from 'react';
import { Alert, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from './ActionListItemScreenStyles';
import ActionListItem from '../../../components/action-list-item/ActionListItem';
import { AppText, CustomBackButton, SafeAreaContainer } from '../../../components';

const ActionListItemScreen: React.FC = () => {
  const navigation = useNavigation();
  const [isBiometricsEnabled, setIsBiometricsEnabled] = useState<boolean>(false);

  const handleSwitchChange = (newValue: boolean) => {
    setIsBiometricsEnabled(newValue);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaContainer style={styles.container}>
      <CustomBackButton onBackPress={handleBackPress} />
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
        isSwitch
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
        isSwitch
        onPress={() => {}}
        onValueChange={() => {}}
        label={'Enable Biometrics'}
        customStyles={styles.isDisabledStyles}
      />

      <AppText style={styles.textStyles}>{'Pass CustomStyle::'}</AppText>
      <ActionListItem customStyles={styles.customStyles} label={'Profile'} onPress={() => {}} />

      <AppText style={styles.textStyles}>{'Pass Separator::'}</AppText>
      <ActionListItem isSeparator label={'Profile'} onPress={() => {}} />
    </SafeAreaContainer>
  );
};

export default ActionListItemScreen;
