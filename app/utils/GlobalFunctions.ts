import messaging from '@react-native-firebase/messaging';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MIXPANEL_KEY, mixPanelEventsKeys } from '../constants';
import { Mixpanel } from 'mixpanel-react-native';

export const capitalizeFLetter = (text: string): string => {
  if (typeof text !== 'string' || text.length === 0) {
    return text;
  }
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Approved':
      return '#008000';
    case 'Processing':
      return '#FFA500';
    case 'Rejected':
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

export async function requestUserPermission() {
  try {
    if (Platform.OS === 'android' && Platform.Version >= 33) {
      // Request POST_NOTIFICATIONS permission on Android 13+
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getFCMToken();
      } else {
        Alert.alert('Notification permission denied');
      }
    } else {
      // Handle permission request for older Android versions or iOS
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        getFCMToken();
      } else {
      }
    }
  } catch (error) {}
}

const getFCMToken = async () => {
  try {
    await messaging().registerDeviceForRemoteMessages();

    let fcmToken = await AsyncStorage.getItem('fcm_token');
    if (!!fcmToken) {
    } else {
      const token = await messaging().getToken();
      await AsyncStorage.setItem('fcm_token', token);
    }
  } catch (error) {}
};

export const mixPanel = async () => {
  const mixPanelKey = MIXPANEL_KEY;
  const trackAutomaticEvents = false;
  const mixpanel = new Mixpanel(mixPanelKey, trackAutomaticEvents);
  return mixpanel;
};

export const mixpanelTrackEvents = async (eventName: string,parameters?:any) => {
  try {
    let mixpanel = await mixPanel();
    mixpanel?.track(eventName , parameters || {});
    mixpanel?.flush();
  } catch (e) {
    console.log('mixPanelTrackEvents Error', e);
  }
};

export const setMixPanelDetails = async (data: any) => {
  let mixpanel = await mixPanel();
  mixpanel?.init();
  mixpanel?.reset();
  mixpanel?.identify(data.randomId || '');
  mixpanel?.getPeople().set({
    $name: data?.email, 
    $email: data?.email,
  });
  mixpanel?.track(mixPanelEventsKeys.user_login);
  mixpanel?.flush();
  return mixpanel;
};
