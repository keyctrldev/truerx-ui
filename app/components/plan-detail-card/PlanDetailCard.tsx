import React, { memo } from 'react';
import { Text, View } from 'react-native';

import { SVGIcon } from '../common';
import InfoContainer from './InfoContainer';
import { styles } from './PlanDetailCardStyles';
import { PlanDetailCardProps } from '../../types';
import { TrueRxContent, TrueRxIcon } from '../../assets/svgs';

const PlanDetailCard: React.FC<PlanDetailCardProps> = props => {
  const {
    erisa,
    bpdDate,
    tpaName,
    firmName,
    formulary,
    memberName,
    posRebates,
    acctNumber,
    groupNumber,
    thresholdAmt,
  } = props;
  return (
    <View style={styles.detailCardContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <SVGIcon component={<TrueRxIcon />} containerStyle={styles.trueRxIcon} />
          <SVGIcon component={<TrueRxContent />} />
        </View>
        <Text style={styles.planText}>{'Plan Design'}</Text>
      </View>
      <View style={styles.separator} />
      <InfoContainer label={'Member Name'} value={memberName} />
      <InfoContainer label={'Acct. #'} value={acctNumber} />
      <InfoContainer label={'Group #'} value={groupNumber} />
      <InfoContainer label={'BPD Date'} value={bpdDate} />
      <InfoContainer label={'ERISA'} value={erisa} />
      <InfoContainer label={'TPA Name'} value={tpaName} />
      <InfoContainer label={'POS Rebates'} value={posRebates} />
      <InfoContainer label={'Firm Name'} value={firmName} />
      <InfoContainer label={'Formulary'} value={formulary} />
      <InfoContainer label={'Threshold Amt'} value={thresholdAmt} />
    </View>
  );
};

export default memo(PlanDetailCard);
