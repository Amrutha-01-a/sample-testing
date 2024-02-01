import React from "react";
import {} from "react-native";
//
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screens
import OnBoarding from "../screens/delivery/OnBoarding";
import Home_module from "../screens/delivery/HomeModule";
import Category from "../screens/delivery/Category";
import Orders from "../screens/delivery/Orders";
import Profile from "../screens/delivery/Profile";

export default function DeliveryStack(){
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer independent = {true}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="OnBoarding"
            >
                <Stack.Screen 
                    name="OnBoarding"
                    component={OnBoarding}
                />
                <Stack.Screen 
                    name="Home_module"
                    component={Home_module}
                />
                <Stack.Screen 
                    name="Category"
                    component={Category}
                />
                <Stack.Screen 
                    name="Orders"
                    component={Orders}
                />
                <Stack.Screen 
                    name="Profile"
                    component={Profile}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}