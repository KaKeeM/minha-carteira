import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../util/fromatCurrency';
import formatDate from '../../util/formatDate';

import { Container, Content, Filters } from './styles';

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC = () => {
    const { type } = useParams<{ type: string }>();

    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1).padStart(2, '0'));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
    const [frequencyFilterSelected, setFrequencyFilterSelected] = useState(['recorrente', 'eventual']);

    const pageData = useMemo(() => {
        return type === 'entry-balance'
            ? { title: 'Entradas', linecolor: '#4E41F0', data: gains }
            : { title: 'Saídas', linecolor: '#E44C4E', data: expenses };
    }, [type]);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        pageData.data.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year);
            }
        });

        return uniqueYears.map(year => ({ value: String(year), label: String(year) }));
    }, [pageData]);

    const months = [
        { value: '01', label: 'Janeiro' },
        { value: '02', label: 'Fevereiro' },
        { value: '03', label: 'Março' },
        { value: '04', label: 'Abril' },
        { value: '05', label: 'Maio' },
        { value: '06', label: 'Junho' },
        { value: '07', label: 'Julho' },
        { value: '08', label: 'Agosto' },
        { value: '09', label: 'Setembro' },
        { value: '10', label: 'Outubro' },
        { value: '11', label: 'Novembro' },
        { value: '12', label: 'Dezembro' },
    ];

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = frequencyFilterSelected.includes(frequency);

        if (alreadySelected) {
            setFrequencyFilterSelected(prev => prev.filter(item => item !== frequency));
        } else {
            setFrequencyFilterSelected(prev => [...prev, frequency]);
        }
    };

    const handleMonthSelected = (month: string) => {
        setMonthSelected(month);
    };

    const handleYearSelected = (year: string) => {
        setYearSelected(year);
    };

    useEffect(() => {
        const filteredData = pageData.data.filter(item => {
            const date = new Date(item.date);
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = String(date.getFullYear());

            return (
                month === monthSelected &&
                year === yearSelected &&
                frequencyFilterSelected.includes(item.frequency)
            );
        });

        const formattedData = filteredData.map(item => ({
            id: nanoid(),
            description: item.description,
            amountFormatted: formatCurrency(Number(item.amount)),
            frequency: item.frequency,
            dateFormatted: formatDate(item.date),
            tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
        }));

        setData(formattedData);
    }, [pageData, monthSelected, yearSelected, frequencyFilterSelected]);

    return (
        <Container>
            <ContentHeader title={pageData.title} linecolor={pageData.linecolor}>
                <SelectInput
                    options={months}
                    onChange={(e) => handleMonthSelected(e.target.value)}
                    defaultValue={monthSelected}
                />
                <SelectInput
                    options={years}
                    onChange={(e) => handleYearSelected(e.target.value)}
                    defaultValue={yearSelected}
                />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className={`tag-filter tag-filter-recurrent ${frequencyFilterSelected.includes('recorrente') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
                </button>

                <button
                    type="button"
                    className={`tag-filter tag-filter-eventual ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')}
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                {data.map(item => (
                    <HistoryFinanceCard
                        key={item.id}
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dateFormatted}
                        amount={item.amountFormatted}
                    />
                ))}
            </Content>
        </Container>
    );
};

export default List;
