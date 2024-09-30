import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './app/navigation';
import { ToastProvider } from './app/context';
import { ApolloProvider } from '@apollo/client';
import { client } from './app/api';

const App = (): React.JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <ToastProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ToastProvider>
    </ApolloProvider>
  );
};
export default App;
