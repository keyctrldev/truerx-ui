import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { useGlobalStyles } from '../../../utils/GlobalStyles';
import { CustomBackButton, SafeAreaContainer, PlanBenefitSummary } from '../../../components';

const PlanBenefitSummaryScreen = () => {
  const GlobalStyles = useGlobalStyles();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaContainer style={GlobalStyles.mainContainerStyle}>
      <CustomBackButton onBackPress={handleBackPress} />
      <PlanBenefitSummary
        title={'Your Plan Benefit'}
        deductibleAmount={'$150'}
        outOfPocketAmount={'$4,350'}
        deductiveProgressValue={0.8}
        outOfPocketMaxProgressValue={0.3}
      />
    </SafeAreaContainer>
  );
};

export default PlanBenefitSummaryScreen;
