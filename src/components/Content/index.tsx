import React from "react";
import { Container } from './styles';

// FC é functional component (componente funcional)
const Content: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default Content;
