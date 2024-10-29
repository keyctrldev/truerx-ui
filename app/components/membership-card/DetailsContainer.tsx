import React from 'react';
import { View } from 'react-native';
import AppText from '../app-text/AppText';
import { styles } from './MembershipCardStyle';
interface DetailsProp {
  label: string;
  value: string | number;
}
const DetailsContainer = ({ label, value }: DetailsProp) => {
  return (
    <View style={styles.detailsContainer}>
      <AppText style={styles.detailsLabel}>{label}</AppText>
      <AppText style={styles.detailsValue}>{value}</AppText>
    </View>
  );
};
export default DetailsContainer;
