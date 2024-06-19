import React, { useMemo } from "react";
import { Container, Profile, Welcome, UserName } from './styles';
import emojis from '../../util/emojis';
import Toggle from '../Toggle';

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    const emo = emojis[index];
    return emo;
  }, []);

  return (
    <Container>
      <Toggle/>
      <Profile>
        <Welcome>Olá, {emoji} </Welcome>
        <UserName>Julia Amorim</UserName>
      </Profile>
    </Container>
  );
}

export default MainHeader;
