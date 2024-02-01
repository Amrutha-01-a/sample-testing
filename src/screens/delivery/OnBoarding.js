
import React, {useState} from "react";
import { View, Text, Dimensions, TouchableOpacity,Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home_module from "./HomeModule";
import Category from "./Category";
import Orders from "./Orders";
import Profile from "./Profile";
const OnBoarding=()=>{
    

    const Tab = createBottomTabNavigator();
    return (
        <View style={{paddingTop:2,flex:1,backgroundColor:'black'}}>
             <Tab.Navigator 
            initialRouteName={'Home_module'}
            screenOptions={{
                tabBarActiveTintColor:'##007A04',
                tabBarActiveTintColor: '#007A04',
                tabBarItemStyle: {backgroundColor: 'lavender'},
                tabBarStyle :{marginHorizontal:0, borderWidth:0, marginBottom:Platform.OS == 'ios'? 5 :0, shadowOffset: { height: 0, width: 0 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    elevation: 2,borderRadius:0,height: Platform.OS == 'android'? 65:80, backgroundColor:'#fff', alignItems: 'center'},
                tabBarLabelStyle:{top:Platform.OS == 'android'? -12:0, fontWeight: '500'}         
            }}
        >   
        <Tab.Screen
                name="home_module"
                style={{ color: "red", justifyContent: "center" }}
                component={Home_module}
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarColor: "#000000",
                    tabBarActiveTintColor: "black",
                    
                    tabBarIcon: ({ color, focused }) => (
                        focused?
                            <Image source={require('../../assets/homeOff.png')} style = {{width:40, height:40, resizeMode: 'center'}} />
                        :
                            <Image source={require('../../assets/homeOff.png')} style = {{width:40, height:40, resizeMode: 'center'}} />
                    ),
                }}
            />
        <Tab.Screen
                name="category"
                style={{ color: "red",paddingBottom:5, justifyContent: "center" }}
                component={Category}
                options={{
                    tabBarLabel: "category",
                    headerShown: false,
                    tabBarColor: "#000000",
                    tabBarActiveTintColor: "black",
                    // #007A04
                    tabBarIcon: ({ color, focused }) => (
                        focused?
                            <Image source={require('../../assets/catgg.jpg')} style = {{width:30, height:30, resizeMode: 'center'}} />
                        :
                            <Image source={require('../../assets/catgg.jpg')} style = {{width:30, height:30, resizeMode: 'center'}} />
                    ),
                }}
            />
             <Tab.Screen
                name="orders"
                style={{ color: "red", justifyContent: "center" }}
                component={Orders}
                options={{
                    tabBarLabel: "Docs",
                    headerShown: false,
                    tabBarColor: "#000000",
                    tabBarActiveTintColor: "black",
                    
                    tabBarIcon: ({ color, focused }) => (
                        focused?
                            <Image source={require('../../assets/ordersOff.png')} style = {{width:40, height:40, resizeMode: 'center'}} />
                        :
                            <Image source={require('../../assets/ordersOff.png')} style = {{width:40, height:40, resizeMode: 'center'}} />
                    ),
                }}
            /> 
            <Tab.Screen
                name="Profile"
                style={{ color: "red", justifyContent: "center" }}
                component={Profile}
                options={{
                    tabBarLabel: "Profile",
                    headerShown: false,
                    tabBarColor: "#000000",
                    tabBarActiveTintColor: "black",
                    
                    tabBarIcon: ({ color, focused }) => (
                        focused?
                            <Image source={require('../../assets/profileOff.png')} style = {{width:40, height:40, resizeMode: 'center'}} />
                        :
                            <Image source={require('../../assets/profileOff.png')} style = {{width:40, height:40, resizeMode: 'center'}} />
                    ),
                }}
            />            
      </Tab.Navigator>
    </View>
    )
}   

export default OnBoarding
