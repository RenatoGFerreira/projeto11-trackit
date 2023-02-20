import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import HabitsPage from "./pages/HabitsPage/HabitsPage"
import TodayPage from "./pages/TodayPage/TodayPage"
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import { useState } from "react";
import { UserContext } from "./context/UserContext";
import { ProgressContext } from "./context/ProgressContext";

function App() {
  const [user, setUser] = useState({})
  const [progress, setProgress] = useState(30)

  return (
    <BrowserRouter>
      <ProgressContext.Provider value={{progress, setProgress}}>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="/historico" element={<HistoryPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </UserContext.Provider>
      </ProgressContext.Provider>
    </BrowserRouter>
  )
}

export default App;
