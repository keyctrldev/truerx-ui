import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { CustomBackButton, MedicationList } from '../../../components';
import { ParamListBase, useNavigation } from '@react-navigation/native';

const MedicationListScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <CustomBackButton onBackPress={handleBackPress} />
      <MedicationList medicineName="Humira" count={50} dosage={200} supply={30} refill={10} />
    </>
  );
};
export default MedicationListScreen;
