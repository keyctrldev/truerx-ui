import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./app/navigation";

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
export default App;
