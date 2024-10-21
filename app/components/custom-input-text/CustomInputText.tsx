import React from 'react';
import { View } from 'react-native';

import { TextInput } from 'react-native-paper';

import { SVGIcon } from '../common';
import AppText from '../app-text/AppText';
import { CustomInputType } from '../../types';
import { styles } from './CustomInputTextStyle';
import { Colors, moderateScale } from '../../theme';

const CustomInputText: CustomInputType = (
  {
    label,
    value,
    leftIcon,
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
    onLeftIconPress,
    editable = true,
    onRightIconPress,
    multiline = false,
    additionalContainerStyle,
  },
  ref,
) => {
  return (
    <View style={additionalContainerStyle}>
      <TextInput
        ref={ref}
        mode="flat"
        value={value}
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
        activeUnderlineColor="transparent"
        onSubmitEditing={onSubmitEditing}
        secureTextEntry={secureTextEntry}
        style={[styles.input, textInputStyle]}
        placeholderTextColor={Colors.mediumGray}
        left={leftIcon && <TextInput.Icon icon={() => <SVGIcon component={leftIcon} disabled={!onLeftIconPress} onPress={onLeftIconPress} />} />}
        right={rightIcon && <TextInput.Icon icon={() => <SVGIcon component={rightIcon} disabled={!onRightIconPress} onPress={onRightIconPress} />} />}
        label={<AppText style={{ color: Colors.mediumGray, fontSize: moderateScale(18) }}>{label}</AppText>}
      />
    </View>
  );
};

export default React.forwardRef(CustomInputText);
