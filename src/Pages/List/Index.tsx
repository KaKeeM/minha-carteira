import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Content, Filters } from './styles';
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import formatCurrency from "../../util/fromatCurrency";
import formatDate from "../../util/formatDate";

interface IData {
    id: string,
    description: string,
    amountFormatted: string,
    frequency: string,
    dataFormatted: string,
    tagColor: string,
}

//FC é functional componente : => componente funcional
const List: React.FC = () => {

    const[data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear() + 1));
    const { type } = useParams<Record<string, string>>();

    const title = useMemo(() => {
        return type === 'entry-balance' ? {
            title: 'Entradas',
            lineColor: '#f7931b'
        } : {
            title: 'Saídas',
            lineColor: '#e44c4e'
        }
    }, [type]);

    //carrega o arquvio correto
    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, [type]);

    //toda vez que a tela é carregada
    useEffect(() => {
        const filteredDate = listData.filter(item => {
            const date = new Date(item.date);
            const day = String(date.getDate());
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected;
        });

        const formattedData = filteredDate.map(item => {
            return {
                id: String(new Date().getTime()) + item.amount,
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dataFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
            }
        });

        setData(formattedData);
    },[listData, monthSelected, yearSelected,data.length]);

    const months = [
        { value: 5, label: 'Maio'},
        { value: 7, label: 'Julho' },
        { value: 8, label: 'Agosto'},
        { value: 9, label: 'Setembro' },
        { value: 10, label: 'Outubro'},
    ];

    const years = [
        { value: 2024, label: 2024 },
        { value: 2023, label: 2023 },
        { value: 2022, label: 2022 },
        { value: 2021, label: 2021 },
        { value: 2020, label: 2020 },
        { value: 2019, label: 2019 },
    ];

    return (
        <Container>
            <ContentHeader title={title.title} lineColor={title.lineColor}>
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected}/>
                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected}/>
            </ContentHeader>

            <Filters>
                <button 
                    type='button'
                    className='tag-filter tag-filter-recurrent'
                >
                    Recorrentes
                </button>

                <button 
                    type='button'
                    className='tag-filter tag-filter-eventual'
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dataFormatted}
                            amount={item.amountFormatted}

                        />        
                    ))
                    
                }
                
            </Content>

        </Container>

    )
}

export default List;

