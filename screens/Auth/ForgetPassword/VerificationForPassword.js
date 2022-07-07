import React from 'react';
import VerificationCode from './VerificationCode';

const VerificationForForgetPassword = ({navigation}) => {
  return (
    <VerificationCode
      label="Verify otp"
      navigation={navigation}
      type="forgot_password"
      accountVerification={false}
    />
  );
};

export default VerificationForForgetPassword;
