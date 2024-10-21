import React from 'react';
import { styles } from './SvgScreenStyles';

import { MailIcon } from '../../../assets/svgs';
import { SVGIcon } from '../../../components/common';
import { SafeAreaContainer } from '../../../components';

const SvgScreen = () => {
  return (
    <SafeAreaContainer style={styles.container}>
      <SVGIcon component={<MailIcon/>} />
    </SafeAreaContainer>
  );
};

export default SvgScreen;
