import { StatusBar } from "expo-status-bar";
import * as React from "react";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import RootNavigator from "./navigation";
import store from "./store";

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <RootNavigator />
      </Provider>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
