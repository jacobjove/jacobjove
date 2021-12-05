import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { NextRouter } from "next/router";

export const LOGIN_PAGE_PATH = "/auth/signin";
export const AUTH_REDIRECT_PATH = "/auth/redirect";

export const handleLogin = (router: NextRouter): void => {
  // If not already on the sign-in page, initiate the sign-in process.
  // (This prevents messing up the callbackUrl by reloading the sign-in page.)
  if (router.pathname != LOGIN_PAGE_PATH) {
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
