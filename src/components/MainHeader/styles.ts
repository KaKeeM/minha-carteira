import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 10px;
    border-bottom: 2px solid ${props => props.theme.colors.gray};
    height: auto;
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
    height: auto;
    margin-top: 2vh;
`;

export const Welcome = styled.h3`
    height: auto;
  
`;

export const UserName = styled.span`
  height: auto;
`;