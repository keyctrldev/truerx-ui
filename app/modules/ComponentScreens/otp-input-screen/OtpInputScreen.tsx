import React from 'react';

import { useGlobalStyles } from '../../../utils/GlobalStyles';
import { CustomOtpInputComponent, SafeAreaContainer } from '../../../components';

const OtpInputScreen = () => {
  const GlobalStyles = useGlobalStyles();

  return (
    <SafeAreaContainer style={GlobalStyles.centerContainer}>
      <CustomOtpInputComponent digits={6} setOtp={otp => {}} autoFocus={true} />
    </SafeAreaContainer>
  );
};

export default OtpInputScreen;
