import React from 'react';
import { MembershipCard } from '../../../components';
import { SafeAreaView } from 'react-native';

const MembershipCardScreen = () => {
  return (
    <SafeAreaView>
      <MembershipCard
        memberId={99665683711101}
        memberName="Kris Schepers"
        groupNumber={5415}
        rxBin="020958"
        pcn="0796000"
        rxGCP="TRUE5415"
        coPays="In-network PCP $35 In-network Specialist $40 urgent care $40 Emergency Room $300"
      />
    </SafeAreaView>
  );
};
export default MembershipCardScreen;