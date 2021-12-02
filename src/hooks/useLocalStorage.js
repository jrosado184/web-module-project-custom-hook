import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });
  const setStoredValue = (darkMode) => {
    localStorage.setItem(key, JSON.stringify(darkMode));
    setDarkMode(darkMode);
  };
  return [darkMode, setStoredValue];
};

export default useLocalStorage;
