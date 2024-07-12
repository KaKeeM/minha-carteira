import React from "react";
import {Container,Content} from './styles';
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

//FC é functional componente : => componente funcional
const list: React.FC  = () => {
    const options = [
        { value: 'Julia', label: 'Julia' },
        { value: 'Maria', label: 'Maria' },
        { value: 'Ana', label: 'Ana' }
    ];

    return (
        <Container>
            <ContentHeader title="Entradas" lineColor="#e44c4e">
                <SelectInput options={options} />
            </ContentHeader>
            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 133,00"

                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 133,00"

                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 133,00"

                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 133,00"

                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 133,00"

                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 133,00"

                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 133,00"

                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 133,00"

                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 133,00"

                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 133,00"

                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 133,00"

                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 133,00"

                />
            </Content>

        </Container>

    )
}

export default list;

