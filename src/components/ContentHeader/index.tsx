import React from "react";
import {Container, TitleContainer, Controllers} from './styles';
import SelectInput from "../SelectInput";

//cria obeto de interação 
interface IconctentHeaderProps{
        title: string;
        lineColor: string;
        controllers: React.ReactNode;
    }


//FC é functional componente : => componente funcional
const ContentHeader: React.FC<IconctentHeaderProps> = () => {

    //continuar aqui.... 

    const options = [
        {value: 'Julia', label: 'Julia'},
        {value: 'Maria', label: 'Maria'},
        {value: 'ANa', label: 'ana'}
    ]

    return (
        <Container>
            <TitleContainer>
                <h1> Título </h1>
            </TitleContainer>
            <Controllers>
                <SelectInput options={options}/>
                <SelectInput options={options}/>
                <SelectInput options={options}/>
            </Controllers>
        </Container>
    )
}

export default ContentHeader;

