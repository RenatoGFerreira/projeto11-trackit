import styled from "styled-components";


export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin-top: 65px;
    }

    @media screen and (min-width: 800px) {
        img {
        margin-top: 100px;
        }
    }
`