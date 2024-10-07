// Custom Text component that wraps the native Text component.
// This component allows for consistent styling across the app

import React from 'react';
import { Text, TextProps } from 'react-native';
import { styles } from './AppTextStyle';

const AppText = (props: TextProps) => {
  const { children, style, ...rest } = props;
  console.log('props...', props)
  return (
    <Text style={[styles.fontStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;
