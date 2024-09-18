import {
  Image,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Dispatch, ForwardedRef, SetStateAction } from "react";
import { Icons } from "../../assets";
import { styles } from "./CustomTextInputStyle";
import { Colors } from "../../theme";

interface CustomInputPropType {
  setSecureEntryText?: Dispatch<SetStateAction<boolean>>;
}

export type CustomInputType = (
  props: TextInputProps & CustomInputPropType,
  ref: ForwardedRef<TextInput>
) => React.JSX.Element;

const CustomTextInput: CustomInputType = (
  {
    placeholder,
    onSubmitEditing,
    onChangeText,
    onBlur,
    keyboardType,
    returnKeyType,
    defaultValue,
    setSecureEntryText,
    secureTextEntry,
    multiline = false,
  },
  ref
) => {
  return (
    <View style={styles.inputTextViewStyle}>
      <View style={styles.inputViewStyle}>
        <TextInput
          autoCapitalize="none"
          multiline={multiline}
          placeholder={placeholder}
          style={styles.inputStyle}
          placeholderTextColor={Colors.primary20}
          ref={ref}
          onSubmitEditing={onSubmitEditing}
          defaultValue={defaultValue}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          keyboardAppearance="dark"
        />
        {setSecureEntryText && (
          <TouchableOpacity
            onPress={() => setSecureEntryText(!secureTextEntry)}
          >
            <View style={styles.eyeImageViewStyle}>
              <Image
                source={secureTextEntry ? Icons.eyeHide : Icons.eyeOpen}
                style={styles.eyeImageStyle}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default React.forwardRef(CustomTextInput);
