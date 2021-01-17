import { StackNavigationProp } from "@react-navigation/stack";

export type HomeStackNavigatorParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type UserStackNavigatorParamList = {
  User: undefined;
  Courses: undefined;
  Chat: undefined;
  Stats: undefined;
};

export type CoursesScreenNavigationProp = StackNavigationProp<
  UserStackNavigatorParamList,
  "Courses"
>;
