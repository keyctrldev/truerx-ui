import React from 'react';
import { Alert, SafeAreaView } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { CustomBackButton, SaveMoneyView } from '../../../components';

const SaveMoneyViewScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePress = () => {
    Alert.alert('For Demo');
  };

  return (
    <SafeAreaView>
      <CustomBackButton onBackPress={handleBackPress} />
      <SaveMoneyView
        heading="Save money on your medications"
        buttonTitle="Explore savings center"
        onPress={handlePress}
      />
    </SafeAreaView>
  );
};
export default SaveMoneyViewScreen;
