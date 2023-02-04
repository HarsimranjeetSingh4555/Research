import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home/Home';
import ChooseLocation from '../ChooseLocation/ChooseLocation';



const LocationNavigation = () => {

    const Stack = createNativeStackNavigator();

  return (
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ChooseLocation" component={ChooseLocation} />
        
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default LocationNavigation