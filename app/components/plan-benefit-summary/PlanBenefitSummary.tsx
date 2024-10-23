import React, { memo } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import AppText from '../app-text/AppText';
import { styles } from './PlanBenefitSummaryStyles';
import { ChevronRightIcon } from '../../assets/svgs';
import { PlanBenefitSummaryProps } from '../../types';
import { useGlobalStyles } from '../../utils/GlobalStyles';
import { planBenefitSummaryComponent } from '../../constants';
import { Colors, horizontalScale, verticalScale } from '../../theme';
import CustomLinearProgressBar from '../linear-progress-bar/CustomLinearProgressBar';

const PlanBenefitSummary = (props: PlanBenefitSummaryProps & TouchableOpacityProps) => {
  const GlobalStyles = useGlobalStyles();

  const renderProgressBar = (amount: string, progressValue: number, title: string) => (
    <View style={{ flex: 1 }}>
      <AppText style={styles.subTitleText}>{title}</AppText>
      <View style={GlobalStyles.rowContainer}>
        <AppText style={styles.amountTextStyle}>{amount}</AppText>
        <AppText style={styles.remainingTextStyle}>{planBenefitSummaryComponent.remaining}</AppText>
      </View>
      <CustomLinearProgressBar
        width={horizontalScale(150)}
        height={verticalScale(8)}
        progress={progressValue}
        color={Colors.lightOrange}
        unfilledColor={Colors.offWhite}
        borderWidth={horizontalScale(0)}
      />
    </View>
  );

  return (
    <TouchableOpacity style={styles.mainContainerStyle} activeOpacity={0.8} {...props}>
      <View style={GlobalStyles.rowSpaceBetweenContainer}>
        <AppText style={[styles.titleTextStyle, props.titleTextStyle]}>{props.title}</AppText>
        {props.icon ?? <ChevronRightIcon />}
      </View>
      <View style={[GlobalStyles.rowSpaceBetweenContainer, styles.planDetailsContainer]}>
        {renderProgressBar(
          props.deductibleAmount,
          props.deductiveProgressValue,
          planBenefitSummaryComponent.deductible,
        )}
        {renderProgressBar(
          props.outOfPocketAmount,
          props.outOfPocketMaxProgressValue,
          planBenefitSummaryComponent.outOfPocketMax,
        )}
      </View>
    </TouchableOpacity>
  );
};

export default memo(PlanBenefitSummary);
