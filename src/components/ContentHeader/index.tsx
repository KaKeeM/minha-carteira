import React from "react";
import {Container, Title, Controllers} from './styles';

//FC é functional componente : => componente funcional
const ContentHeader: React.FC  = () => {
    return (
        <Container>
            <Title>
                <h1> Título </h1>
            </Title>
            <Controllers>
                <button type="button">Botão A</button>
                <button type="button">Botão b</button>
            </Controllers>
        </Container>
    )
}

export default ContentHeader;

