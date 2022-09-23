import { TmpCookiesObj } from "cookies-next/lib/types";
import { createContext, useContext } from "react";

const CookieContext = createContext<TmpCookiesObj>({});

export default CookieContext;

export const useCookieData = () => {
  return useContext(CookieContext);
};
