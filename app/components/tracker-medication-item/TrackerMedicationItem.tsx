import React, { memo } from 'react';
import { View } from 'react-native';

import { SVGIcon } from '../common';
import AppText from '../app-text/AppText';

import { styles } from './TrackerMedicationItemStyles';
import { TrackerMedicationItemProps } from '../../types';
import { InfoIcon, MedicineIcon } from '../../assets/svgs';

const TrackerMedicationItem: React.FC<TrackerMedicationItemProps> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <SVGIcon component={<MedicineIcon />} disabled={true} />
      </View>
      <View style={styles.textContainer}>
        <AppText style={styles.drugName}>{props.drugName}</AppText>
        <View style={styles.infoInterface}>
          <AppText style={styles.infoContent}>
            {props.type}
            {', '}
            {props.dosage}
            {`${props.dosageType} \u2022`} {props.date}
          </AppText>
        </View>
      </View>
      <SVGIcon component={<InfoIcon />} onPress={props.onInfoIconPress} containerStyle={styles.rightIconContainer} />
    </View>
  );
};

export default memo(TrackerMedicationItem);
