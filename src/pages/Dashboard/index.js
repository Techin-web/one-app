import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Container from '../../components/Container';

import {
        Content, ContentHeader, Header, Icon, HeaderLabel, Ball, Banner, BannerLabel, Graphic, MoreInfo, Label, ContentValue, Currency,
        Value, GraphicCurrency, GraphicGoal, Cards, Card, CardTitle, Contracts, Title, ContractTitle, Contract, Name, Description, State,
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

const Dashboard = () => {
    const metaAtual = 13000;
    const valorAtual = 3000;

    const isIos = Platform.OS === 'ios' ? true : false;
    const [goalHeight, setGoalHeight] = useState(0); //META
    const [currencyHeight, setCurrencyHeight] = useState(0); //ATUAL
    const [userName, setUserName] = useState('');
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();

    useEffect(() => {
        const getUserName = async() => {
            const getName = await AsyncStorage.getItem('userName');

            if(getName) {
                setUserName(getName);
            }
        }

        getUserName();
    },[]);

    useEffect(() => {
        const getValueHeight = () => {
            const currencyX = (goalHeight * valorAtual) / metaAtual;
            const currency = ((currencyX * 100) / goalHeight).toFixed(2);

            if(currency > 100) {
                setCurrencyHeight(goalHeight);
            }else {
                setCurrencyHeight((currency * goalHeight) / 100);
            }
        }

        getValueHeight();
    }, [goalHeight, currencyHeight]);


    const goNews = () => {
        navigation.navigate('News');
    }

    const goContracts = () => {
        navigation.navigate('Contracts');
    }

    return (
        <Container>
            <Content windowHeight={isIos}>
                <ContentHeader windowHeight={isIos ? (windowHeight / 1.20) : windowHeight}>
                    <Header>
                        <HeaderLabel>{userName}</HeaderLabel>
                        <Icon onPress={() => goNews()}>
                            <Ball />
                            <Ionicons name='md-notifications' size={30} color='#fff' />
                        </Icon>
                    </Header>
                </ContentHeader>
                <Banner onLayout={(event) => {
                    const { height } = event.nativeEvent.layout;

                    setGoalHeight((height - 32).toFixed(2));
                }}>
                    <BannerLabel>
                        <MoreInfo>
                            <Label>Saldo Atual</Label>
                            <ContentValue>
                                <Currency>
                                    <Label currency={true}>R$</Label>
                                </Currency>
                                <Value>{valorAtual},00</Value>
                            </ContentValue>
                        </MoreInfo>
                        <MoreInfo>
                            <Label>Meta Atual</Label>
                            <ContentValue>
                                <Currency meta={true}>
                                    <Label currency={true}>R$</Label>
                                </Currency>
                                <Value>{metaAtual},00</Value>
                            </ContentValue>
                        </MoreInfo>
                    </BannerLabel>
                    <Graphic>
                        <GraphicCurrency graphicHeight={currencyHeight} />
                        <GraphicGoal graphicHeight={goalHeight} />
                    </Graphic>
                </Banner>
                <Cards>
                    <Card>
                        <CardTitle>Contratos Atuais</CardTitle>
                        <Value>13</Value>
                    </Card>
                    <Card>
                        <CardTitle>Meta Atual</CardTitle>
                        <Value>150</Value>
                    </Card>
                </Cards>
                <Contracts>
                    <Header>
                        <Title>Contratos</Title>
                        <Icon onPress={() => goContracts()}>
                            <FontAwesome name='filter' size={22} color='#C4C4C4' />
                            <ContractTitle>Filtrar</ContractTitle>
                        </Icon>
                    </Header>
                    {
                        allContracts.map((contract, index) => (
                            <Contract key={index}>
                                <Description>
                                    <Name>{contract.name}</Name>
                                    <Date>{contract.date}</Date>
                                </Description>
                                <State state={contract.state} />
                            </Contract>
                        ))
                    }
                </Contracts>
            </Content>
        </Container>
    );
}

export default Dashboard;
