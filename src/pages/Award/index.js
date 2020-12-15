import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Container from '../../components/Container';

import {
        ContentFull, Header, HeaderLabel
} from './styles';

const Award = () => {
    const [userName, setUserName] = useState('');
    const isIos = Platform.OS === 'ios' ? true : false;
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

    const goHome = async() => {
        await AsyncStorage.removeItem('loginToken');
        await AsyncStorage.removeItem('userName');

        navigation.navigate("Home");
    }

    return (
        <Container>
            <ContentFull isIos={isIos}>
                <Header>
                    <HeaderLabel>Premiação</HeaderLabel>
                </Header>
            </ContentFull>
        </Container>
    );
}

export default Award;
