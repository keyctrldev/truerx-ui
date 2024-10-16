import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

import { Images } from '../../assets';
import { verticalScale } from '../../theme';
import { styles } from './PreLoginScreenStyle';
import { loginScreenString } from '../../constants';
import { AppText, CustomButton, SafeAreaContainer } from '../../components';

const PreLoginScreen: React.FC = () => {
  return (
    <SafeAreaContainer style={styles.container}>
      <View style={styles.center}>
        <Image source={Images.prelogin} style={styles.prelogin} />
        <AppText style={styles.header}>{loginScreenString.preLogin.header}</AppText>
        <AppText style={styles.content}>{loginScreenString.preLogin.content}</AppText>
      </View>
      <View style={styles.bottomInterface}>
        <ImageBackground resizeMode="contain" style={styles.vectorBG} source={Images.vectorBG}>
          <CustomButton
            title={loginScreenString.preLogin.createAccount}
            customStyle={{ ...styles.customButtonStyle, marginTop: verticalScale(70) }}
            buttonLabelStyle={styles.buttonLabelStyle}
            onPress={() => {}}
          />
          <CustomButton
            title={loginScreenString.preLogin.signin}
            customStyle={styles.customButtonStyle}
            buttonLabelStyle={styles.buttonLabelStyle}
            onPress={() => {}}
          />
          <View>
            <AppText style={styles.terms}>
              {loginScreenString.preLogin.terms}
              <AppText style={styles.terms2}> {loginScreenString.preLogin.terms2}</AppText>
            </AppText>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaContainer>
  );
};

export default PreLoginScreen;
