import React, {useState, useEffect} from "react";
import {View, Text, Dimensions, TouchableOpacity} from "react-native";
//
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
//stack
import RootNavigator from "../../routes/root_navigator";


const {height, width} = Dimensions.get('window');

export default function Signin(){

    //
    const [index, setIndex] = useState(null);
    const [screenOne, setScreenOne] = useState(false);
    const [screenTwo, setScreenTwo] = useState(false);

    async function assignContractor(){
        setIndex(1)
    }

    async function assignDelivery(){
        setIndex(2)
    }

    async function assignScreen(){
        if(index == 1){
            
            await AsyncStorage.setItem('@user',"true");
            await AsyncStorage.setItem('@userdata', "Contractor");
            setScreenOne(true);
        }
        if(index == 2){
            
            await AsyncStorage.setItem('@user',"true");
            await AsyncStorage.setItem('@userdata', "Delivery");
            setScreenTwo(true);
        }
    }

    if(screenOne){
        return(
            <RootNavigator />
        )
    }
    if(screenTwo){
        return(
            <RootNavigator />
        )
    }

    return(
        <View style = {{flex: 1, backgroundColor: 'skyblue', paddingTop: 50, justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{textAlign: 'center',color:'black'}}>Signin</Text>
            <TouchableOpacity onPress={() => assignContractor()} style = {{width: width-40, alignSelf: 'center', borderWidth: 1, padding: 10, marginTop: 20}}>
                <Text style = {{textAlign: 'center',color:'black'}}>Contractor</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => assignDelivery()} style = {{width: width-40, alignSelf: 'center', borderWidth: 1, padding: 10,  marginTop: 20}}>
                <Text style = {{textAlign: 'center', color:'black'}}>Delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => assignScreen()} style = {{width: width-40, padding: 10, backgroundColor: 'blue', alignSelf: 'center', marginTop: 100}}>
                <Text style={{color:'#fff'}}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}