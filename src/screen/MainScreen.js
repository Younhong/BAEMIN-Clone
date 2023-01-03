import React from "react";
import styled from "styled-components/native";

const MainContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
const MainBtn = styled.TouchableOpacity``;
const BtnText = styled.Text``;

const MainScreen = ({ navigation: { navigate } }) => {
    const onPress = () => {
        navigate("BaeminHome");
    };

    return (
        <MainContainer>
            <MainBtn onPress={onPress}>
                <BtnText>Move To Home</BtnText>
            </MainBtn>
        </MainContainer>
    );
}

export default MainScreen;