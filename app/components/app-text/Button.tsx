import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import styles from './ButtonStyle';

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const Button = ({ title, onPress, style, textStyle }: ButtonProps) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.primaryButton, style]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
