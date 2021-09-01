import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
  const [values, setValues] = useLocalStorage("darkMode", initialValue);
  return [values, setValues];
};

export default useDarkMode;
