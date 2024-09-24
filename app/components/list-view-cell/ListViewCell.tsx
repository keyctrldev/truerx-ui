import React from 'react';
import { View } from 'react-native';
import { styles } from './ListViewCellStyle';
import AppText from '../app-text/AppText';
import { capitalizeFLetter, getStatusColor } from '../../utils';

interface ListViewCellProps {
  typeOfConsultance: string;
  Description: string;
  status: string;
}

const ListViewCell = ({ typeOfConsultance, Description, status }: ListViewCellProps) => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.headingContainer}>
        <AppText style={styles.listHeading}>{typeOfConsultance}</AppText>
        <AppText style={styles.listDetails}>{Description}</AppText>
      </View>
      <View style={styles.statusContainer}>
        <AppText style={[styles.statusTextStyle, { color: getStatusColor(status) }]}>
          {capitalizeFLetter(status)}
        </AppText>
      </View>
    </View>
  );
};
export default React.memo(ListViewCell);
