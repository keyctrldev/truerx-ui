import React from 'react';
import { View, Text, Image } from 'react-native';
import AppText from '../app-text/AppText';
import CustomButton from '../custom-button/CustomButton';
import { styles } from './SaveMoneyViewStyle';
import { Images } from '../../assets';
import { SaveMoneyViewProp } from '../../types';

const SaveMoneyView = ({ heading, buttonTitle, onPress }: SaveMoneyViewProp) => {
  return (
    <View style={styles.viewContainer}>
      <Image source={Images.backgroundImg} />
      <View style={styles.textContainer}>
        <AppText style={styles.headingText}>{heading}</AppText>
        <CustomButton title={buttonTitle} onPress={onPress} style={styles.savingsButton} />
      </View>
    </View>
  );
};
export default SaveMoneyView;
