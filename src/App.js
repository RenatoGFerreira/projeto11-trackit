import GlobalStyle from "./components/GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import LoginCadastro from "./pages/loginCadastro/LoginCadastro"
import Habitos from "./pages/habitos/Habitos"

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path={"/"} element={<Login/>}/>
      <Route path={"/cadastro"} element={<LoginCadastro/>}/>
      <Route path={"/habitos"} element={<Habitos/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
