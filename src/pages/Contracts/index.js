import React from 'react';
import { ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import Container from '../../components/Container';

import {
        Content, Header, Icon, HeaderLabel, ContentHeader, Title, IconContent, ContractTitle, AllContracts, Contract, Name, Description, State,
        Date
} from './styles';

const allContracts = [
    {
        name: 'Edifício Terra Brasílis',
        date: '12/09/2020',
        state: 'aprovado'
    },
    {
        name: 'Edifício Terra Brasílis',
        date: '12/09/2020',
        state: 'cancelado'
    },
    {
        name: 'Edifício Terra Brasílis',
        date: '12/09/2020',
        state: 'aguardando'
    },
    {
        name: 'Edifício Terra Brasílis',
        date: '12/09/2020',
        state: 'aprovado'
    },
    {
        name: 'Edifício Terra Brasílis',
        date: '12/09/2020',
        state: 'cancelado'
    },
    {
        name: 'Edifício Terra Brasílis',
        date: '12/09/2020',
        state: 'aguardando'
    },
    {
        name: 'Edifício Terra Brasílis',
        date: '12/09/2020',
        state: 'aprovado'
    },
    {
        name: 'Edifício Terra Brasílis',
        date: '12/09/2020',
        state: 'cancelado'
    },
    {
        name: 'Edifício Terra Brasílis',
        date: '12/09/2020',
        state: 'aguardando'
    },{
        name: 'Edifício Terra Brasílis',
        date: '12/09/2020',
        state: 'aprovado'
    },
    {
        name: 'Edifício Terra Brasílis',
        date: '12/09/2020',
        state: 'cancelado'
    },
    {
        name: 'Edifício Terra Brasílis',
        date: '12/09/2020',
        state: 'aguardando'
    },
]


const Contracts = () => {
    const isIos = Platform.OS === 'ios' ? true : false;
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Content isIos={isIos}>
                <Header>
                    <Icon onPress={() => goBack()}>
                        <AntDesign name='arrowleft' size={24} color='#fff' />
                    </Icon>
                    <HeaderLabel>Contratos</HeaderLabel>
                </Header>
                <ContentHeader>
                    <Title>Filtro</Title>
                    <IconContent onPress={() => {}}>
                        <FontAwesome name='filter' size={22} color='#C4C4C4' />
                        <ContractTitle>Filtrar</ContractTitle>
                    </IconContent>
                </ContentHeader>
                <ScrollView>
                    <AllContracts>
                        {
                            allContracts.map((contract, index) => (
                                <Contract key={index} onPress={() => {}}>
                                    <Description>
                                        <Name>{contract.name}</Name>
                                        <Date>{contract.date}</Date>
                                    </Description>
                                    <State state={contract.state} />
                                </Contract>
                            ))
                        }
                    </AllContracts>
                </ScrollView>
            </Content>
        </Container>
    );
}

export default Contracts;
