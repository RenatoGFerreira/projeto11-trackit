import Header from "../../components/header/Header"
import Nav from "../../components/Nav/Nav"
import { ScreenContainer } from "./StyledHistorico"
export default function Historico(){
    return(
        <>
        <Header/>
        <ScreenContainer>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </ScreenContainer>
        <Nav/>
        </>
    )
}