import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import HomePage from '../Homepage/HomePage';
import Rootpage from '../Rootpage/Rootpage';
import Password from '../Password/Password';
import PhoneNumber from '../PhoneNumber/PhoneNumber';


const Navigation = () => {

    const Stack = createNativeStackNavigator();

  return (
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Rootpage" component={Rootpage} />
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
        <Stack.Screen name="Password" component={Password} />
        {/* <Stack.Screen name="Rootpage" component={Rootpage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})