import { View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import AppText from '../app-text/AppText';
import { Icons } from '../../assets';
import { mixPanelEventsKeys, Routes } from '../../constants';
import { styles } from './CustomHeaderStyle';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AsyncStorageService, mixpanelTrackEvents } from '../../utils';

const CustomHeader = ({ heading }: { heading: string }) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const handleNotificationPress = () => {
    navigation.navigate(Routes.notifications);
    mixpanelTrackEvents(mixPanelEventsKeys.check_notification)
  };

  const handleLogOutPress = async (): Promise<void> => {
    try {
      await AsyncStorageService.clearAll().then(() => {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: Routes.login,
            },
          ],
        });
      });
      await mixpanelTrackEvents(mixPanelEventsKeys.user_logout)
    } catch (e) {
      throw new Error('Failed to load biometrics from async storage.');
    }
  };

  return (
    <View style={styles.headerContainer}>
      <AppText style={styles.title}>{heading}</AppText>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconWrapper} activeOpacity={0.8} onPress={handleNotificationPress}>
          <Image source={Icons.bellIcon} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper} activeOpacity={0.8} onPress={handleLogOutPress}>
          <Image source={Icons.profileIcon} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;
