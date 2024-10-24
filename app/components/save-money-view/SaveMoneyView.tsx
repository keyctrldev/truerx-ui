import React from 'react';
import { View, Text } from 'react-native';
import AppText from '../app-text/AppText';
import CustomButton from '../custom-button/CustomButton';
import { styles } from './SaveMoneyViewStyle';
interface SaveMoneyViewProp {
  heading: string;
  buttonTitle: string;
  onPress: () => void;
}

const SaveMoneyView = ({ heading, buttonTitle, onPress }: SaveMoneyViewProp) => {
  return (
    <View style={styles.viewContainer}>
      <AppText style={styles.headingText}>{heading}</AppText>
      <CustomButton title={buttonTitle} onPress={onPress} customStyle={styles.button} />
    </View>
  );
};
export default SaveMoneyView;
