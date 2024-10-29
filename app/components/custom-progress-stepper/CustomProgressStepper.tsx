import React, { memo } from 'react';
import { FlatList, View } from 'react-native';

import AppText from '../app-text/AppText';
import Dash from '../dash-line-component/Dash';
import { Colors, verticalScale } from '../../theme';
import { styles } from './CustomProgressStepperStyle';
import { AlertCircle, CheckIcon } from '../../assets/svgs';
import { ProgressStepperComponentProps, StepperData } from '../../types';
import { useGlobalStyles } from '../../utils/GlobalStyles';

const CustomProgressStepper = (props: ProgressStepperComponentProps) => {
  const { progressCount, eventList, currentStep, status } = props;

  const generateProgressSteps = () => {
    return Array.from({ length: progressCount }, (_, index) => index + 1);
  };
  const steps: number[] = generateProgressSteps();
  const GlobalStyles = useGlobalStyles();

  const renderStep = ({ index }: { index: number }) => {
    const isActive = index === currentStep ? true : false;
    const isComplete = index < currentStep ? true : false;
    const isPending = !isActive && !isComplete;
    const lastStepContainer = index == steps.length - 1;
    const firstStepContainer = index == 0;
    const isDeniedStatus = status == 'Denied';

    return (
      <View style={[styles.stepContainer]}>
        <View
          style={[
            styles.circle,
            isActive && styles.activeCircle,
            firstStepContainer && styles.firstStepContainer,
            isPending && styles.pendingContainer,
            lastStepContainer && styles.lastStepContainer,
          ]}>
          {!lastStepContainer && <View style={(isActive || isComplete) && styles.completedProgressStep} />}
          {lastStepContainer && (
            <View
              style={[
                styles.lastStepContainerStyle,
                isDeniedStatus ? styles.declineContainerStyle : styles.approvedContainerStyle,
              ]}>
              {isDeniedStatus ? (
                <AlertCircle height={styles.iconStyle.height} width={styles.iconStyle.width} />
              ) : (
                <CheckIcon height={styles.iconStyle.height} width={styles.iconStyle.width} />
              )}
            </View>
          )}
        </View>
        {index < steps.length - 1 &&
          (isComplete ? (
            <View style={styles.completedProgressView} />
          ) : (
            <Dash
              style={styles.dashLineContainer}
              dashColor={Colors.overlayDark}
              dashLength={verticalScale(9)}
              dashGap={5}
              dashStyle={styles.dashLineStyle}
            />
          ))}
      </View>
    );
  };

  const renderEvents = ({ item, index }: { item: StepperData; index: number }) => {
    const lastStepContainer = index == steps.length - 1;
    return (
      <View style={styles.eventTextContainer}>
        <View style={GlobalStyles.rowSpaceBetweenContainer}>
          <AppText style={styles.eventNameText}>{item.event}</AppText>
          {status != 'Pending' && lastStepContainer && (
            <View
              style={[
                styles.statusContainer,
                status == 'Denied' ? styles.declineContainerStyle : styles.approvedContainerStyle,
              ]}>
              <AppText style={[styles.deniedTextContainer]}>{status}</AppText>
            </View>
          )}
        </View>
        <View style={styles.stepData}>
          <AppText style={styles.eventTimeTexT}>{item.date}</AppText>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.progressStepper}>
      <FlatList data={steps} keyExtractor={(_i, index) => index.toString()} renderItem={renderStep} bounces={false} />
      <FlatList
        data={eventList}
        bounces={false}
        keyExtractor={(_i, index) => index.toString()}
        renderItem={renderEvents}
      />
    </View>
  );
};
export default memo(CustomProgressStepper);
