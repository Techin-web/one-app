import styled from 'styled-components/native';

export const Content = styled.View`
    flex: 1;
    background: #eee;
    padding-bottom: ${props => (props.isIos ? "16px" : "0")};
`;

export const Header = styled.View`
    flex-direction: row;
    background: #79CB39;
    align-items: center;
    padding: 16px;
`;

export const Icon = styled.TouchableOpacity`
    background: #0D8613;
    align-items: center;
    justify-content: center;
    height: 39px;
    width: 39px;
    border-radius: 19.5px;
    margin: 1px 16px 0 0;
`;

export const HeaderLabel = styled.Text`
    font-size: 30px;
    font-weight: 700;
    color: #fff;
`;

export const Contracts = styled.ScrollView`
    padding: ${props => (props.viewZoom ? '0' : '0 16px')};
`;

export const Contract = styled.View`
    padding: ${props => (props.viewZoom ? '0' : '0 16px 16px')};
    background: #fff;
    border-radius: ${props => (props.viewZoom ? '0' : '10px')};
    margin-top: ${props => (props.viewZoom ? '-16px' : '0')};
`;

export const Description = styled.Text`
    color: #41484A;
    font-size: 16px;
    font-weight: 700;
    text-align: justify;
    margin: 20px 0;
`;

export const Date = styled.Text`
    color: #41484A;
    font-size: 14px;
    margin: 5px 0 0;
`;

export const Img = styled.Image`
    height: 250px;
    width: 100%;
    margin-top: 20px;
`;
