import React from 'react';
import { MedicationList } from '../../components';

const MedicationListScreen = () => {
  return <MedicationList MedicineName="Humira" Count={50} Dosage={200} Supply={30} Refill={10} />;
};
export default MedicationListScreen;
