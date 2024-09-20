import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./app/navigation";
import { ToastProvider } from "./app/context";

const App = (): React.JSX.Element => {
  return (
    <ToastProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ToastProvider>
  );
};
export default App;
