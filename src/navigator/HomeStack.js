import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BLACK_COLOR } from "../util/color";
import HomeScreen from "../screen/HomeScreen";

const NativeStack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <NativeStack.Navigator screenOptions={{
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: "white",
            },
            headerTitleStyle: {
                color: BLACK_COLOR,
            }
        }}>
            <NativeStack.Screen name="Detail" component={HomeScreen} />
        </NativeStack.Navigator>
    );
}

export default HomeStack;