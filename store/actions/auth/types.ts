import { User } from "../../types";

export const SIGN_IN: "SIGN_IN" = "SIGN_IN";
export const SIGN_UP: "SIGN_UP" = "SIGN_UP";
export const SIGN_OUT: "SIGN_OUT" = "SIGN_OUT";

export type SignInAction = {
  type: typeof SIGN_IN;
  user: User;
};

export type SignUpAction = {
  type: typeof SIGN_UP;
  user: User;
};

export type SignOutAction = {
  type: typeof SIGN_OUT;
  payload: string;
};

export type AuthActionTypes = SignInAction | SignUpAction | SignOutAction;
