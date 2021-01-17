import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  UserScreen,
  CoursesScreen,
  ChatScreen,
  StatsScreen,
} from "../../screens";

import { UserStackNavigatorParamList } from "./types";

const UserStack = createStackNavigator<UserStackNavigatorParamList>();

const UserStackNavigator = () => {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name="User" component={UserScreen} />
      <UserStack.Screen name="Courses" component={CoursesScreen} />
      <UserStack.Screen name="Chat" component={ChatScreen} />
      <UserStack.Screen name="Stats" component={StatsScreen} />
    </UserStack.Navigator>
  );
};

export default UserStackNavigator;
