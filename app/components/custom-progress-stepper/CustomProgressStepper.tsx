import React, { useState } from "react";
import { styles } from "./CustomProgressStepperStyle";
import { Text, View } from "react-native";
import CustomButton from "../custom-button/CustomButton";
import { stepperData } from "../../utils";
import { StepperData } from "../../types";

const stepperEvents: StepperData[] = stepperData;

const CustomProgressStepper = () => {
  const steps = [1, 2, 3, 4];
  
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  
  const rest = () => {
    setCurrentStep(1);
  };
  return (
    <View>
      <View style={styles.progressStepper}>
        <View style={styles.stepperContainer}>
          {steps.map((index) => {
            const isActive = index === currentStep ? true : false;
            const isComplete = index < currentStep ? true : false;
            return (
              <View style={styles.stepContainer}>
                <View
                  style={[
                    styles.circle,
                    isComplete && styles.completedCircle,
                    isActive && styles.activeCircle,
                  ]}
                ></View>
                {index <= steps.length - 1 && (
                  <View
                    style={[
                      styles.line,
                      isComplete && styles.completedCircle
                    ]}
                  />
                )}
              </View>
            );
          })}
        </View>

        <View style={styles.stepData}>
          <View style={styles.stepContainer}>
            {stepperEvents.map((item, index) => (
              <Text key={index} style={styles.eventList}>
                {item.date}
              </Text>
            ))}
          </View>
        </View>
        <View>
          {stepperEvents.map((item, index) => (
            <Text key={index} style={styles.eventList}>
              {item.event}
            </Text>
          ))}
        </View>
      </View>
     
      <View style={styles.buttonContainer}>
        <CustomButton title="Next" onPress={nextStep} customStyle={styles.stepButton}></CustomButton>
        <CustomButton title="Reset" onPress={rest} customStyle={styles.stepButton} />
      </View>
    </View>
  );
};
export default CustomProgressStepper;
