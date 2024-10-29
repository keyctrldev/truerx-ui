import React, { memo } from 'react';
import { View } from 'react-native';

import AppText from '../app-text/AppText';
import { styles } from './ChatDetailItemStyles';
import { chatDataItemProps } from '../../types';

const ChatDetailItem = (props: chatDataItemProps) => {
  const { sender, chat } = props;

  return (
    <View style={[styles.chatContainer, sender ? styles.senderStyles : styles.receiverStyles]}>
      <AppText style={[styles.chatContent, sender ? styles.senderTextStyles : styles.receiverTextStyles]}>
        {chat}
      </AppText>
    </View>
  );
};

export default memo(ChatDetailItem);
