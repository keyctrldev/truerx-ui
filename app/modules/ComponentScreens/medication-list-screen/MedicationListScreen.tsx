import React from 'react';
import { SafeAreaView } from 'react-native';
import { MedicationList } from '../../../components';

const MedicationListScreen = () => {
  return (
    <SafeAreaView>
      <MedicationList medicineName="Humira" count={50} dosage={200} supply={30} refill={10} />
    </SafeAreaView>
  );
};
export default MedicationListScreen;
