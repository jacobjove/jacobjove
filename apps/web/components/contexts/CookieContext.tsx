import { TmpCookiesObj } from "cookies-next/lib/types";
import { createContext, FC, memo, useContext } from "react";

const CookieContext = createContext<TmpCookiesObj>({});

export default CookieContext;

interface CookieContextProviderProps {
  value: TmpCookiesObj;
}

const CookieChildren: FC = ({ children }) => <>{children}</>;

const MemoizedChildren = memo<FC>(CookieChildren);

export const CookieContextProvider: FC<CookieContextProviderProps> = ({ value, children }) => {
  // Memoize the children to prevent unnecessary re-renders when cookies are set.
  return (
    <CookieContext.Provider value={value}>
      <MemoizedChildren>{children}</MemoizedChildren>
    </CookieContext.Provider>
  );
};

export const useCookieData = () => {
  return useContext(CookieContext);
};
