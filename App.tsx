import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './app/navigation';
import { ToastProvider } from './app/context';
import { Client } from './app/queries';
import { ApolloProvider } from '@apollo/client';
const App = (): React.JSX.Element => {
  return (
    <ApolloProvider client={Client}>
      <ToastProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ToastProvider>
    </ApolloProvider>
  );
};
export default App;
