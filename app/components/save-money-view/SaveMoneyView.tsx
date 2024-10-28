import React from 'react';
import { View, ImageBackground } from 'react-native';

import { Images } from '../../assets';
import AppText from '../app-text/AppText';
import { styles } from './SaveMoneyViewStyle';
import { SaveMoneyViewProp } from '../../types';
import CustomButton from '../custom-button/CustomButton';

const SaveMoneyView = ({ heading, buttonTitle, containerStyle, onPress }: SaveMoneyViewProp) => {
  return (
    <View style={[styles.viewContainer, containerStyle]}>
      <ImageBackground source={Images.backgroundImg} style={styles.imageBackgroundContainer} resizeMode="cover">
        <AppText style={styles.headingText}>{heading}</AppText>
        <CustomButton title={buttonTitle} onPress={onPress} style={styles.savingsButton} />
      </ImageBackground>
    </View>
  );
};
export default SaveMoneyView;
