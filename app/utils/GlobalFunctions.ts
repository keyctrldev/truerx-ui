import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance, AndroidVisibility } from '@notifee/react-native';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export function buildDeepLinkFromNotificationData(data: any) {
  const NAVIGATION_IDS = ['Login', 'Notifications', 'Settings'];
  const navigationId = data?.notification.data?.notificationId;
  if (!NAVIGATION_IDS.includes(navigationId)) {
    return null;
  }
  switch (navigationId) {
    case 'Login':
      return `truerx://Login`;
    case 'Notifications':
      return `truerx://Notifications`;
    case 'Settings':
      return `truerx://Settings`;
    default:
      return null;
  }
}

export const fetchAndStorePushTokenIfPossible = async () => {
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      getFCMToken();
    }
  } else {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getFCMToken();
    }
  }
};

const getFCMToken = async () => {
  try {
    await messaging().registerDeviceForRemoteMessages();
    let fcmToken = await AsyncStorage.getItem('fcm_token');
    if (!fcmToken) {
      const token = await messaging().getToken();
      await AsyncStorage.setItem('fcm_token', token);
    }
  } catch (error) {
    Alert.alert('Error generating token');
  }
};

// Handle Notifee message received and display notification
export const onNotifeeMessageReceived = async (message: any) => {
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
    Alert.alert('Error displaying notification');
  }
};
