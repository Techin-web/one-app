import React, { useEffect, useState } from 'react';
import { ScrollView, Platform, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { base_url } from '../../services/1net';

import Zoom from './zoom';
import Container from '../../components/Container';

import {
    Content, Header, Icon, HeaderLabel, Contracts, Contract, Description, Img
} from './styles';

const MoreInfo = () => {
    const isIos = Platform.OS === 'ios' ? true : false;
    const navigation = useNavigation();
    const router = useRoute();
    const [fullInfo, setFullInfo] = useState({});
    const [token, setToken] = useState('');
    const [viewZoom, setViewZoom] = useState(false);

    useEffect(() => {
        setFullInfo(router.params.info);
        setToken(router.params.token);
    },[]);

    const goBack = () => {
        viewZoom ? setViewZoom(viewZoom => !viewZoom) : navigation.goBack();
    }

    const showZoom = () => {
        setViewZoom(viewZoom => !viewZoom);
    }

    return (
        <Container>
            <Content isIos={isIos}>
                <Header>
                    <Icon onPress={() => goBack()}>
                        <AntDesign name="arrowleft" size={24} color="#fff" />
                    </Icon>
                    <HeaderLabel>{fullInfo.eventname}</HeaderLabel>
                </Header>
                <ScrollView>
                    <Contracts viewZoom={viewZoom}
                        contentContainerStyle={{
                            paddingTop: 16,
                        }}
                    >
                        <Contract viewZoom={viewZoom}>
                            { !viewZoom
                                ?   <>
                                        <TouchableOpacity onPress={() => showZoom()}>
                                            <Img
                                                resizeMode="contain"
                                                source={{
                                                    uri: `${base_url}/files/${fullInfo.filename}` ,
                                                    headers: {
                                                        Authorization: `Bearer ${token}`,
                                                    },
                                                }}
                                            />
                                        </TouchableOpacity>
                                        <Description>{fullInfo.eventdescription}</Description>
                                    </>
                                :
                                    <Zoom Uri={`${base_url}/files/${fullInfo.filename}`} Token={router.params.token} />
                            }
                        </Contract>
                    </Contracts>
                </ScrollView>
            </Content>
        </Container>
    );
}

export default MoreInfo;
