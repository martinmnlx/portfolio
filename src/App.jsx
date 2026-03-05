import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <MainPage />
    </>
  )
}

export default App;