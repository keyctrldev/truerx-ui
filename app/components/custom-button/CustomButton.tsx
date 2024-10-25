import React, { memo } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import AppText from '../app-text/AppText';
import { CustomButtonProps } from '../../types';
import { useGlobalStyles } from '../../utils/GlobalStyles';
import { styles } from './CustomButtonStyle';

const CustomButton = (props: CustomButtonProps & TouchableOpacityProps) => {
  const GlobalStyles = useGlobalStyles();

  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.buttonContainerStyle,
        props.isSecondaryButton ? styles.secondaryBtnContainer : styles.primaryBtnContainer,
        props.style,
      ]}
      activeOpacity={0.6}>
      <View style={[GlobalStyles.rowContainer, props.childViewContainer]}>
        {props.leftIcon}
        <AppText
          style={[
            styles.titleTextStyle,
            props.isSecondaryButton ? styles.secondaryBtnTitle : styles.primaryBtnTitle,
            props.titleTextStyle,
          ]}>
          {props.title}
        </AppText>
        {props.rightIcon}
      </View>
    </TouchableOpacity>
  );
};

export default memo(CustomButton);
