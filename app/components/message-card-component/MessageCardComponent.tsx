import React, { memo } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { AppText } from '../../components';
import { SendMessage } from '../../assets/svgs';
import { styles } from './MessageCardComponentStyles';
import { useGlobalStyles } from '../../utils/GlobalStyles';
import { MessageCardComponentProps } from '../../types';

const MessageCardComponent = (props: MessageCardComponentProps & TouchableOpacityProps) => {
  const { containerStyle, titleText, status, statusText, ...rest } = props;
  const GlobalStyles = useGlobalStyles();
  const isActiveStatus = status == 'Active';

  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.8}
      style={[GlobalStyles.rowSpaceBetweenContainer, styles.mainContainerStyle, containerStyle]}>
      <View style={styles.contentContainerStyle}>
        <AppText style={styles.titleTextStyle}>{titleText}</AppText>
        <View style={[GlobalStyles.rowContainer, styles.statusContainer]}>
          <View style={[styles.dotContainerStyle, isActiveStatus ? styles.activeDotStyle : styles.inActiveDotStyle]} />
          <AppText style={styles.statusTextStyle}>{statusText}</AppText>
        </View>
      </View>
      <SendMessage disabled />
    </TouchableOpacity>
  );
};

export default memo(MessageCardComponent);
