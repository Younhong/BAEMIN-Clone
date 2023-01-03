import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BLACK_COLOR } from "../util/color";
import LoginScreen from "../screen/LoginScreen";
import JoinScreen from "../screen/JoinScreen";

const Nav = createNativeStackNavigator();

const LoggedOutNav = () => (
    <Nav.Navigator
        screenOptions={{
            headerShown: false,
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: BLACK_COLOR,
            },
        }}>
        <Nav.Screen name="Login" component={LoginScreen}/>
        <Nav.Screen name="Join" component={JoinScreen}/>
    </Nav.Navigator>
);

export default LoggedOutNav;