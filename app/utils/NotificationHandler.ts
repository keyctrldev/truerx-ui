import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance, EventType } from '@notifee/react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '../constants';
import AsyncStorageService from './AsyncStorageService';

const useNotification = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const hasNotification = async (messageId: string): Promise<boolean> => {
    const notifications = await AsyncStorageService.getNotifications();
    return notifications.some((notification: any) => notification.messageId === messageId);
  };

  const saveUniqueNotification = async (remoteMessage: any) => {
    const { notification, messageId } = remoteMessage;
    const isDuplicate = await hasNotification(messageId);

    if (!isDuplicate) {
      await AsyncStorageService.saveNotification({
        messageId,
        title: notification?.title,
        message: notification?.body,
        time: new Date().toLocaleTimeString(),
      });
    }
  };

  const notificationListener = async () => {
    const manageNavigation = (remoteMessage: any) => {
      const {
        data: { notificationId },
      } = remoteMessage;
      let screen;

      switch (notificationId) {
        case 'Notifications':
          screen = 'Notifications';
          break;
        default:
          screen = Routes.home;
          break;
      }

      navigation.reset({
        index: 0,
        routes: [
          {
            name: screen,
          },
        ],
      });
    };

    // Handle when the app is opened from a notification
    messaging().onNotificationOpenedApp(async (remoteMessage: any) => {
      if (remoteMessage?.data) {
        await saveUniqueNotification(remoteMessage);
        manageNavigation(remoteMessage);
      }
    });

    // Handle when the app is launched from a notification
    const initialNotification = await messaging().getInitialNotification();
    if (initialNotification?.data) {
      await saveUniqueNotification(initialNotification);
      manageNavigation(initialNotification);
    }

    // Handle foreground notifications
    messaging().onMessage(async (remoteMessage: any) => {
      const channelId = await notifee.createChannel({
        id: 'com.app.truerx',
        name: 'com.app.truerx',
        importance: AndroidImportance.HIGH,
      });

      await notifee.displayNotification({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        data: remoteMessage?.data,
        android: {
          channelId,
          pressAction: {
            id: 'default',
          },
        },
      });

      await saveUniqueNotification(remoteMessage);

      // Handle when the notification is pressed
      notifee.onForegroundEvent(({ type, detail }) => {
        if (type === EventType.PRESS && remoteMessage?.data) {
          manageNavigation(remoteMessage);
        }
      });

      // Handle background notifications
      messaging().setBackgroundMessageHandler(async remoteMessage => {
        await saveUniqueNotification(remoteMessage);
      });
    });
  };

  return { notificationListener };
};

export default useNotification;
