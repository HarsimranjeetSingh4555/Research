import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sign from '../Sign/Sign';
import Sign2 from '../Sign2/Sign2';
import Sign3 from '../Sign3/Sign3';


const Navigation = () => {

    const Stack = createNativeStackNavigator();

  return (
     <NavigationContainer>
      <Stack.Navigator screenOptions={false}>
      <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Sign2" component={Sign2} />
        <Stack.Screen name="Sign3" component={Sign3} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})