import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

import { Images } from '../../assets';
import { styles } from './PreLoginScreenStyle';
import { Colors, verticalScale } from '../../theme';
import { loginScreenString } from '../../constants';
import { AppText, CustomButton, SafeAreaContainer } from '../../components';

const PreLoginScreen: React.FC = () => {
  return (
    <SafeAreaContainer style={styles.container}>
      <View style={styles.topInterface}>
        <Image source={Images.prelogin} style={styles.preLogin} />
        <AppText style={styles.headerTxt}>{loginScreenString.preLogin.header}</AppText>
        <AppText style={styles.contentTxt}>{loginScreenString.preLogin.content}</AppText>
      </View>
      <View style={styles.bottomInterface}>
        <ImageBackground resizeMode="contain" style={styles.vectorImage} source={Images.vectorBG}>
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
              <AppText style={{...styles.terms, color: Colors.primaryThemeColor}}>{loginScreenString.preLogin.secondTerm}</AppText>
            </AppText>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaContainer>
  );
};

export default PreLoginScreen;
