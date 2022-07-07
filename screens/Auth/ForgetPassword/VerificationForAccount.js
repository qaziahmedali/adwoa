import React from 'react';
import VerificationCode from './VerificationCode';
const VerificationForAccount = ({navigation}) => {
  return (
    <VerificationCode
      label="Verify Email"
      navigation={navigation}
      type="verification"
      accountVerification={true}
    />
  );
};

export default VerificationForAccount;
