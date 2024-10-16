import React from 'react';
import { Image, View } from 'react-native';

import AppText from '../app-text/AppText';
import { styles } from './OnboadingSwiperStyle';

interface OnboardingSwiperProps {
  SwiperDes?: string;
  SwiperImage?: number;
  SwiperHeader?: string;
}

const OnboardingSwiper = ({ SwiperImage, SwiperHeader, SwiperDes }: OnboardingSwiperProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.slideParent}>
        <Image source={SwiperImage} style={styles.slide} />
        <AppText style={styles.headerTxt}>{SwiperHeader}</AppText>
        <AppText style={styles.DesTxt}>{SwiperDes}</AppText>
      </View>
    </View>
  );
};

export default OnboardingSwiper;
