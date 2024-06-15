import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        height: 100vh;
        font-family: 'Roboto', sans-serif;
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;
    }

    button {
        cursor: pointer;
    }
`;