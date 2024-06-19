import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 2px solid ${props => props.theme.colors.gray};
  height: auto;
`;

export const Profile = styled.div`
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
`;

export const Welcome = styled.h3`
  margin: 0;
  height:auto;
`;

export const UserName = styled.span`
  margin: 0;
  height: auto;
`;
