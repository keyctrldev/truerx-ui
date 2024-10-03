import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance, EventType } from '@notifee/react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '../constants';

const useNotification = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const notificationListener = async () => {
    const manageNavigation = (remoteMessage: any) => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: Routes.notifications,
          },
        ],
      });
    };

    // Handle when the app is opened from a notification
    messaging().onNotificationOpenedApp((remoteMessage: any) => {
      if (remoteMessage?.data) {
        manageNavigation(remoteMessage);
      }
    });

    // Handle when the app is launched from a notification
    const initialNotification = await messaging().getInitialNotification();
    if (initialNotification?.data) {
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

      // Handle when the notification is pressed
      notifee.onForegroundEvent(({ type, detail }) => {
        if (type === EventType.PRESS && remoteMessage?.data) {
          manageNavigation(remoteMessage);
        }
      });
    });
  };

  return { notificationListener };
};

export default useNotification;
