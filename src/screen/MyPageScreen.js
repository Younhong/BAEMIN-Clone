import React from "react";
import styled from "styled-components/native";
import auth from '@react-native-firebase/auth';
import { Text } from "react-native";

const MyPageContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
const AuthBtn = styled.TouchableOpacity`
    width: 40%;
    border-width: 1px;
    border-radius: 20px;
    border-color: black;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    margin: 30px 10px;
`;

const AuthView = styled.View`
    flex-direction: row;
    padding: 10px;
    justify-content: center;
`;

const MyPageScreen = () => {
    const signOut = () => {
        auth().signOut();
    }
    const removeUser = async () => {
        await auth().currentUser.delete();
        await auth().signOut();
    }

    return (
        <MyPageContainer>
            <AuthView>
                <AuthBtn onPress={signOut}>
                    <Text>Logout</Text>
                </AuthBtn>
                <AuthBtn onPress={removeUser}>
                    <Text>Delete your account</Text>
                </AuthBtn>
            </AuthView>
        </MyPageContainer>
    );
}

export default MyPageScreen;