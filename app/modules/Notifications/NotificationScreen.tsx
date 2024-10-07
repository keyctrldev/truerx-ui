import React, { useEffect, useState } from 'react';
import { AppText, NotificationTile, SafeAreaContainer } from '../../components';
import { styles } from './NotificationScreenStyle';
import { BackHandler, FlatList, Image, TouchableOpacity, View } from 'react-native';
import { Icons } from '../../assets';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { headerComponentStrings, notificationScreenStrings, Routes } from '../../constants';
import { AsyncStorageService } from '../../utils';
import { NotificationItem } from '../../types';

const NotificationScreen = () => {
  const { replace } = useNavigation<StackNavigationProp<ParamListBase>>();
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const storedNotifications: any[] = await AsyncStorageService.getNotifications();
      setNotifications(storedNotifications);
    };

    fetchNotifications();
  }, []);

  const onBackPress = () => {
    replace(Routes.home);
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => backHandler.remove();
  }, [onBackPress]);

  return (
    <SafeAreaContainer style={styles.rootContainerStyle}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onBackPress}>
          <Image source={Icons.backIcon} style={styles.backIconStyle} />
        </TouchableOpacity>
        <AppText style={styles.headerText}>{headerComponentStrings.Notification}</AppText>
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={notifications?.reverse()}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <NotificationTile
                key={`notification${index}`}
                title={item?.title}
                message={item?.message}
                highlighted={true}
              />
            );
          }}
          ListEmptyComponent={
            <View style={styles.listEmptyContainer}>
              <AppText style={styles.listEmptyText}>{notificationScreenStrings.NoNotificationFound}</AppText>
            </View>
          }
        />
      </View>
    </SafeAreaContainer>
  );
};

export default NotificationScreen;
