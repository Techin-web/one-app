import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageZoom from 'react-native-image-pan-zoom';

import {
    Img
} from './styles';

const Zoom = ({ Uri, Token }) => {
    return (
        <ImageZoom
            cropWidth = { Dimensions.get('window').width }
            cropHeight = { Dimensions.get('window').height }
            imageWidth = { Dimensions.get('window').width }
            imageHeight = { Dimensions.get('window').height }
        >
            <Img
                resizeMode="contain"
                source={{
                    uri: `${Uri}` ,
                    headers: {
                        Authorization: `Bearer ${Token}`,
                    },
                }}
            />
        </ImageZoom>
    );
}

export default Zoom;
