import React, { memo } from 'react';
import { View } from 'react-native';
import { SVGIcon } from '../common';
import { TrueRxContent, TrueRxIcon } from '../../assets/svgs';
import { styles } from './MembershipCardStyle';
import DetailsContainer from './DetailsContainer';
import { MembershipCardProp } from '../../types';

const MemberShipCard: React.FC<MembershipCardProp> = props => {
  const { memberId, memberName, groupNumber, rxBin, pcn, rxGCP, coPays } = props;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.logoContainer}>
        <SVGIcon component={<TrueRxIcon />} disabled />
        <SVGIcon component={<TrueRxContent />} disabled />
      </View>
      <View style={styles.line} />
      <View style={styles.card}>
        <View style={styles.cardColumn}>
          <DetailsContainer label={'Member Name'} value={memberName} />
          <DetailsContainer label={'Member ID'} value={memberId} />
          <DetailsContainer label={'Group #'} value={groupNumber} />
        </View>
        <View style={styles.cardColumn}>
          <DetailsContainer label={'RXBIN'} value={rxBin} />
          <DetailsContainer label={'PCN'} value={pcn} />
          <DetailsContainer label={'RXGCP'} value={rxGCP} />
        </View>
        <View style={styles.cardColumn}>
          <DetailsContainer label={'Copays'} value={coPays} />
        </View>
      </View>
    </View>
  );
};
export default memo(MemberShipCard);
