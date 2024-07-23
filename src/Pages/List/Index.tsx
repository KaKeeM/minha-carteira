import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Content, Filters } from './styles';
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";

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
        const response = listData.map(item => {
            return {
                id: String(Math.random () * data.length),
                description: item.description,
                amountFormatted: item.amount,
                frequency: item.frequency,
                dataFormatted: item.date,
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
            }
        })
        setData(response);
    },[]);

    const months = [
        { value: 7, label: 'Julho' },
        { value: 8, label: 'Agosto'},
        { value: 9, label: 'Setembro' }
    ];

    const years = [
        { value: 2021, label: 2021 },
        { value: 2020, label: 2020 },
        { value: 2019, label: 2019 },
    ];

    return (
        <Container>
            <ContentHeader title={title.title} lineColor={title.lineColor}>
                <SelectInput options={months} />
                <SelectInput options={years} />
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

