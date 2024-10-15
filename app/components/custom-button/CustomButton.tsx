import React from 'react';
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import AppText from '../app-text/AppText';
import styles from './CustomButtonStyle';

interface CustomButtonPropType {
  title: string;
  disabled?: boolean;
  onPress?: () => void;
  customStyle?: ViewStyle;
  buttonLabelStyle?: TextStyle;
}

const CustomButton = ({ title, customStyle, onPress, disabled, buttonLabelStyle }: CustomButtonPropType) => {
  return (
    <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress} activeOpacity={0.6} disabled={disabled}>
      <AppText style={[styles.label, buttonLabelStyle]}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default CustomButton;
