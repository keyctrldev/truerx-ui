import React from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { SaveMoneyView } from '../../../components';

const SaveMoneyViewScreen = () => {
  const handlePress = () => {
    Alert.alert('For Demo');
  };
  return (
    <SafeAreaView>
      <SaveMoneyView
        heading="Save money on your medications"
        buttonTitle="Explore savings center"
        onPress={handlePress}
      />
    </SafeAreaView>
  );
};
export default SaveMoneyViewScreen;
