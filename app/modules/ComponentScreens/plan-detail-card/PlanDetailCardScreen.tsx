import React from 'react';
import { FlatList, Text } from 'react-native';

import { planDesignData } from '../../../utils';
import { PlanDetailCardDataProps } from '../../../types';
import { styles } from './PlanDetailCardScreenStyles';
import { SafeAreaContainer } from '../../../components';
import PlanDetailCard from '../../../components/plan-detail-card/PlanDetailCard';

const PlanDetailCardScreen = () => {
  const renderItem = ({ item }: { item: PlanDetailCardDataProps }) => {
    return (
      <PlanDetailCard
        erisa={item.erisa}
        tpaName={item.tpaName}
        bpdDate={item.bpdDate}
        firmName={item.firmName}
        formulary={item.formulary}
        memberName={item.memberName}
        posRebates={item.posRebates}
        acctNumber={item.acctNumber}
        groupNumber={item.groupNumber}
        thresholdAmt={item.thresholdAmt}
      />
    );
  };

  return (
    <SafeAreaContainer style={styles.container}>
      <Text style={styles.text}>{'Plan DetailCard Screen'}</Text>
      <FlatList
        data={planDesignData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.toString()}
      />
    </SafeAreaContainer>
  );
};

export default PlanDetailCardScreen;
