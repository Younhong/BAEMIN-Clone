import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "../screen/HomeScreen";
import MyPageScreen from "../screen/MyPageScreen";

const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: "white",
            }}
            screenOptions={{
                unmountOnBlur: true,
                tabBarStyle: {
                    backgroundColor: "white",
                },
                headerStyle: {
                    backgroundColor: "white",
                },
                tabBarLabelStyle: {
                    marginTop: -5,
                    fontSize: 10,
                    fontWeight: "600",
                },
            }}>
            <Tab.Screen
                name="검색"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="search-outline" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen
                name="찜"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="heart-outline" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen
                name="홈"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="home-outline" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen
                name="주문내역"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="fast-food-outline" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen
                name="MY배민"
                component={MyPageScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="people" size={size} color={color} />
                    }
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeTab;