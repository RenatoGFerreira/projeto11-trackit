import styled from "styled-components";


export const ScreenContainer = styled.div`
width: 100vw;
height: 100vh;
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 40%;
input{
    margin-bottom: 10px;
    height: 45px;
    border: 1px solid #d4d4d4;
    font-size: 21px;
    ::placeholder{
        color: #d4d4d4;
        margin-left: 15px;
    }
    :last-child{
        background-color: blue;
    }
}
a{
    align-self: center;
}


`

export const Form = styled.div`
display: flex;
flex-direction: column;
width: 80%;
`