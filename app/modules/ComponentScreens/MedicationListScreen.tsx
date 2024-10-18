import React from 'react';
import { MedicationList } from '../../components';
import { SafeAreaView } from 'react-native';

const MedicationListScreen = () => {
  return (
    <SafeAreaView>
      <MedicationList medicineName="Humira" count={50} dosage={200} supply={30} refill={10} />
    </SafeAreaView>
  );
};
export default MedicationListScreen;
