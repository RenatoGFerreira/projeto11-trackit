import { ScreenContainer, Title } from "./StyledHabitCard"
import trash from "../../assets/img/dump.svg"
import WeekDayButtons from "../WeekDaysButton/WeekDaysButton"
import apiHabits from "../../services/apiHabits"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

export default function HabitCard({ name, days, id, getHabitsList }) {
    const {user} = useContext(UserContext)

    function handleDelete(){
        const confirmation = window.confirm("Confirme para deletar esse hábito:")

        if(confirmation){
            apiHabits.deleteHabit(user.token, id)
                .then(res =>{
                    getHabitsList()
                })
                .cathc(err =>{
                    alert(err.response.data.message)
                })
        }
    }
    return (
        <ScreenContainer>
            <Title>{name}</Title>
            <WeekDayButtons selectedDays={days} />
            <img src={trash} onClick={handleDelete} alt="Icone Deletar" />
        </ScreenContainer>
    )
}