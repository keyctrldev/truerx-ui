import React, { useState } from 'react';
import { styles } from './CustomProgressStepperStyle';
import { FlatList, Text, View } from 'react-native';
import CustomButton from '../custom-button/CustomButton';
import { stepperData } from '../../utils';
import { StepperData } from '../../types';
import AppText from '../app-text/AppText';
import { stepperComponentStrings } from '../../constants';

const stepperEvents: StepperData[] = stepperData;

const CustomProgressStepper = () => {
  const steps: number[] = [1, 2, 3, 4];

  const [currentStep, setCurrentStep] = useState<number>(0);

  const onNextStepPress = () => {
    setCurrentStep(currentStep + 1);
  };

  const onRestPress = () => {
    setCurrentStep(0);
  };

  const renderStep = ({ index }: { index: number }) => {
    const isActive = index === currentStep ? true : false;
    const isComplete = index < currentStep ? true : false;

    return (
      <View style={styles.stepContainer}>
        <View style={[styles.circle, isComplete && styles.completedCircle, isActive && styles.activeCircle]}></View>
        {index < steps.length - 1 && <View style={[styles.line, isComplete && styles.completedCircle]} />}
      </View>
    );
  };

  const renderEvents = ({ item }: { item: StepperData }) => {
    return (
      <View style={styles.stepData}>
        <AppText style={styles.eventList}>{item.date}</AppText>
        <AppText style={styles.eventList}>{item.event}</AppText>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.progressStepper}>
        <FlatList data={steps} keyExtractor={item => item.toString()} renderItem={renderStep} />
        <FlatList data={stepperEvents} keyExtractor={(item, index) => index.toString()} renderItem={renderEvents} />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title={stepperComponentStrings.nextButton}
          onPress={onNextStepPress}
          customStyle={styles.stepButton}
        />
        <CustomButton
          title={stepperComponentStrings.resetButton}
          onPress={onRestPress}
          customStyle={styles.stepButton}
        />
      </View>
    </View>
  );
};
export default CustomProgressStepper;
