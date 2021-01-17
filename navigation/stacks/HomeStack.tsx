import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SignInScreen, SignUpScreen } from "../../screens";

import { HomeStackNavigatorParamList } from "./types";

const HomeStack = createStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="SignIn" component={SignInScreen} />
      <HomeStack.Screen name="SignUp" component={SignUpScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
