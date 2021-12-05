import axios, { AxiosResponse } from "axios";
import { Session, User } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { NextRouter } from "next/router";

export const LOGIN_PAGE_PATH = "/auth/signin";
export const AUTH_REDIRECT_PATH = "/auth/redirect";

export interface Credentials {
  username: string;
  password: string;
}

export const handleLogin = (router: NextRouter): void => {
  // If not already on the sign-in page, initiate the sign-in process.
  // (This prevents messing up the callbackUrl by reloading the sign-in page.)
  if (router.pathname != "/auth/signin") {
    signIn();
  }
};

export const handleLogout = (session: Session): void => {
  // Sign out of the back end.
  // TODO:  signOut(session.user.accessToken);
  // Sign out of the front end.
  signOut({ callbackUrl: window.location.pathname });
  // TODO: Save random data to the `logout` key in local storage
  // to trigger the event listener to sign out of any other open windows.
  window.localStorage.setItem("logout", `${Date.now()}`);
};

const getUserFromAuthResponse = (response: AxiosResponse): User | null => {
  const user = response.data["user"];
  if (!user) {
    // eslint-disable-next-line no-console
    return null;
  }
  /*
    Attach necessary values to the user object.
    Subsequently, the JWT callback reads these values from the user object
    and attaches them to the token object that it returns.
  */
  user.accessToken = response.data.accessToken;
  user.refreshToken = response.data.refreshToken;
  return user;
};

export const authenticateWithCredentials = async (
  credentials: Record<string, string>
): Promise<User | null> => {
  const url = "/users/auth/login/";
  let user = null;
  await axios
    .post(url, {
      username: credentials.username,
      password: credentials.password,
    })
    .then(function (response: AxiosResponse) {
      user = getUserFromAuthResponse(response);
    })
    .catch(function (error) {
      // eslint-disable-next-line no-console
      console.error(`${error}`);
    });
  return Promise.resolve(user);
};
