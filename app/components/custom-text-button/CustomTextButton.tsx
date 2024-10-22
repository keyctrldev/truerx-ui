import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { SVGIcon } from '../common';
import AppText from '../app-text/AppText';
import { styles } from './CustomTextButtonStyles';
import { CustomTextButtonProps } from '../../types';

const CustomTextButton: React.FC<CustomTextButtonProps> = ({
  onPress,
  leftIcon,
  textStyle,
  rightIcon,
  textContent,
  containerStyle,
  leftIconStyles,
  rightIconStyles,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.container, containerStyle]} onPress={onPress}>
      {leftIcon && (
        <View style={[styles.svgIconStyles,leftIconStyles]}>
          <SVGIcon component={leftIcon} disabled={true}/>
        </View>
      )}
      <AppText style={[styles.customText, textStyle]}>{textContent}</AppText>
      {rightIcon && (
        <View style={[styles.svgIconStyles,rightIconStyles]}>
          <SVGIcon component={rightIcon} disabled={true}/>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomTextButton;
