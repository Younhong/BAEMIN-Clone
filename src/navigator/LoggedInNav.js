import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from "../screen/MainScreen";
import HomeNav from "./HomeNav";

const Nav = createNativeStackNavigator();

const LoggedInNav = () => (
    <Nav.Navigator screenOptions={{
        headerShown: false
    }}>
        <Nav.Screen name="BaeminMain" component={MainScreen}/>
        <Nav.Screen name="BaeminHome" component={HomeNav} />
    </Nav.Navigator>
);

export default LoggedInNav;
