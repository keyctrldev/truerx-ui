import React from 'react';
import { Alert } from 'react-native';

import { styles } from './SvgScreenStyles';
import { MailIcon } from '../../../assets/svgs';
import { SVGIcon } from '../../../components/common';
import { SafeAreaContainer } from '../../../components';

const SvgScreen = () => {
  return (
    <SafeAreaContainer style={styles.container}>
      <SVGIcon component={<MailIcon />} onPress={() => {
        Alert.alert("SVG pressed!!")
      }} />
    </SafeAreaContainer>
  );
};

export default SvgScreen;
