import { ScreenContainer } from "./StyledHabitsPage"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import { useState } from "react"

export default function Habitos() {

    const [habitsList] = useState(null)
    const [openForm, setOpenForm] = useState(false)
    const [form, setForm] = useState({name:"", days:[]})

    return (
        <>
            <Header />
                <ScreenContainer>
                <h1>TEla Habitos</h1>
                </ScreenContainer>
            <Menu />
        </>
    )
}