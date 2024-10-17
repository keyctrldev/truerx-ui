import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Colors, horizontalScale } from '../../theme';
import { headerComponentStrings, Routes } from '../../constants';
import { AppText, CustomHeader, SafeAreaContainer } from '../../components';

const OverviewScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaContainer style={styles.containerStyle}>
      <CustomHeader heading={headerComponentStrings.Overview} />
      <View style={styles.body}>
        <AppText style={styles.label}>{headerComponentStrings.Overview}</AppText>
        <TouchableOpacity onPress={()=>navigation.navigate(Routes.InputText)}>
           <AppText style={styles.label}>TextInput Components</AppText>
        </TouchableOpacity>
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
    // alignContent: 'center',
    // justifyContent: 'center',
  },

  label: {
    // textAlign: 'center',
    color: Colors.white,
    paddingHorizontal: horizontalScale(10)
  },
});
