import { ScreenContainer, Topo, ButtonAdd, Body } from "./StyledHabitsPage"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import { useState } from "react"
import AddHabitForm from "./AddHabitForm"

export default function Habitos() {

    const [habitsList] = useState(null)
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
                <></>
                ///Parte de habitos já criados
                ///Criar essa parte no final do dia
            }

            <Menu />
        </>
    )
}