import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars"

import { useState, useContext, useEffect } from "react"
import apiHabits from "../../services/apiHabits"
import { UserContext } from "../../context/UserContext"
import HabitCard from "../../components/HabitCard/HabitCard"



export default function Habitos() {
    const [habits, setHabits] = useState([])
    const { user } = useContext(UserContext)

    useEffect(getHabitsList, [])

    function getHabitsList() {
        apiHabits.getHabits(user.token)
            .then(res => {
                const apiHabits = res.data
                setHabits(apiHabits)
            })
            .catch(err => {
                console.log(err.response.data.message)
            })
    }

    return (
        <ScreenWithBars>
            <h1>texto</h1>
            
            {habits.map(h => 
            <HabitCard 
                key={h.id}
                name={h.name}
                days={h.days}
            />)}


        </ScreenWithBars>
    )
}