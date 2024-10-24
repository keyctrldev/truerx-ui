import React, { memo } from 'react';
import { View } from 'react-native';

import { SVGIcon } from '../common';
import AppText from '../app-text/AppText';
import { MoreVert } from '../../assets/svgs';
import { styles } from './ClaimHistoryItemStyles';
import { ClaimHistoryItemProps } from '../../types';

const InfoItem: React.FC<{
  label: string;
  value?: string | number;
}> = ({ label, value }) => {
  if (!value) return <></>;
  return (
    <View style={styles.infoStyles}>
      <AppText style={styles.infoText}>{label}</AppText>
      <AppText style={styles.infoText}>{typeof value === 'number' ? '\u0024' + value : value}</AppText>
    </View>
  );
};

const ClaimHistoryItem: React.FC<ClaimHistoryItemProps> = ({
  date,
  status,
  claimID,
  planPaid,
  memberPaid,
  balancePaid,
  medicationCost,
  medicationName,
}) => {
  return (
    <View style={styles.claimContainer}>
      <View style={styles.statusInterface}>
        <View style={styles.status}>
          <AppText style={styles.processedText}>{status}</AppText>
        </View>
        <View style={styles.moreIconContainer}>
          <SVGIcon component={<MoreVert />} onPress={() => {}} />
        </View>
      </View>
      <View style={styles.middleAlignment}>
        <AppText style={styles.drugName}>{medicationName}</AppText>
        <AppText>
          {'Claim ID: '}
          {claimID}
        </AppText>
      </View>
      <View style={styles.alignment}>
        <InfoItem label={'Date: '} value={date} />
        <InfoItem label={'Medication Cost:'} value={medicationCost} />
        <InfoItem label={'Plan Paid:'} value={planPaid} />
        <InfoItem label={'Balance Paid:'} value={balancePaid} />
        <InfoItem label={'Member Paid:'} value={memberPaid} />
      </View>
    </View>
  );
};

export default memo(ClaimHistoryItem);
