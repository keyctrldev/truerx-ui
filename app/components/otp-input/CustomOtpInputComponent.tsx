import React, { memo } from 'react';

import OTPInputView, { InputProps } from '@twotalltotems/react-native-otp-input';

import { otpInputComponentProps } from '../../types';
import { styles } from './CustomOtpInputComponentStyles';

const CustomOtpInputComponent = (props: otpInputComponentProps & InputProps) => {
  return (
    <OTPInputView
      {...props}
      style={styles.otpContainerStyle}
      onCodeChanged={code => props.setOtp(code)}
      autoFocusOnLoad={true}
      keyboardType="number-pad"
      codeInputFieldStyle={styles.otpInputContainer}
      codeInputHighlightStyle={styles.focusedContainerStyle}
    />
  );
};

export default memo(CustomOtpInputComponent);
