import React, { useState } from 'react';
import { View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { stepperData } from '../../../utils';
import { styles } from './CustomProgressBarScreenStyles';
import { stepperComponentStrings } from '../../../constants';
import { CustomBackButton, CustomButton, CustomProgressStepper, SafeAreaContainer } from '../../../components';

const CustomProgressBarScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [currentStep, setCurrentStep] = useState<number>(0);

  const onNextStepPress = () => {
    setCurrentStep(currentStep + 1);
  };

  const onRestPress = () => {
    setCurrentStep(0);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaContainer>
      <CustomBackButton onBackPress={handleBackPress} />
      <View style={styles.mainContainerStyles}>
        <CustomProgressStepper progressCount={4} eventList={stepperData} currentStep={currentStep} status="Pending" />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title={stepperComponentStrings.nextButton} onPress={onNextStepPress} />
        <CustomButton title={stepperComponentStrings.resetButton} onPress={onRestPress} isSecondaryButton={true} />
      </View>
    </SafeAreaContainer>
  );
};

export default CustomProgressBarScreen;
