import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

import notifee, { AndroidImportance, AndroidVisibility } from '@notifee/react-native';
import { Alert } from 'react-native';

export const capitalizeFLetter = (text: string): string => {
  if (typeof text !== 'string' || text.length === 0) {
    return text;
  }
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'approved':
      return '#008000';
    case 'processing':
      return '#FFA500';
    case 'rejected':
      return '#8F3333';
    default:
      return '#000000';
  }
};

export const fetchAndStorePushTokenIfPossible = async (): Promise<void> => {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.info('FCM :', token);
    }
  } catch (error) {
    Alert.alert('Error fetching FCM token');
  }
};

export const onNotifeeMessageReceived = async (message: FirebaseMessagingTypes.RemoteMessage): Promise<void> => {
  try {
    if (message && message.notification) {
      const { title, body } = message.notification;
      const { messageId, data } = message;

      const channelId = await notifee.createChannel({
        id: 'notifications',
        name: 'notifications',
        vibration: true,
        importance: AndroidImportance.HIGH,
        visibility: AndroidVisibility.PUBLIC,
      });

      await notifee.displayNotification({
        id: messageId,
        title: title ?? 'No title',
        body: body ?? 'No body',
        data,
        android: {
          channelId,
          pressAction: {
            id: 'default',
          },
          vibrationPattern: [100, 300, 100, 300],
          autoCancel: true,
          badgeCount: 1,
          importance: AndroidImportance.HIGH,
        },
        ios: {
          badgeCount: 1,
          sound: 'default',
        },
      });
    }
  } catch (error) {
    Alert.alert('Error displaying notification:');
  }
};
