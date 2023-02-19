import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import { ScreenContainer } from "./StyleHistoryPage"
export default function Historico(){
    return(
        <>
        <Header/>
        <ScreenContainer>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </ScreenContainer>
        <Menu/>
        </>
    )
}