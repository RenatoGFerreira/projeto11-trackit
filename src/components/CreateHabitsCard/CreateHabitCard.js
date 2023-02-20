import {Form, ButtonsContainer, Footer, CloseButton, SaveButton} from "./StyleCreateHabitCard"
export default function CreateHabitCard() {

    return (
        <Form isOpened={true}>
            <ButtonsContainer>
                <StyledInput
                    placeholder="nome do hábito"
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