import React from 'react';
import { FlatList, Text } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { claimsHistoryData } from '../../../utils';
import { ClaimHistoryItemProps } from '../../../types';
import { styles } from './ClaimHistoryItemScreenStyles';
import { CustomBackButton, SafeAreaContainer } from '../../../components';
import ClaimHistoryItem from '../../../components/claim-history-item/ClaimHistoryItem';

const ClaimHistoryItemScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }: { item: ClaimHistoryItemProps }) => {
    return (
      <ClaimHistoryItem
        date={item.date}
        status={item.status}
        claimID={item.claimID}
        planPaid={item.planPaid}
        memberPaid={item.memberPaid}
        balancePaid={item.balancePaid}
        medicationCost={item.medicationCost}
        medicationName={item.medicationName}
      />
    );
  };

  return (
    <SafeAreaContainer style={styles.container}>
      <CustomBackButton onBackPress={handleBackPress} />
      <Text style={styles.heading}>{'ClaimHistoryItemScreen'}</Text>
      <FlatList data={claimsHistoryData} renderItem={renderItem} bounces={false} showsVerticalScrollIndicator={false} />
    </SafeAreaContainer>
  );
};

export default ClaimHistoryItemScreen;
