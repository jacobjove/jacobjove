import { createContext, FC, useContext, useEffect, useState } from "react";

const DateContext = createContext(new Date());

export const DateContextProvider: FC = ({ children }) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    // Update the current time every minute.
    const intervalId = setInterval(function () {
      setDate(new Date());
    }, 1000 * 60);
    return function cleanup() {
      clearInterval(intervalId);
    };
  }, [setDate]);

  return <DateContext.Provider value={date}>{children}</DateContext.Provider>;
};

export default DateContext;

export const useDate = () => {
  return useContext(DateContext);
};
