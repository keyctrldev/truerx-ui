import React, { memo } from 'react';
import { View, Image, ImageSourcePropType, ImageStyle, ViewStyle } from 'react-native';

import AppText from '../app-text/AppText';
import { styles } from './NotificationTileStyle';

interface NotificationTileProps {
  title: string;
  time?: string;
  message?: string;
  highlighted?: boolean;
  iconStyle?: ImageStyle;
  icon?: ImageSourcePropType;
  additionalStyle?: ViewStyle;
}

const NotificationTile: React.FC<NotificationTileProps> = ({
  icon,
  time,
  title,
  message,
  iconStyle,
  additionalStyle,
  highlighted = false,
}) => {
  return (
    <>
      <View style={[styles.container, highlighted && styles.highlighted, additionalStyle]}>
        <View style={styles.iconContainer}>
          <Image source={icon} style={[styles.iconStyle, iconStyle]} />
        </View>
        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.message}>{message}</AppText>
          {time && <AppText style={styles.time}>{time}</AppText>}
        </View>
      </View>
      <View style={styles.separator} />
    </>
  );
};

export default memo(NotificationTile);
