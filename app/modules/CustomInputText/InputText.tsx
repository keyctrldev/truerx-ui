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
  const [isValue, setIsValue] = useState('Nick Ben');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const goToNext = (nextRef: RefObject<TextInput>): void => {
    nextRef?.current?.focus();
  };

  return (
    <SafeAreaContainer style={styles.containerStyle}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? verticalScale(60) : 0}
      >
        <ScrollView bounces={false} style={styles.contain} showsVerticalScrollIndicator={false}>
          <View style={styles.textInput}>
            <AppText>Placeholder::</AppText>
            <CustomInputText label={'Enter Your Name'} placeholder={'Smith John'} />

            <AppText>Multiline::</AppText>
            <CustomInputText label={'Address'} placeholder={'Smith John'} multiline={true}/>

            <AppText>NumberOfLines::</AppText>
            <CustomInputText label={'Address'} placeholder={'Smith John'} multiline={true} />

            <AppText>Pass additionalContainerStyle::</AppText>
            <CustomInputText label={'Address'} placeholder={'Smith John'} additionalContainerStyle={{
              shadowColor: Colors.black,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              elevation: 5,
              shadowRadius: 4,
              shadowOpacity: 0.3,
            }} />

            <AppText>Pass textInputStyle::</AppText>
            <CustomInputText label={'Address'} placeholder={'Smith John'} multiline={true} textInputStyle={{ borderColor: Colors.green }} />

            <AppText>Focus::</AppText>
            <CustomInputText label={'Email ID'} autoFocus={true} />

            <AppText>KeyboardType & maxLength::</AppText>
            <CustomInputText label={'Phone Number'} keyboardType='numeric' maxLength={10} />

            <AppText>ReturnKeyType::</AppText>
            <CustomInputText label={'Phone Number'} returnKeyType={'done'} />

            <AppText>OnSubmitEditing::</AppText>
            <CustomInputText label={'Email'} onSubmitEditing={() => goToNext(newPasswordRef)} />

            <AppText>SecureTextEntry::</AppText>
            <CustomInputText inputRef={newPasswordRef} label={'Password'} secureTextEntry={true} />

            <AppText>Editable::</AppText>
            <CustomInputText label={'Email'} value={isValue} editable={false} />

            <AppText>Value & onChangeText::</AppText>
            <CustomInputText label={'Email'} value={isValue} onChangeText={(text: string) => { setIsValue(text) }} />

            <AppText>LeftIcon::</AppText>
            <CustomInputText label={'Email Address'} leftIcon={<SVGIcon component={<Mail width={horizontalScale(24)} height={verticalScale(24)} />} />} />

            <AppText>RightIcon::</AppText>
            <CustomInputText
              label={'Password'}
              secureTextEntry={!isPasswordVisible}
              onRightPress={() => setIsPasswordVisible(!isPasswordVisible)}
              rightIcon={<SVGIcon component={<Eye width={24} height={24} />} />}
            />
            <AppText>LeftIcon & RightIcon::</AppText>
            <CustomInputText
              label={'Password'}
              secureTextEntry={!isPasswordVisible}
              onRightPress={() => setIsPasswordVisible(!isPasswordVisible)}
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
