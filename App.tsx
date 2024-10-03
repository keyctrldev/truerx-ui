import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './app/navigation';
import { ToastProvider } from './app/context';
import messaging from '@react-native-firebase/messaging';
import { requestUserPermission } from './app/utils';

const App = () => {
  const checkNotificationPermission = async () => {
    const authorizationStatus = await messaging().requestPermission({
      providesAppNotificationSettings: true,
    });
    if (authorizationStatus) {
      console.log('Permission status:', authorizationStatus);
    }
  };

  useEffect(() => {
    // Combine token handling logic into one effect
    checkNotificationPermission();
    requestUserPermission();
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
