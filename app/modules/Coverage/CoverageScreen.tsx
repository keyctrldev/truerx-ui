import React from 'react';
import { View } from 'react-native';

import { styles } from './CoverageScreenStyles';
import { headerComponentStrings } from '../../constants';
import { AppText, CustomHeader, SafeAreaContainer } from '../../components';

const CoverageScreen = () => {
  return (
    <SafeAreaContainer style={styles.containerStyle}>
      <CustomHeader heading={headerComponentStrings.Coverage} />
      <View style={styles.body}>
        <AppText style={styles.label}>{headerComponentStrings.Coverage}</AppText>
      </View>
    </SafeAreaContainer>
  );
};

export default CoverageScreen;
