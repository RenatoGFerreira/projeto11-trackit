import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import HabitsPage from "./pages/HabitsPage/HabitsPage"
import TodayPage from "./pages/TodayPage/TodayPage"
import HistoryPage from "./pages/HistoryPage/HystioryPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import { useState } from "react";

function App() {

  const [dados, setDados] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LoginPage setDados={setDados} />} />
        <Route path={"/cadastro"} element={<SignUpPage />} />
        <Route path={"/habitos"} element={<HabitsPage dados={dados} />} />
        <Route path={"/hoje"} element={<TodayPage />} />
        <Route path={"/historico"} element={<HistoryPage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
