import React, { useCallback, useRef, useState } from 'react';
import { Platform, StatusBar, View } from 'react-native';

import Swiper from 'react-native-swiper';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useFocusEffect, useNavigation } from '@react-navigation/native';

import { Colors } from '../../theme';
import { styles } from './OnboardingStyle';
import { OnboardingProps } from '../../types';
import { CustomButton } from '../../components';
import { loginScreenString, onboardingData, Routes } from '../../constants';
import OnboardingSwiper from '../../components/onboarding-swiper/OnboardingSwiper';

const Onboarding: React.FC = () => {
  const swiperRef = useRef<Swiper>(null);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const nextBtnTitleText =
    currentIndex === 2 ? loginScreenString?.onboarding?.getStarted : loginScreenString?.onboarding?.next;

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      swiperRef?.current?.scrollBy(1);
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: Routes.PreLogin }],
      });
    }
  };

  const handleSkip = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: Routes.PreLogin }],
    });
  };

  //! This script is for making statusbar transparent in android.
  useFocusEffect(
    useCallback(() => {
      Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }, []),
  );

  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        ref={swiperRef}
        dotColor={Colors.dotColor}
        dotStyle={styles.dotStyle}
        activeDotColor={Colors.white}
        activeDotStyle={styles.activeDotStyle}
        paginationStyle={styles.dotPaginationStyle}
        onIndexChanged={index => setCurrentIndex(index)}>
        {onboardingData?.map((item: OnboardingProps, index: number) => (
          <OnboardingSwiper
            key={index}
            swiperImage={item?.image}
            swiperHeader={item?.header}
            swiperDes={item?.description}
          />
        ))}
      </Swiper>
      <View style={styles.bottom}>
        <CustomButton
          title={nextBtnTitleText}
          style={styles.customButtonStyle}
          titleTextStyle={styles.buttonLabelStyle}
          onPress={handleNext}
        />
        <CustomButton
          title={loginScreenString.onboarding.skip}
          style={[styles.customButtonStyle, styles.skipBtnContainer]}
          titleTextStyle={[styles.buttonLabelStyle, styles.skipBtnTextStyle]}
          onPress={handleSkip}
        />
      </View>
    </View>
  );
};

export default Onboarding;
