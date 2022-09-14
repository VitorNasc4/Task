import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
    * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

    body {
        background: white;
        color: black;
    }
    
    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    button:hover {
        filter: brightness(1.2);
    }
`