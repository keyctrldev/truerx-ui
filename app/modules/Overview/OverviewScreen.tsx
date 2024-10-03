import React from 'react';
import { AppText, CustomHeader, SafeAreaContainer } from '../../components';
import { Colors } from '../../theme';
import { StyleSheet, View } from 'react-native';
import { headerComponentStrings } from '../../constants';

const OverviewScreen = () => {
  return (
    <SafeAreaContainer style={styles.containerStyle}>
      <CustomHeader heading={headerComponentStrings.Overview} />
      <View style={styles.body}>
        <AppText style={styles.label}>{headerComponentStrings.Overview}</AppText>
      </View>
    </SafeAreaContainer>
  );
};

export default OverviewScreen;

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.skyBlue,
  },

  body: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },

  label: {
    textAlign: 'center',
    color: Colors.white,
  },
});
