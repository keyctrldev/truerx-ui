import React from 'react';
import { FlatList, Text } from 'react-native';

import { planDesignData } from '../../../utils';
import { PlanDetailCardDataProps } from '../../../types';
import { styles } from './PlanDetailCardScreenStyles';
import { CustomBackButton, SafeAreaContainer } from '../../../components';
import PlanDetailCard from '../../../components/plan-detail-card/PlanDetailCard';
import { useNavigation } from '@react-navigation/native';

const PlanDetailCardScreen = () => {
  const navigation = useNavigation();
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
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaContainer style={styles.container}>
      <CustomBackButton onBackPress={handleBackPress} />

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
