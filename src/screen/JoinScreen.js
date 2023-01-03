import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import auth from '@react-native-firebase/auth';

const Container = styled.View`
    flex: 1;
    color: black;
    padding: 60px 20px;
    justify-content: center;
    align-items: center;
`;
const TextInput = styled.TextInput`
    width: 100%;
    padding: 10px 20px;
    border-radius: 20px;
    margin-bottom: 10px;
    font-size: 16px;
    color: white;
    border-color: black;
    border-width: 1px;
`;

const LoginBtn = styled.TouchableOpacity`
    width: 100%;
    padding: 10px 20px;
    border-width: 1px;
    border-radius: 20px;
    border-color: black;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

const Wrapper = styled.View`
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 30px 0px;
`;

const BtnText = styled.Text`
    font-size: 16px;
`;

const JoinScreen = () => {
    const passwordInput = useRef();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmitEmailEditing = () => {
        passwordInput.current.focus();
    }
    const onSubmitPasswordEditing = async () => {
        if (email === "" || password === "") {
            return Alert.alert("Fill in the form");
        }
        if (loading) return;

        setLoading(true);

        try {
            await auth().createUserWithEmailAndPassword(email, password);
            setLoading(false);
        } catch (error) {
            setLoading(false);

            switch (error.code) {
                case "auth/weak-password": {
                    Alert.alert("Write a stronger password!");
                    break;
                }
                case "auth/invalid-email": {
                    Alert.alert("Invalid Email");
                    break;
                }
                case "auth/email-already-in-use": {
                    Alert.alert("Email already registered");
                    break;
                }
            }
        }
    }

    return (
        <Container>
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="black"
                autoCorrect={false}
                value={email}
                returnKeyType="next"
                onChangeText={(text) => setEmail(text)}
                onSubmitEditing={onSubmitEmailEditing}
            />
            <TextInput
                ref={passwordInput}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="black"
                returnKeyType="done"
                value={password}
                onChangeText={(text) => setPassword(text)}
                onSubmitEditing={onSubmitPasswordEditing}
            />
            <LoginBtn onPress={onSubmitPasswordEditing}>
                {
                    loading
                        ? <ActivityIndicator color="white" />
                        : <BtnText>Create Account</BtnText>
                }
            </LoginBtn>
        </Container>
    );
}

export default JoinScreen;