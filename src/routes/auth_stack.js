import React from "react";
import {} from "react-native";
//
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screens
import Signin from "../screens/auth/Signin";

export default function AuthStack(){
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer independent = {true}>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Signin"
            >
                <Stack.Screen 
                    name="Signin"
                    component={Signin}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}