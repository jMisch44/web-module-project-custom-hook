import useLocalStorage from "./useLocalStorage";
// import { useMedia } from "react";

const useDarkMode = (initialValue) => {
//   function usePrefersDarkMode() {
//     return useMedia(["(prefers-color-scheme: dark)"], [true], false);
//   }

  const [values, setValues] = useLocalStorage("darkMode", initialValue);
//   const usePreferDarkMode = usePrefersDarkMode();

//   const enabled = typeof values !== undefined ? values : usePreferDarkMode;

  return [values, setValues];
};

export default useDarkMode;
