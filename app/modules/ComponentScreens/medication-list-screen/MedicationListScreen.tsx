import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { CustomBackButton, MedicationList, SafeAreaContainer } from '../../../components';

const MedicationListScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaContainer>
      <CustomBackButton onBackPress={handleBackPress} />
      <MedicationList medicineName="Humira" count={50} dosage={200} supply={30} refill={10} />
    </SafeAreaContainer>
  );
};
export default MedicationListScreen;
