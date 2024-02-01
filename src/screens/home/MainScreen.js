import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, Dimensions} from "react-native";
//
import AsyncStorage from '@react-native-async-storage/async-storage';
//
import RootNavigator from "../../routes/root_navigator";
import RNRestart from 'react-native-restart';
const {height, width} = Dimensions.get('window');

export default function MainScreen(){
    const [logout, setLogout] = useState(false);

    async function pressHandler() {
        try {
            await AsyncStorage.clear();
            setLogout(true);
            console.log('AsyncStorage cleared successfully');
        } catch (error) {
            console.error('Error clearing AsyncStorage:', error);
        }
    }

    if(logout){
        RNRestart.Restart();
    }

    return(
        <View style = {{flex: 1,  paddingTop: 50, justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{color: 'black'}}>Contractor</Text>
            <TouchableOpacity onPress={() => pressHandler()} style = {{width: width-40, padding: 10, backgroundColor: 'red', marginTop: 50}}>
                <Text style = {{textAlign: 'center', color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}