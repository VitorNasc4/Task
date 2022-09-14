import styled from "styled-components"

export const Container = styled.div`
    width: 800px;

    margin: 50px auto;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    >table {
        width: 100%;
        border-collapse: collapse;
        

        th {
            background-color: ${({theme}) => theme.COLORS.GRAY_100};
            text-align: center;
            padding: 8px;
        }
        td {
            padding: 8px;
            text-align: center;
        }
        th:nth-child(1) {
            width: 40%;
        }
        th:nth-child(4) {
            border: none;
        }
    }
    >table * {
        font-size: 16px;
        color: black;
        border: 1px solid;
    }

    
`

export const Form = styled.form`
    width: 100%;

    display: grid;
    grid-template-areas: 
    "title title"
    "name name"
    "qtd valor"
    "button button";
    gap: 10px;
    justify-content: center;
    justify-items: center;
    
    align-items: center;

    >h1 {
        grid-area: title;
    }
    
    >input {
        height: 45px;
        width: 100%;

        font-size: 16px;

        padding: 8px;

        color: ${({theme}) => theme.COLORS.WHITE};
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

        border: 0;
        border-radius: 8px;
    }

    >input:nth-child(2) {
        grid-area: name;
    }
    >input:nth-child(3) {
        grid-area: qtd;
    }
    >input:nth-child(4) {
        grid-area: valor;
    }

    >button {
        grid-area: button;

        width: 150px;

        background-color: ${({theme}) => theme.COLORS.ORANGE};
        color: ${({theme}) => theme.COLORS.BACKGROUND_800};

        font-size: 20px;

        height: 40px;
        padding: 0 16px;

        border: 0;
        border-radius: 10px;
    }
`
