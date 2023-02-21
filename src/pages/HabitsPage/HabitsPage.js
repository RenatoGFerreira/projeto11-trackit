import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars"
import StyledTitle from "../../components/StyledTitle"
import StyledSubtitle from "../../components/StyledSubtitle"
import { ButtonAdd, CreateHabitContainer } from "./StyledHabitsPage"

import plusIcon from "../../assets/img/plus.svg"
import { useState, useContext, useEffect } from "react"
import apiHabits from "../../services/apiHabits"
import { UserContext } from "../../context/UserContext"
import HabitCard from "../../components/HabitCard/HabitCard"
import { ThreeDots } from "react-loader-spinner"
import CreateHabitCard from "../../components/CreateHabitsCard/CreateHabitCard"
import apiToday from "../../services/apiToday"
import { ProgressContext } from "../../context/ProgressContext"


export default function Habitos() {
    const [habits, setHabits] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [createHabitOpened, setCreateHabitOpened] = useState(false)
    const { user } = useContext(UserContext)
    const {setProgress} = useContext(ProgressContext)

    useEffect(getHabitsList, [])

    function getHabitsList() {
        apiHabits.getHabits(user.token)
            .then(res => {
                const apiHabits = res.data
                setIsLoading(false)
                setHabits(apiHabits)
                getTodayHabits()
            })
            .catch(err => {
                setIsLoading(false)
                alert(err.response.data.message)
            })
    }

    function getTodayHabits(){
        apiToday.getToday(user.token)
        .then(res => {
            const apiHabits = res.data
            const doneHabits = apiHabits.filter(h => h.done === true)
            const calc = ((doneHabits.length / apiHabits.length) * 100).toFixed(0)
            setProgress(calc)
        })
        .catch(err => alert(err.response.data.message))
    }

    return (
        <ScreenWithBars>
            <CreateHabitContainer>
                <StyledTitle>Meus Hábitos</StyledTitle>
                <ButtonAdd onClick={() => setCreateHabitOpened(!createHabitOpened)}>
                    <img src={plusIcon} alt="Ícone de adicionar hábitos" />
                </ButtonAdd>
            </CreateHabitContainer>
            <CreateHabitCard 
                isOpened={createHabitOpened} 
                setIsOpened={setCreateHabitOpened}
                getHabitsList={getHabitsList}
            />
            {isLoading ? (
                <ThreeDots width={80} height={80} color="#126ba5" />
            ) : (
                habits.length === 0 ? (
                    <StyledSubtitle>
                        Você ainda não possui hábitos para serem salvos
                    </StyledSubtitle>
                ) : (
                    habits.map(h =>
                        <HabitCard
                            key={h.id}
                            id={h.id}
                            name={h.name}
                            days={h.days}
                            getHabitsList={getHabitsList}
                        />)
                )

            )}

        </ScreenWithBars>
    )
}