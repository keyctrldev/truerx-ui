import React, { memo } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { verticalScale } from '../../theme';
import { LeftIcon } from '../../assets/svgs';
import { styles } from './CustomBackButtonStyles';
import { backBtnComponent } from '../../constants';
import { CustomBackButtonProps } from '../../types';
import { useGlobalStyles } from '../../utils/GlobalStyles';

const CustomBackButton = (props: CustomBackButtonProps & TouchableOpacityProps) => {
  const GlobalStyles = useGlobalStyles();

  return (
    <TouchableOpacity
      style={[GlobalStyles.rowContainer, styles.btnContainerStyle, props.btnContainerStyle]}
      {...props}
      onPress={props.onBackPress}>
      {props.icon ?? <LeftIcon width={verticalScale(15)} height={verticalScale(15)} />}
      <Text style={[styles.backTextStyle, props.titleTextStyle]}>{props.title ?? backBtnComponent.back}</Text>
    </TouchableOpacity>
  );
};

export default memo(CustomBackButton);
