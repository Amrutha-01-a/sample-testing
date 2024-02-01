import React from "react";
import {View, Dimensions} from "react-native";

//stacks
import RootNavigator from "./src/routes/root_navigator";


const {height, width} = Dimensions.get('window');

export default function DisplayOnBoarding(){
    return(
        <View style = {{flex: 1}}>
            <RootNavigator />
        </View>
    )
}