import React from 'react';
import {createStackNavigator} from "@react-navigation/stack"
import Explore from '../screens/explore/Explore';
import Profile from '../screens/profile/Profile';


const Stack = createStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator mode = "modal" screenOptions={{headerShown: false}}>
        <Stack.Screen name = "Explore" component={Explore}/>
        <Stack.Screen name = "Profile" component={Profile}/>
    </Stack.Navigator>
)

export default AppNavigator;