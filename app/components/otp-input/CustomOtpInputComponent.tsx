import React, { memo } from 'react';

import { OtpInput, OtpInputProps } from 'react-native-otp-entry';

import { Colors } from '../../theme';
import { otpInputComponentProps } from '../../types';
import { styles } from './CustomOtpInputComponentStyles';

const CustomOtpInputComponent = (props: otpInputComponentProps & OtpInputProps) => {
  return (
    <OtpInput
      {...props}
      type={'numeric'}
      onTextChange={props.setOtp}
      focusColor={Colors.primary}
      focusStickBlinkingDuration={500}
      numberOfDigits={props.digits ?? 6}
      theme={{
        containerStyle: styles.otpContainerStyle,
        pinCodeTextStyle: styles.otpInputTextStyle,
        pinCodeContainerStyle: styles.otpInputContainer,
        focusStickStyle: styles.focusContainerCursorStyle,
        focusedPinCodeContainerStyle: styles.focusedContainerStyle,
        ...props.theme,
      }}
    />
  );
};

export default memo(CustomOtpInputComponent);
