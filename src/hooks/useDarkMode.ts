import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

export default function useDarkMode(): [
  boolean,
  Dispatch<SetStateAction<boolean>>,
] {
  const [dark, setDark] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return [dark, setDark];
}
