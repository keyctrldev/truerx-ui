import React, { RefObject, useRef, useState } from 'react';
import { ScrollView, TextInput, View, KeyboardAvoidingView, Platform } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { verticalScale } from '../../../theme';
import { styles } from './InputTextScreenStyles';
import { MailIcon, EyeOpenIcon } from '../../../assets/svgs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText, CustomBackButton } from '../../../components';
import CustomInputText from '../../../components/custom-input-text/CustomInputText';

const InputTextScreen = () => {
  const newPasswordRef = useRef<TextInput>(null);
  const [defaultValue, setDefaultValue] = useState<string>('Nick Ben');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const goToNext = (nextRef: RefObject<TextInput>): void => {
    nextRef?.current?.focus();
  };

  const onEyeIconPress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.containerStyle}>
      <CustomBackButton onBackPress={handleBackPress} />
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? verticalScale(60) : verticalScale(40)}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={styles.textInput}>
            <AppText>{'Placeholder'}</AppText>
            <CustomInputText label={'Enter Your Name'} placeholder={'Smith John'} onChangeText={() => {}} />

            <AppText>{'AdditionalContainerStyle'}</AppText>
            <CustomInputText
              label={'Address'}
              placeholder={'Smith John'}
              additionalContainerStyle={styles.additionalContainerStyle}
              onChangeText={() => {}}
            />

            <AppText>{'TextInputStyle'}</AppText>
            <CustomInputText
              label={'Address'}
              placeholder={'Smith John'}
              textInputStyle={styles.textInputStyle}
              onChangeText={() => {}}
            />

            <AppText>{'Auto Focus'}</AppText>
            <CustomInputText label={'Email ID'} autoFocus={true} onChangeText={() => {}} />

            <AppText>{'KeyboardType & MaxLength'}</AppText>
            <CustomInputText label={'Phone Number'} keyboardType="numeric" maxLength={10} onChangeText={() => {}} />

            <AppText>{'ReturnKeyType'}</AppText>
            <CustomInputText label={'Phone Number'} returnKeyType={'done'} onChangeText={() => {}} />

            <AppText>{'OnSubmitEditing'}</AppText>
            <CustomInputText label={'Email'} onChangeText={() => {}} onSubmitEditing={() => goToNext(newPasswordRef)} />

            <AppText>{'SecureTextEntry & Touchable Right Icon'}</AppText>
            <CustomInputText
              label={'Password'}
              ref={newPasswordRef}
              rightIcon={<EyeOpenIcon />}
              secureTextEntry={!isPasswordVisible}
              onChangeText={() => {}}
              onRightIconPress={onEyeIconPress}
            />

            <AppText>{'Not Editable'}</AppText>
            <CustomInputText label={'Email'} value={'Nick Ben'} editable={false} onChangeText={() => {}} />

            <AppText>{'Default Value'}</AppText>
            <CustomInputText label={'Email'} defaultValue={'Nick Ben'} onChangeText={() => {}} />

            <AppText>{'Value & onChangeText'}</AppText>
            <CustomInputText label={'Email'} value={defaultValue} onChangeText={setDefaultValue} />

            <AppText>{'LeftIcon'}</AppText>
            <CustomInputText label={'Email Address'} leftIcon={<MailIcon />} onChangeText={() => {}} />

            <AppText>{'RightIcon'}</AppText>
            <CustomInputText label={'Test'} rightIcon={<MailIcon />} onChangeText={() => {}} />

            <AppText>{'LeftIcon & RightIcon'}</AppText>
            <CustomInputText label={'Test'} leftIcon={<MailIcon />} rightIcon={<MailIcon />} onChangeText={() => {}} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default InputTextScreen;
