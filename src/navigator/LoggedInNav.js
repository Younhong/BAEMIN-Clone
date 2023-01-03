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

/**
 * 배민메인: 특정 스크린 이동
 * 배민홈: 홈내비로 이동
 * 홈 내비: HomeNav, HomeStack
 */
