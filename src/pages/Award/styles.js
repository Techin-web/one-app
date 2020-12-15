import styled from 'styled-components/native';

export const ContentFull = styled.View`
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

export const HeaderLabel = styled.Text`
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    text-transform: capitalize;
`;
