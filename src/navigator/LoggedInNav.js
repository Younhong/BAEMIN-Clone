import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeTab from "./HomeTab";

const Nav = createNativeStackNavigator();

const LoggedInNav = () => (
    <Nav.Navigator screenOptions={{
        headerShown: false
    }}>
        <Nav.Screen name="코인" component={HomeTab}/>
    </Nav.Navigator>
);

export default LoggedInNav;