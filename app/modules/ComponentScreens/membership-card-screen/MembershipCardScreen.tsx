import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { CustomBackButton, MembershipCard, SafeAreaContainer } from '../../../components';

const MembershipCardScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaContainer>
      <CustomBackButton onBackPress={handleBackPress} />
      <MembershipCard
        memberId={99665683711101}
        memberName="Kris Schepers"
        groupNumber={5415}
        rxBin="020958"
        pcn="0796000"
        rxGCP="TRUE5415"
        coPays="In-network PCP $35 In-network Specialist $40 urgent care $40 Emergency Room $300"
      />
    </SafeAreaContainer>
  );
};
export default MembershipCardScreen;
