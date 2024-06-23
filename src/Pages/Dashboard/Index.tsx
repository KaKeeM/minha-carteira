import React from "react";
import ContentHeader from "../../components/ContentHeader";
import {Container} from './styles'

//FC é functional componente : => componente funcional
const Dashboard: React.FC  = () => {
    return (
        <Container>
            <ContentHeader/>
        </Container>
    )
}

export default Dashboard;

