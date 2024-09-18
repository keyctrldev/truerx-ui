import React, { ForwardedRef, Dispatch, SetStateAction } from "react";
import { TextInput, TextInputProps, View, TouchableOpacity, Image} from 'react-native';
import { styles } from './CustomTextInputStyle'; 
import { Colors } from '../../theme';
import { Icons } from "../../assets";

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
    <View style={styles.textInputViewStyle}>
      <View style={styles.inputViewStyle}>
        <TextInput
          autoCapitalize="none"
          multiline={multiline}
          placeholder={placeholder}
          style={styles.inputStyle}
          placeholderTextColor={Colors.primary}
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
            <View style={styles.eyeIconContainer}>
              <Image
                source={secureTextEntry ? Icons.eyeHide : Icons.eyeOpen}
                style={styles.eyeIcon}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default React.forwardRef(CustomTextInput);
