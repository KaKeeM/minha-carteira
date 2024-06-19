import styled from 'styled-components';
import Switch, {ReactSwitchProps} from 'react-switch';


export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: auto;
`;

export const ToggleLabel = styled.span`
  color: ${props => props.theme.colors.white};
  height: auto;
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({theme}) => ({
        onColor: theme.colors.info,
        offColor: theme.colors.warning,
        uncheckedIcon: false,
        checkedIcon: false,
    })
)<ReactSwitchProps>`
`;