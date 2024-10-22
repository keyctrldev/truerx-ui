import React from 'react';

import { useGlobalStyles } from '../../../utils/GlobalStyles';
import { CustomOtpInputComponent, SafeAreaContainer } from '../../../components';

const OtpInputScreen = () => {
  const GlobalStyles = useGlobalStyles();

  return (
    <SafeAreaContainer style={GlobalStyles.centerContainer}>
      <CustomOtpInputComponent setOtp={otp => {}} pinCount={6} />
    </SafeAreaContainer>
  );
};

export default OtpInputScreen;
