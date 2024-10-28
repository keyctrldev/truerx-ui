import React, { memo, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { styles } from './ChatInputBoxStyles';
import { ChatInputBoxProps } from '../../types';
import { CustomTextInput } from '../../components';
import { useGlobalStyles } from '../../utils/GlobalStyles';
import { MediaIcon, SendMessage } from '../../assets/svgs';

const ChatInputBox = ({ onMessageSend, onOpenMedia }: ChatInputBoxProps) => {
  const GlobalStyles = useGlobalStyles();
  const [message, setMessage] = useState<string>('');

  const handleSendMessage = () => {
    if (message.trim()) {
      onMessageSend(message.trim());
      setMessage('');
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.keyboardAwareViewStyle}
      keyboardShouldPersistTaps={'handled'}>
      <View style={styles.mainContainer}>
        <View style={[GlobalStyles.rowContainer, styles.chatBoxContainer]}>
          <CustomTextInput
            error=""
            touched
            returnKeyType="send"
            value={message}
            style={styles.inputStyle}
            placeholder="Type a message"
            onChangeText={setMessage}
            contentContainerStyle={styles.textInputStyle}
            containerStyle={styles.textInputContainerStyle}
            placeholderTextColor={styles.placeHolderStyle.color}
            onSubmitEditing={handleSendMessage}
          />
          <View style={GlobalStyles.rowContainer}>
            <TouchableOpacity onPress={onOpenMedia}>
              <MediaIcon
                style={styles.spacerContainer}
                width={styles.mediaIconStyle.width}
                height={styles.mediaIconStyle.height}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSendMessage}>
              <SendMessage
                style={styles.spacerContainer}
                width={styles.sendIconStyle.width}
                height={styles.sendIconStyle.height}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default memo(ChatInputBox);
