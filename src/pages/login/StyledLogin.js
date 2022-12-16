import styled from "styled-components";


export const ScreenContainer = styled.div`
width: 100vw;
height: 100vh;
margin: 0;
display: flex;
flex-direction: column;
align-items: center;


img{
    margin-top: 50%;
}
form{
    border: 1px solid blue;
    width: 80%;
}
`

export const Form = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid black;
`

export const TitleInput = styled.label`
margin: 5px;
`

export const InputContainer = styled.div`
border: 1px solid blue;
`

export const SaveButton = styled.button`
border: 1px solid red;
`