import React from "react";
import ContentHeader from "../../components/ContentHeader";
import { Container } from './styles';
import SelectInput from "../../components/SelectInput";

//FC é functional componente : => componente funcional
const Dashboard: React.FC = () => {
    const options = [
        { value: 'Julia', label: 'Julia' },
        { value: 'Maria', label: 'Maria' },
        { value: 'Ana', label: 'Ana' }
    ];

    return (
        <Container>
            <ContentHeader title="Dashboard" linecolor="#FFF">
                <SelectInput options={options} onChange={() => {}} />
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;
