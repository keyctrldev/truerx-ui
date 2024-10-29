import { Text, View } from 'react-native';
import React, { memo, useEffect } from 'react';

import { useFormik } from 'formik';

import AppText from '../app-text/AppText';
import { styles } from './PasswordValidationStyles';
import { PasswordValidationProps } from '../../types';
import { CloseIcon, RightIcon } from '../../assets/svgs';
import { passwordValidationError } from '../../constants';
import { useGlobalStyles } from '../../utils/GlobalStyles';
import { getValidationMessages, PasswordValidationSchema } from '../../utils';

const PasswordValidation = (props: PasswordValidationProps) => {
  const { password, containerStyle, isValid } = props;
  const GlobalStyles = useGlobalStyles();

  const { setFieldValue, values } = useFormik({
    initialValues: { password: '' },
    validationSchema: PasswordValidationSchema,
    onSubmit: () => {},
  });

  useEffect(() => {
    setFieldValue('password', password);
    isValid(getValidationMessages(password).every(item => item.condition));
  }, [password]);

  return (
    <View style={containerStyle}>
      <AppText style={styles.titleTextStyle}>{passwordValidationError.passwordRequirements}</AppText>
      {getValidationMessages(values.password).map((msg, index) => (
        <View style={[GlobalStyles.rowContainer, styles.errorTextContainer]}>
          {msg.condition ? <RightIcon style={styles.iconStyle} /> : <CloseIcon style={styles.iconStyle} stroke="red" />}
          <Text
            key={index}
            style={[styles.validationText, msg.condition ? styles.validTextStyle : styles.inValidTextStyle]}>
            {msg.message}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default memo(PasswordValidation);
