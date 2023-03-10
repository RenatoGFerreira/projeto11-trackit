import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars"
import StyledTitle from "../../components/StyledTitle"
import StyledSubtitle from "../../components/StyledSubtitle"
import { HabitsAmountText } from "./StyledTodayPage"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { ThreeDots } from "react-loader-spinner"
import HabitCheckCard from "../../components/HabitCheckCard/HabitCheckCard"
import apiToday from "../../services/apiToday"
import dayjs from "dayjs"
import weekDays from "../../constants/weekDays"
import { ProgressContext } from "../../context/ProgressContext"


export default function Hoje() {
    const { user } = useContext(UserContext)
    const { progress, setProgress } = useContext(ProgressContext)
    const [habits, setHabits] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(getTodayHabits, [])

    function getTodayHabits() {
        apiToday.getToday(user.token)
            .then(res => {
                const apiHabits = res.data
                setHabits(apiHabits)
                setIsLoading(false)

                const doneHabits = apiHabits.filter(h => h.done === true)
                const calc = ((doneHabits.length / apiHabits.length) * 100).toFixed(0)
                setProgress(calc)

            })
            .catch(err => {
                setIsLoading(false)
                if (!user.token) {
                    alert("Faça login para continuar")
                } else {
                    alert(err.response.data.message)
                }

            })
    }

    return (
        <ScreenWithBars>
            <>
                <StyledTitle>{weekDays[dayjs().day()].name}, {dayjs().date()}/{dayjs().month() + 1}/{dayjs().year()} </StyledTitle>
                <HabitsAmountText doneAmount={progress}>
                    {progress === 0 ? (
                        "Nenhum hábito concluido ainda"
                    ) : (
                        `${progress}% dos hábitos concluidos.`
                    )}
                </HabitsAmountText>
            </>
            {isLoading ? (
                <ThreeDots width={80} height={80} color="#126ba5" />
            ) : (
                habits.length === 0 ? (
                    <StyledSubtitle>Nenhum hábito concluído</StyledSubtitle>
                ) : (
                    habits.map(h =>
                        <HabitCheckCard
                            id={h.id}
                            name={h.name}
                            done={h.done}
                            currentSequence={h.currentSequence}
                            highestSequence={h.highestSequence}
                            getTodayHabits={getTodayHabits}
                        />)
                )
            )}
        </ScreenWithBars>
    )
}