import { Form, ButtonsContainer, Footer, CloseButton, SaveButton } from "./StyleCreateHabitCard"
import WeekDayButtons from "../WeekDaysButton/WeekDaysButton"
import { StyledInput } from "../StyledInput"


export default function CreateHabitCard({isOpened, setCreateHabitOPened}) {

    return (
        <Form isOpened={isOpened}>
            <ButtonsContainer>
            <StyledInput
                    name="name"
                    placeholder="nome do hábito"
                    type="text"
                    required
                    disabled={false}
                />

                <WeekDayButtons
                    selectedDays={[]}
                />
            </ButtonsContainer>

            <Footer>
                <CloseButton
                    type="button"
                    disabled={false}
                    onClick={() => setCreateHabitOPened(false)}
                >
                    Cancelar
                </CloseButton>

                <SaveButton
                    type="submit"
                    disabled={false}
                >
                    Salvar
                </SaveButton>
            </Footer>
        </Form>
    )
}

