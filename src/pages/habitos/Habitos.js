import { ScreenContainer, Topo, ButtonAdd, Body } from "./StyledHabitos"
import Header from "../../components/header/Header"
import Nav from "../../components/Nav/Nav"
import { useState } from "react"
import AddHabitForm from "./AddHabitForm"

export default function Habitos() {

    const [habitsList, setHabitsList] = useState(null)
    const [openForm, setOpenForm] = useState(false)
    const [form, setForm] = useState({name:"", days:[]})

    return (
        <>
            <Header />
            {habitsList === null ?
                <ScreenContainer>
                    <Topo>
                        <h1>Meus hábitos</h1>
                        <ButtonAdd onClick={() => setOpenForm(true)}>+</ButtonAdd>
                    </Topo>
                    <Body>
                        {openForm ? <AddHabitForm form={form} setForm={setForm} setOpenForm={setOpenForm} /> : <></>}
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trakear!</p>
                    </Body>
                </ScreenContainer>
                :
                <img alt="teste"/>
                ///Parte de habitos já criados
            }

            <Nav />
        </>
    )
}