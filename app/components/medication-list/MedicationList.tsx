import React from 'react';
import { Image, View } from 'react-native';
import AppText from '../app-text/AppText';
import './MedicationListStyle';
import { styles } from './MedicationListStyle';
import { Icons } from '../../assets';
import { MedicationDetails } from '../../types';

const MedicationList = ({ MedicineName, Count, Dosage, Supply, Refill }: MedicationDetails) => {
  return (
    <View style={styles.medicineContainer}>
      <View style={styles.medicine}>
        <View style={styles.medicineIcon}>
          {/* Icon need to be changed according  to design */}
          <Image source={Icons.pillsIcon} style={styles.pillsImage} />
        </View>

        <View style={styles.medicineDetails}>
          <AppText style={styles.medicineName}>{MedicineName}</AppText>

          <View style={styles.medicineDosage}>
            <AppText style={styles.textDosage}>{Count} CT,</AppText>
            <AppText style={styles.textDosage}>{Dosage} mg</AppText>
          </View>

          <View style={styles.medicineRefill}>
            <AppText style={styles.textRefill}>{Supply} day supply</AppText>
            <AppText style={styles.textRefill}>{`\u2022 ${Refill}`} days to refill</AppText>
          </View>
        </View>
      </View>
    </View>
  );
};
export default MedicationList;
