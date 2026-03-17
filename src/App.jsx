import { useState, useEffect } from 'react';

import MainPage from './pages/MainPage';

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  });
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <>
      <MainPage dark={dark} setDark={setDark} />
    </>
  )
}

export default App;