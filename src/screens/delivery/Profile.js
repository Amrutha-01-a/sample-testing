
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View,Dimensions,TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import RootNavigator from "../../routes/root_navigator";
import RNRestart from 'react-native-restart';
const {height, width} = Dimensions.get('window');

export default function Profile(){
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
        <View style = {{flex: 1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{color: 'black'}}>Delivery</Text>
            <TouchableOpacity onPress={() => pressHandler()} style = {{width: width-40, padding: 10, backgroundColor: 'lavender', marginTop: 50}}>
                <Text style = {{textAlign: 'center', color: 'black'}}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}
