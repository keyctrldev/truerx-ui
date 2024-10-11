import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './app/navigation';
import { ToastProvider } from './app/context';
import messaging from '@react-native-firebase/messaging';
import { requestUserPermission } from './app/utils';
import { ApolloProvider } from '@apollo/client';
import { client } from './app/api';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';

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
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <ApolloProvider client={client}>
        <ToastProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </ToastProvider>
      </ApolloProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
