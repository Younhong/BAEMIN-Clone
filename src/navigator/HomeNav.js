import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from "./HomeTab";
import HomeStack from "./HomeStack";

const Nav = createNativeStackNavigator();

const HomeNav = () => (
    <Nav.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Nav.Screen name="HomeTab" component={HomeTab} />
        <Nav.Screen name="HomeStack" component={HomeStack} />
    </Nav.Navigator>
);

export default HomeNav;