import React from "react";
import {Container} from './styles';
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

//FC é functional componente : => componente funcional
const list: React.FC  = () => {
    const options = [
        { value: 'Julia', label: 'Julia' },
        { value: 'Maria', label: 'Maria' },
        { value: 'Ana', label: 'Ana' }
    ];

    return (
        <Container>
            <ContentHeader title="Entradas" lineColor="#e44c4e">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>

    )
}

export default list;

