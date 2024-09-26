import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './app/navigation';
import { ToastProvider } from './app/context';
import messaging from '@react-native-firebase/messaging';
import { fetchAndStorePushTokenIfPossible, onNotifeeMessageReceived } from './app/utils';

const App = (): React.JSX.Element => {
  useEffect(() => {
    fetchAndStorePushTokenIfPossible();
    const unsubscribeOnMessage = messaging().onMessage(onNotifeeMessageReceived);

    const unsubscribeOnNotificationOpenedApp = messaging().onNotificationOpenedApp(onNotifeeMessageReceived);

    messaging().setBackgroundMessageHandler(onNotifeeMessageReceived);

    return () => {
      unsubscribeOnMessage();
      unsubscribeOnNotificationOpenedApp();
    };
  }, []);
  return (
    <ToastProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ToastProvider>
  );
};
export default App;
