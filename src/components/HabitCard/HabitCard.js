import { ScreenContainer, Title } from "./StyledHabitCard"
import trash from "../../assets/img/dump.svg"
import WeekDayButtons from "../WeekDaysButton/WeekDaysButton"

export default function HabitCard({ name, days }) {
    return (
        <ScreenContainer>
            <Title>{name}</Title>
            <WeekDayButtons selectedDays={days} />
            <img src={trash} alt="Icone Deletar" />
        </ScreenContainer>
    )
}