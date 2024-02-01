import React from "react";
import {} from "react-native";
//
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screens
import MainScreen from "../screens/home/MainScreen";

export default function HomeStack(){
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer independent = {true}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="MainScreen"
            >
                <Stack.Screen 
                    name="MainScreen"
                    component={MainScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}