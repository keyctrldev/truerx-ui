import React, { memo } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import AppText from '../app-text/AppText';
import { ChevronRight } from '../../assets/svgs';
import { styles } from './PlanBenefitSummaryStyles';
import { PlanBenefitSummaryProps } from '../../types';
import { useGlobalStyles } from '../../utils/GlobalStyles';
import { planBenefitSummaryComponent } from '../../constants';
import { Colors, horizontalScale, verticalScale } from '../../theme';
import CustomLinearProgressBar from '../linear-progress-bar/CustomLinearProgressBar';

const PlanBenefitSummary = (props: PlanBenefitSummaryProps & TouchableOpacityProps) => {
  const GlobalStyles = useGlobalStyles();

  const renderAmountDetails = (amount: string, title: string, progressValue?: number) => (
    <View style={styles.renderAmountDetailsContainer}>
      <AppText style={[styles.subTitleText, props.isDeducible && styles.deducibleTextStyle]}>{title}</AppText>
      <View style={GlobalStyles.rowContainer}>
        <AppText style={[styles.amountTextStyle, props.isDeducible && styles.deducibleTextStyle]}>{amount}</AppText>
        {!!progressValue && (
          <AppText style={styles.remainingTextStyle}>{planBenefitSummaryComponent.remaining}</AppText>
        )}
      </View>
      {!!progressValue && (
        <CustomLinearProgressBar
          width={horizontalScale(150)}
          height={verticalScale(8)}
          progress={progressValue}
          color={Colors.lightOrange}
          unfilledColor={Colors.offWhite}
          borderWidth={horizontalScale(0)}
        />
      )}
    </View>
  );

  return (
    <TouchableOpacity
      {...props}
      style={[styles.mainContainerStyle, props.isDeducible && styles.deducibleContainer, props.style]}
      activeOpacity={0.8}>
      <View style={GlobalStyles.rowSpaceBetweenContainer}>
        <AppText style={[styles.titleTextStyle, props.isDeducible && styles.deducibleTextStyle, props.titleTextStyle]}>
          {props.title}
        </AppText>
        {props.icon ?? <ChevronRight fill={props.isDeducible ? Colors.placeHolderTextColor : Colors.white} />}
      </View>
      <View style={[GlobalStyles.rowSpaceBetweenContainer, styles.planDetailsContainer]}>
        <>
          {renderAmountDetails(
            props.deductibleAmount,
            planBenefitSummaryComponent.deductible,
            props.deductiveProgressValue,
          )}
          {renderAmountDetails(
            props.outOfPocketAmount,
            planBenefitSummaryComponent.outOfPocketMax,
            props.outOfPocketMaxProgressValue,
          )}
        </>
      </View>
    </TouchableOpacity>
  );
};

export default memo(PlanBenefitSummary);
