import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './app/navigation';
import { ToastProvider } from './app/context';
import messaging from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';
import * as Linking from 'expo-linking';
import {
  buildDeepLinkFromNotificationData,
  fetchAndStorePushTokenIfPossible,
  onNotifeeMessageReceived,
} from './app/utils';
import { ActivityLoader } from './app/components';

const linking = {
  prefixes: ['truerx://'],
  config: {
    initialRouteName: 'Notifications',
    screens: {
      Login: 'Login',
      Notifications: 'Notifications',
      Settings: 'Settings',
    },
  },
  async getInitialURL() {
    // Check if the app was launched by a deep link
    const url = await Linking.getInitialURL();
    if (url) {
      return url;
    }

    // Handle the case where the app was launched from a notification
    const initialNotification = await notifee.getInitialNotification();

    if (initialNotification) {
      const deeplinkURL = buildDeepLinkFromNotificationData(initialNotification);
      return deeplinkURL;
    }

    return null;
  },

  subscribe(listener: any) {
    const onReceiveURL = ({ url }: { url: string }) => listener(url);

    // Listen to incoming links from deep linking
    const linkingSubscription = Linking.addEventListener('url', onReceiveURL);

    // Handle app opened from background or foreground by notification press (Notifee)
    const unsubscribeForegroundEvent = notifee.onForegroundEvent(({ type, detail }) => {
      if (type === EventType.PRESS) {
        const deeplinkURL = buildDeepLinkFromNotificationData(detail);
        if (deeplinkURL) {
          listener(deeplinkURL);
        }
      }
    });

    notifee.onBackgroundEvent(({ type, detail }): any => {
      if (type === EventType.PRESS) {
        const deeplinkURL = buildDeepLinkFromNotificationData(detail);
        if (deeplinkURL) {
          listener(deeplinkURL);
        }
      }
    });

    return () => {
      linkingSubscription.remove();
      unsubscribeForegroundEvent();
    };
  },
};

const App = () => {
  useEffect(() => {
    fetchAndStorePushTokenIfPossible();
    // Handle incoming messages in foreground
    const unsubscribeOnMessage = messaging().onMessage(remoteMessage => {
      onNotifeeMessageReceived(remoteMessage);
    });

    return () => {
      unsubscribeOnMessage();
    };
  }, []);

  return (
    <ToastProvider>
      <NavigationContainer linking={linking} fallback={<ActivityLoader isVisible />}>
        <RootStack />
      </NavigationContainer>
    </ToastProvider>
  );
};

export default App;
