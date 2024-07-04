import React from "react";
import { Container } from './styles';

// FC é functional component (componente funcional)
const SelectInput: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default SelectInput;
