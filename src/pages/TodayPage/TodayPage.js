import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars"
import StyledTitle from "../../components/StyledTitle"
import StyledSubtitle from "../../components/StyledSubtitle"
import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import HabitCheckCard from "../../components/HabitCheckCard/HabitCheckCard"
import apiToday from "../../services/apiToday"


export default function Hoje() {
    const { user } = useContext(UserContext)
    const [habits, setHabits] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(getTodayHabits, [])

    function getTodayHabits() {
        apiToday.getToday(user.token)
            .then(res => {
                setHabits(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err.response.data.message)
                setIsLoading(false)
            })
    }

    return (
        <ScreenWithBars>
            <StyledTitle>Terça-Feira, 17/05/2022 </StyledTitle>
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
                        />)
                )
            )}
        </ScreenWithBars>
    )
}