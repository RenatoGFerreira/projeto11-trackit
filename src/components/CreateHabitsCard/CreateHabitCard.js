import { Form, ButtonsContainer, Footer, CloseButton, SaveButton } from "./StyleCreateHabitCard"
import WeekDayButtons from "../WeekDaysButton/WeekDaysButton"
import { StyledInput } from "../StyledInput"
import { useState, useContext } from "react"
import apiHabits from "../../services/apiHabits"
import { UserContext } from "../../context/UserContext"
import { ThreeDots } from "react-loader-spinner"

export default function CreateHabitCard({ isOpened, setIsOpened, getHabitsList, setCreateHabitOPened }) {
    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({ name: "" })
    const [days, setDays] = useState([])
    const { user } = useContext(UserContext)

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleCreate(e) {
        e.preventDefault()
        setIsLoading(true)
        
        const body = { ...form, days }
        apiHabits.createHabit(user.token, body)
            .then(res => {
                setForm({name: ""})
                setDays([])
                setIsOpened(false)
                setCreateHabitOPened(false)
                setIsLoading(false)
                getHabitsList()
                
            })
            .catch(err => {
                setIsLoading(false)
                alert(err.response.data.message)
            })

    }

    return (
        <Form isOpened={isOpened} onSubmit={handleCreate}>
            <ButtonsContainer>
                <StyledInput
                    name="name"
                    placeholder="nome do hábito"
                    type="text"
                    required
                    disabled={isLoading}
                    value={form.name}
                    onChange={handleForm}
                />

                <WeekDayButtons
                    selectedDays={days}
                    setSelectedDays={setDays} 
                    isLoading={isLoading}
                />
            </ButtonsContainer>

            <Footer>
                <CloseButton
                    type="button"
                    disabled={isLoading}
                    onClick={() => setCreateHabitOPened(false)}
                >
                    Cancelar
                </CloseButton>

                <SaveButton
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading? (
                        <ThreeDots width={50} height={50} color="#fff"/>
                    ):(
                        "Salvar"
                    )}
                </SaveButton>
            </Footer>
        </Form>
    )
}

