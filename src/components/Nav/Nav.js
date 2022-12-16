import { ScreenContainer, HabitsContainer, TodayContainer, HistoricContainer } from "./StyledNav"

export default function Nav() {
    return (
        <ScreenContainer>
            <HabitsContainer>
                Habitos
            </HabitsContainer>
            <TodayContainer>
                Hoje
            </TodayContainer>
            <HistoricContainer>
                Histórico
            </HistoricContainer>
        </ScreenContainer>
    )
}