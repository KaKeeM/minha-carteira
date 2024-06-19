import React from "react";
import Img from '../../assets/logo.svg'
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md';
import {Container, Header, Title, LogoImg, MenuContainer, MenuItemLink} from './styles'

//FC é functional componente : => componente funcional
const Aside: React.FC  = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={Img} alt = "Logo Minha Carteira"/>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="">
                    <MdArrowDownward/>
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="">
                    <MdArrowUpward/>
                    Saídas
                </MenuItemLink>

                <MenuItemLink href="">
                    <MdExitToApp/>
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    )
}

export default Aside;

