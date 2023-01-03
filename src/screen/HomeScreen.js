import React from "react";
import styled from "styled-components/native";

const HomeContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
const HomeBtn = styled.TouchableOpacity``;
const BtnText = styled.Text``;

const HomeScreen = ({ navigation: { goBack } }) => {
    return (
        <HomeContainer>
            <HomeBtn onPress={() => goBack()}>
                <BtnText>메인으로 이동</BtnText>
            </HomeBtn>
        </HomeContainer>
    );
}

export default HomeScreen;