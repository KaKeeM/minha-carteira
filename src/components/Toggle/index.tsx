import React, { useState } from "react";
import { ToggleLabel, Container,ToggleSelector } from './style';

const Toggle: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = (checked: boolean) => {
        setIsChecked(checked);
    };

    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector
                checked={isChecked}
                onChange={handleToggle}
            />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    );
};

export default Toggle;
