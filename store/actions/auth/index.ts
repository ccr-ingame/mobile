import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  SignInAction,
  SignUpAction,
  SignOutAction,
} from "./types";
import { User } from "../../types";

import { DUMMY_USER } from "../../../constants/dummy";

export const signIn = (username: string, password: string): SignInAction => {
  const user: User = {
    ...DUMMY_USER,
    username,
  };

  return {
    type: SIGN_IN,
    user,
  };
};

export const signUp = (userData: {
  fullName: string;
  email: string;
  username: string;
  password: string;
}): SignUpAction => {
  const { username } = userData;
  const name = userData.fullName;
  const displayName = userData.fullName.split(" ")[0];

  const user: User = {
    username,
    name,
    displayName,
    profilePic: null,
    level: 1,
    points: 0,
    rankPosition: 0,
    pet: null,
    ongoingCourses: [],
    missions: [],
  };

  return {
    type: SIGN_UP,
    user,
  };
};
