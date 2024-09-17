import React from 'react';
import { TextInput as RNTextInput, TextInputProps, View } from 'react-native';
import { styles } from './TextInputStyle'; 

const TextInput = (props: TextInputProps) => {
  // Destructure style and other props
  const { style, ...rest } = props;

  return (
    <View style={styles.container}>
      <RNTextInput 
        style={[styles.input, style]}
        {...rest} 
      />
    </View>
  );
};

export default TextInput;
