import React from 'react';

import { styles } from './AppTextScreenStyles';
import { AppText, CustomBackButton } from '../../../components';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const AppTextScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <CustomBackButton onBackPress={handleBackPress} />
      <AppText style={styles.appTextStyle}>{'HEllo THIS IS APP BASE TEXT'}</AppText>
    </>
  );
};

export default AppTextScreen;
