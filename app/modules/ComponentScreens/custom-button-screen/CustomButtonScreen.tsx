import React from 'react';
import { View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { MailIcon } from '../../../assets/svgs';
import { styles } from './CustomButtonScreenStyles';
import { CustomBackButton, CustomButton, SafeAreaContainer } from '../../../components';

const CustomButtonScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderSvgIcon = (isLeft: boolean) => (
    <MailIcon
      style={isLeft ? styles.leftIconStyle : styles.rightIconStyle}
      width={styles.iconDimension.width}
      height={styles.iconDimension.height}
    />
  );

  return (
    <SafeAreaContainer>
      <CustomBackButton onBackPress={handleBackPress} />
      <View style={styles.container}>
        <CustomButton title="Primary button" onPress={() => {}} style={styles.btnContainerStyle} />
        <CustomButton
          title="Secondary Button"
          onPress={() => {}}
          isSecondaryButton={true}
          style={styles.btnContainerStyle}
        />
        <CustomButton
          title="secondary Btn With Left Icon"
          onPress={() => {}}
          leftIcon={renderSvgIcon(true)}
          isSecondaryButton={true}
          style={styles.btnContainerStyle}
        />
        <CustomButton
          title="Primary Btn With Right Icon"
          onPress={() => {}}
          rightIcon={renderSvgIcon(false)}
          style={styles.btnContainerStyle}
        />
        <CustomButton
          title="secondary Btn With both Icon"
          onPress={() => {}}
          rightIcon={renderSvgIcon(false)}
          leftIcon={renderSvgIcon(true)}
          isSecondaryButton={true}
          style={styles.btnContainerStyle}
        />
      </View>
    </SafeAreaContainer>
  );
};

export default CustomButtonScreen;
