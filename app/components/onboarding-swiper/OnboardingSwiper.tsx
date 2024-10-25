import React, { memo } from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';

import AppText from '../app-text/AppText';
import { styles } from './OnboadingSwiperStyle';

interface OnboardingSwiperProps {
  swiperDes?: string;
  swiperImage?: ImageSourcePropType;
  swiperHeader?: string;
}

const OnboardingSwiper = ({ swiperImage, swiperHeader, swiperDes }: OnboardingSwiperProps) => {
  return (
    <View style={styles.slideParent}>
      <Image source={swiperImage} style={styles.slide} />
      <AppText style={styles.headerTxt}>{swiperHeader}</AppText>
      <AppText style={styles.desTxt}>{swiperDes}</AppText>
    </View>
  );
};

export default memo(OnboardingSwiper);
