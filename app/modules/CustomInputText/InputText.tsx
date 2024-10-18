import React, { RefObject, useRef, useState } from 'react';
import { ScrollView, TextInput, View, KeyboardAvoidingView, Platform } from 'react-native';

import { Eye, Mail } from '../../assets';
import { styles } from './InputTextStyle';
import { SVGIcon } from '../../components/common/SVGIcon';
import { AppText, SafeAreaContainer } from '../../components';
import CustomInputText from '../../components/custom-input-text/CustomInputText';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

const InputText = () => {
  const newPasswordRef = useRef<TextInput>(null);
  const [isValue, setIsValue] = useState<string>('Nick Ben');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const goToNext = (nextRef: RefObject<TextInput>): void => {
    nextRef?.current?.focus();
  };

  return (
    <SafeAreaContainer style={styles.containerStyle}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? verticalScale(60) : verticalScale(40)}>
        <ScrollView bounces={false} style={styles.contain} showsVerticalScrollIndicator={false}>
          <View style={styles.textInput}>
            <AppText>Placeholder::</AppText>
            <CustomInputText label={'Enter Your Name'} placeholder={'Smith John'} onChangeText={() => {}} />

            <AppText>Multiline::</AppText>
            <CustomInputText label={'Address'} placeholder={'Smith John'} multiline={true} onChangeText={() => {}} />

            <AppText>NumberOfLines::</AppText>
            <CustomInputText label={'Address'} placeholder={'Smith John'} multiline={true} onChangeText={() => {}} />

            <AppText>Pass additionalContainerStyle::</AppText>
            <CustomInputText
              label={'Address'}
              placeholder={'Smith John'}
              additionalContainerStyle={styles.additionalContainerStyle}
              onChangeText={() => {}}
            />

            <AppText>Pass textInputStyle::</AppText>
            <CustomInputText
              label={'Address'}
              placeholder={'Smith John'}
              multiline={true}
              textInputStyle={styles.textInputStyle}
              onChangeText={() => {}}
            />

            <AppText>Focus::</AppText>
            <CustomInputText label={'Email ID'} autoFocus={true} onChangeText={() => {}} />

            <AppText>KeyboardType & maxLength::</AppText>
            <CustomInputText label={'Phone Number'} keyboardType="numeric" maxLength={10} onChangeText={() => {}} />

            <AppText>ReturnKeyType::</AppText>
            <CustomInputText label={'Phone Number'} returnKeyType={'done'} onChangeText={() => {}} />

            <AppText>OnSubmitEditing::</AppText>
            <CustomInputText label={'Email'} onSubmitEditing={() => goToNext(newPasswordRef)} onChangeText={() => {}} />

            <AppText>SecureTextEntry::</AppText>
            <CustomInputText ref={newPasswordRef} label={'Password'} secureTextEntry={true} onChangeText={() => {}} />

            <AppText>Editable::</AppText>
            <CustomInputText label={'Email'} value={isValue} editable={false} onChangeText={() => {}} />

            <AppText>Default Value::</AppText>
            <CustomInputText label={'Email'} defaultValue={isValue} onChangeText={() => {}} />

            <AppText>Value & onChangeText::</AppText>
            <CustomInputText label={'Email'} value={isValue} onChangeText={text => setIsValue(text)} />

            <AppText>LeftIcon::</AppText>
            <CustomInputText
              label={'Email Address'}
              leftIcon={<SVGIcon component={<Mail width={horizontalScale(24)} height={verticalScale(24)} />} />}
              onChangeText={() => {}}
            />

            <AppText>RightIcon::</AppText>
            <CustomInputText
              label={'Password'}
              onChangeText={() => {}}
              secureTextEntry={!isPasswordVisible}
              onRightIconPress={() => setIsPasswordVisible(!isPasswordVisible)}
              rightIcon={<SVGIcon component={<Eye width={24} height={24} />} />}
            />
            <AppText>LeftIcon & RightIcon::</AppText>
            <CustomInputText
              label={'Password'}
              onChangeText={() => {}}
              secureTextEntry={!isPasswordVisible}
              onRightIconPress={() => setIsPasswordVisible(!isPasswordVisible)}
              leftIcon={<SVGIcon component={<Mail width={moderateScale(24)} height={verticalScale(24)} />} />}
              rightIcon={<SVGIcon component={<Eye width={moderateScale(24)} height={verticalScale(24)} />} />}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaContainer>
  );
};

export default InputText;
