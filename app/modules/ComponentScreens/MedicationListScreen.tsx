import React from 'react';
import { MedicationList } from '../../components';

const MedicationListScreen = () => {
  return <MedicationList medicineName="Humira" count={50} dosage={200} supply={30} refill={10} />;
};
export default MedicationListScreen;
