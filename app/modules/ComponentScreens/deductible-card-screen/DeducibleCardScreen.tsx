import React from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { useGlobalStyles } from '../../../utils/GlobalStyles';
import { styles } from './DeducibleCardScreenStyles';
import { CustomBackButton, PlanBenefitSummary, SafeAreaContainer } from '../../../components';

const DeducibleCardScreen = () => {
  const GlobalStyles = useGlobalStyles();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaContainer style={GlobalStyles.mainContainerStyle}>
      <CustomBackButton onBackPress={handleBackPress} />

      <PlanBenefitSummary
        isDeducible={true}
        title="Deductibles"
        deductibleAmount="$1500"
        outOfPocketAmount="$4,000"
        deductiveProgressValue={undefined}
        outOfPocketMaxProgressValue={undefined}
      />
      <PlanBenefitSummary
        isDeducible={false}
        deductibleAmount={'$150'}
        title={'Your Plan Benefit'}
        outOfPocketAmount={'$4,350'}
        deductiveProgressValue={0.8}
        outOfPocketMaxProgressValue={0.3}
        style={styles.deducibleCardContainerStyle}
      />
    </SafeAreaContainer>
  );
};

export default DeducibleCardScreen;
