import React, {useState, useEffect} from "react";
import {} from "react-native";
//
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

//stack
import AuthStack from "./auth_stack";
import HomeStack from "./home_stack";
import DeliveryStack from "./delivery_stack";

export default function RootNavigator(){
    const [user, setIsLoading] = useState(false);  
    const [status, setStatus] = useState(false);

    useEffect(() => {
        fetchUserValue();
    })

    const fetchUserValue = async () => {
        console.log(user, 'll');
        console.log(status, 'hh');

        const value = await AsyncStorage.getItem('@user')
        // alert(value)
        const type = await AsyncStorage.getItem('@userdata')
        setStatus(type)
        if(value== true||value=="true")
        {     
          setIsLoading(true)
        }
        else
        {
          setIsLoading(false)
        }
    }

    

    return(
        <NavigationContainer independent = {true}>
        {user ?
            (status == 'Contractor' ? <HomeStack/>: <DeliveryStack />)
            : <AuthStack/>
        }
        </NavigationContainer>
    )
}