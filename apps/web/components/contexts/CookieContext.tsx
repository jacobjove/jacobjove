import { TmpCookiesObj } from "cookies-next/lib/types";
import { createContext, FC, useContext } from "react";

const CookieContext = createContext<TmpCookiesObj>({});

export default CookieContext;

interface CookieContextProviderProps {
  value: TmpCookiesObj;
}

export const CookieContextProvider: FC<CookieContextProviderProps> = ({ value, children }) => {
  return <CookieContext.Provider value={value}>{children}</CookieContext.Provider>;
};

export const useCookieData = () => {
  return useContext(CookieContext);
};
