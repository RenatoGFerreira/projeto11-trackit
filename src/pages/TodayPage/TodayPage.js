import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import { ScreenContainer, Topo, Body, CardHoje } from "./StyledTodayPage"
export default function Hoje(){
    return(
        <>
            <Header />
            <ScreenContainer>

                <Topo>
                    <h1>Segunda-Feira, 17/05/2022 </h1>
                    <p>Nenhum hábito concluído</p>
                </Topo>
                <Body>
                    <CardHoje>
                        Aqui vai um card 
                    </CardHoje>
                </Body>
                
            </ScreenContainer>
            <Menu/>
        </>
    )
}