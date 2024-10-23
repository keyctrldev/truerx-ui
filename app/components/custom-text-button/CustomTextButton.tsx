import React, { memo } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { SVGIcon } from '../common';
import AppText from '../app-text/AppText';
import { styles } from './CustomTextButtonStyles';
import { CustomTextButtonProps } from '../../types';

const CustomTextButton = (props: CustomTextButtonProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[styles.containerStyle, props.containerStyle]}
      onPress={props.onPress}>
      {props.leftIcon && (
        <View style={[styles.svgIconStyles, props.leftIconStyles]}>
          <SVGIcon component={props.leftIcon} disabled={true} />
        </View>
      )}
      <AppText style={[styles.titleTextStyle, props.textStyle]}>{props.textContent}</AppText>
      {props.rightIcon && (
        <View style={[styles.svgIconStyles, props.rightIconStyles]}>
          <SVGIcon component={props.rightIcon} disabled={true} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default memo(CustomTextButton);
