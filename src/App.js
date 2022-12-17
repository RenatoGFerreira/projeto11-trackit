import GlobalStyle from "./components/GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import LoginCadastro from "./pages/loginCadastro/LoginCadastro"
import Habitos from "./pages/habitos/Habitos"
import Hoje from "./pages/hoje/Hoje"
import { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/Nav/Nav";

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
    </Routes>
    </BrowserRouter>
  );
}

export default App;
