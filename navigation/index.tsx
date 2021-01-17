import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import HomeStackNavigator from "./stacks/HomeStack";
import UserStackNavigator from "./stacks/UserStack";

import { RootState } from "../store/types";

const RootNavigator: React.FC = () => {
  const isAuth: boolean = !!useSelector<RootState>((state) => state.auth.user);

  return (
    <NavigationContainer>
      {isAuth ? <UserStackNavigator /> : <HomeStackNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
