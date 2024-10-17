
import React from 'react';
import { ImageSourcePropType, ImageStyle, StyleProp, View, ViewStyle } from 'react-native';

import { TextInput } from 'react-native-paper';

import AppText from '../app-text/AppText';
import { styles } from './CustomInputTextStyle';
import { Colors, moderateScale } from '../../theme';

interface CustomInputTextPops {
  onBlur?: any;
  inputRef?: any;
  error?: string;
  label?: string;
  rightIcon?: any;
  LeftIcon?: any;
  touched?: boolean;
  keyboardType?: any;
  editable?: boolean;
  maxLength?: number;
  defaultValue?: any;
  onChangeText?: any;
  returnKeyType?: any;
  autoFocus?: boolean;
  multiline?: boolean;
  textInputView?: any;
  onPress?: () => void;
  placeholder?: string;
  onSubmitEditing?: any;
  emailIcon?: ImageStyle;
  secureTextEntry?: boolean;
  onRightPress?: () => void;
  value?: string | undefined;
  source?: ImageSourcePropType;
  onLeftIconPress?: () => void;
  mainViewStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<ViewStyle>;
  mainTextStyle?: StyleProp<ViewStyle>;
  rightIconAdditionalStyle?: StyleProp<ImageStyle>;
  additionalContainerStyle?: StyleProp<ViewStyle>;
}

const CustomInputText: React.FC<CustomInputTextPops> = ({
  label,
  value,
  inputRef,
  LeftIcon,
  rightIcon,
  maxLength,
  autoFocus,
  placeholder,
  keyboardType,
  defaultValue,
  onChangeText,
  returnKeyType,
  textInputStyle,
  onSubmitEditing,
  secureTextEntry,
  editable = true,
  multiline = false,
  onRightPress,
  additionalContainerStyle,
}) => {
  return (
    <View style={additionalContainerStyle}>
      <TextInput
        mode="flat"
        value={value}
        ref={inputRef}
        editable={editable}
        autoCorrect={false}
        disabled={!editable}
        maxLength={maxLength}
        multiline={multiline}
        autoCapitalize="none"
        placeholder={placeholder}
        keyboardType={keyboardType}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        underlineColor="transparent"
        returnKeyType={returnKeyType}
        autoFocus={autoFocus || false}
        activeUnderlineColor='transparent'
        onSubmitEditing={onSubmitEditing}
        secureTextEntry={secureTextEntry}
        style={[styles.input,textInputStyle]}
        placeholderTextColor={Colors.mediumGray}
        label={
          <AppText style={{ color: Colors.mediumGray, fontSize: moderateScale(18) }}>
            {label}
          </AppText>
        }
        left={LeftIcon && <TextInput.Icon icon={() => LeftIcon} />}
        right={
          rightIcon && (
            <TextInput.Icon icon={() => rightIcon} onPress={onRightPress} />
          )
        }
      />
    </View>
  );
};

export default CustomInputText;


