import React, { useRef, useState } from 'react';
import { ImageSourcePropType, View } from 'react-native';

import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../theme';
import { styles } from './OnboardingStyle';
import { CustomButton } from '../../components';
import { loginScreenString, onboardingData, Routes } from '../../constants';
import OnboardingSwiper from '../../components/onboarding-swiper/OnboardingSwiper';

interface OnboardingProps {
  image: ImageSourcePropType;
  header: string;
  description: string;
}

const Onboarding: React.FC = () => {
  const swiperRef = useRef<Swiper>(null);
  const navigation = useNavigation<any>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const FirstCustomButtonTitle =
    currentIndex === 2 ? loginScreenString.onboarding.getStarted : loginScreenString.onboarding.next;

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
          title={FirstCustomButtonTitle}
          customStyle={styles.customButtonStyle}
          buttonLabelStyle={styles.buttonLabelStyle}
          onPress={handleNext}
        />
        <CustomButton
          title={loginScreenString.onboarding.skip}
          customStyle={{ ...styles.customButtonStyle, backgroundColor: 'transparent' }}
          buttonLabelStyle={{ ...styles.buttonLabelStyle, color: Colors.white }}
          onPress={handleSkip}
        />
      </View>
    </View>
  );
};

export default Onboarding;
