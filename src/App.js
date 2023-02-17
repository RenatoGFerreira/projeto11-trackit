import GlobalStyle from "./components/GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import LoginCadastro from "./pages/SignUpPage/SignUpPage"
import Habitos from "./pages/HabitsPage/HabitsPage"
import Hoje from "./pages/TodayPage/TodayPage"
import { useState } from "react";
import Historico from "./pages/HistoryPage/HystioryPage";

function App() {

  const [dados, setDados] = useState([])
  
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path={"/"} element={<Login setDados={setDados}/>}/>
      <Route path={"/cadastro"} element={<LoginCadastro/>}/>
      <Route path={"/habitos"} element={<Habitos dados={dados}/>}/>
      <Route path={"/hoje"} element={<Hoje/>}/>
      <Route path={"/historico"} element={<Historico/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
