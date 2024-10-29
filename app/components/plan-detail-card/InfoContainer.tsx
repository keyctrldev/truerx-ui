import React, { memo } from 'react';
import { View } from 'react-native';

import { styles } from './PlanDetailCardStyles';
import AppText from '../app-text/AppText';

const InfoContainer: React.FC<{ label: string; value?: string | number }> = ({ label, value }) => {
  if (!value) return <></>;
  return (
    <View style={styles.detailContainer}>
      <AppText style={styles.detailKeyName}>{label}</AppText>
      <AppText style={styles.detailKeyValue}>{label === 'Threshold Amt' ? '\u0024' + value : value}</AppText>
    </View>
  );
};

export default memo(InfoContainer);
