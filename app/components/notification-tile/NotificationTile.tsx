import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './NotificationTileStyle';
import { Icons } from '../../assets';
import AppText from '../app-text/AppText';

interface NotificationTileProps {
  title: string;
  message: string;
  time?: string;
  highlighted?: boolean;
}

const NotificationTile: React.FC<NotificationTileProps> = ({ title, message, time, highlighted = false }) => {
  return (
    <View style={[styles.container, highlighted && styles.highlighted]}>
      <View style={styles.iconContainer}>
        <Image source={Icons.tickCircle} style={styles.userImageStyle} />
      </View>
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.message}>{message}</AppText>
        {time && <AppText style={styles.time}>{time}</AppText>}
      </View>
    </View>
  );
};

export default NotificationTile;
