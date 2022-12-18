import { ScreenContainer, HabitsContainer, TodayContainer, HistoricContainer } from "./StyledNav"
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <ScreenContainer>
            <HabitsContainer>
                <Link to="/habitos">
                Habitos
                </Link>
            </HabitsContainer>
            <TodayContainer>
                Hoje
            </TodayContainer>
            <HistoricContainer>
                <Link to="/historico">
                    Histórico
                </Link>
            </HistoricContainer>
        </ScreenContainer>
    )
}