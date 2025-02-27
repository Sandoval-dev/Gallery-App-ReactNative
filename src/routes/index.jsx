import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Splash from '../screens/Splash';
import { navigationRef } from '../NavigationService';

const Stack = createNativeStackNavigator();

export class Routes extends Component {
    render() {
        return (
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator initialRouteName='Splash' screenOptions={({ route, navigation }) => {
                    return {
                        headerShown: false
                    }
                }}>
                    <Stack.Screen name="Welcome" component={Home} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Splash" component={Splash} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Routes