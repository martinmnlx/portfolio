import MainPage from "./pages/MainPage";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [dark, setDark] = useDarkMode();

  return <MainPage dark={dark} setDark={setDark} />;
}

export default App;
