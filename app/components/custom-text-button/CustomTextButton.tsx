import React from 'react';
import { Pressable, View } from 'react-native';

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
    <Pressable style={[styles.container, containerStyle]} onPress={onPress}>
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
    </Pressable>
  );
};

export default CustomTextButton;
