import styled from 'styled-components'

export const Container = styled.div`
    grid-area: CT;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.tertiary};
    padding: 25px;

    height: calc(100vh - 70px);
    overflow-y: auto;  // alterado de scroll para auto

    /* Estilização da scrollbar para navegadores baseados em WebKit */
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 10px;
    }

    /* Estilização da scrollbar para o Firefox */
    scrollbar-width: 10px;  // define a largura da scrollbar como fina
    scrollbar-color: ${props => `${props.theme.colors.secondary} ${props.theme.colors.tertiary}`};  // define a cor da scrollbar e da track

`;
