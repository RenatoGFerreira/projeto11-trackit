import { ScreenContainer, Topo, ButtonAdd, Body } from "./StyledHabitos"
import Header from "../../components/header/Header"

export default function Habitos() {
    return (
        <ScreenContainer>
            <Header/>
            <Topo>
                <h1>Meus hábitos</h1>
                <ButtonAdd>+</ButtonAdd>
            </Topo>
            <Body>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trakear!</p>
            </Body>
        </ScreenContainer>
    )
}