import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Game from "./src/components/Game";
import MainNavigator from "./navigators/MainNavigators";

const App = (): JSX.Element => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <MainNavigator />
  </GestureHandlerRootView>
);

export default App;
