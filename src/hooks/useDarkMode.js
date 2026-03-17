import { useState, useEffect } from 'react';

export default function useDarkMode() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return [dark, setDark];
}