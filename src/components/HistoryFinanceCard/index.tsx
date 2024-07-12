import React from "react";
import { Container, Tag } from "./styled";


interface IHistoryFinanceCardProps {
    cardColor: string;
    tagColor: string;
    title: string;
    subtitle: String;
    amount: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({ title, cardColor, tagColor, subtitle, amount }) => {


    return (
        <Container color={cardColor}>
            <Tag color={tagColor}/>
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    );
}

export default HistoryFinanceCard;
