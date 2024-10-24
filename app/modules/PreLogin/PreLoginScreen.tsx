import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

import { Images } from '../../assets';
import { styles } from './PreLoginScreenStyle';
import { loginScreenString } from '../../constants';
import { AppText, CustomButton, SafeAreaContainer } from '../../components';

const PreLoginScreen: React.FC = () => {
  return (
    <SafeAreaContainer style={styles.container}>
      <View style={styles.topInterface}>
        <Image source={Images.preLogin} style={styles.preLogin} />
        <AppText style={styles.headerTxt}>{loginScreenString.preLogin.header}</AppText>
        <AppText style={styles.contentTxt}>{loginScreenString.preLogin.content}</AppText>
      </View>
      <View style={styles.bottomInterface}>
        <ImageBackground resizeMode="cover" style={styles.vectorImage} source={Images.vectorBG}>
          <CustomButton
            title={loginScreenString.preLogin.createAccount}
            style={[styles.customButtonStyle, styles.createAccountBtnContainer]}
            titleTextStyle={styles.buttonLabelStyle}
            onPress={() => {}}
          />
          <CustomButton
            title={loginScreenString.preLogin.signIn}
            style={styles.signInCustomButtonStyle}
            titleTextStyle={styles.signInButtonLabelStyle}
            onPress={() => {}}
          />
          <AppText style={styles.terms}>
            {loginScreenString.preLogin.terms}
            <AppText onPress={() => {}} style={[styles.terms, styles.termsTextStyle]}>
              {loginScreenString.preLogin.secondTerm}
            </AppText>
          </AppText>
        </ImageBackground>
      </View>
    </SafeAreaContainer>
  );
};

export default PreLoginScreen;
