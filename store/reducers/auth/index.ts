import { AuthActionTypes, SIGN_IN, SIGN_UP, SIGN_OUT, User } from "../../types";
import { AuthState } from "../types";

const initialState: AuthState = {
  user: null,
};

// FOR TESTING PURPOSES ONLY:
/* import { DUMMY_USER } from "../../../constants/dummy";
const initialState: AuthState = { user: DUMMY_USER }; */

const signIn = (state: AuthState, user: User): AuthState => ({
  ...state,
  user,
});

const reducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case SIGN_IN:
      return signIn(state, action.user);
    case SIGN_UP:
      return signIn(state, action.user);
    case SIGN_OUT:
      return state;
    default:
      return state;
  }
};

export default reducer;
