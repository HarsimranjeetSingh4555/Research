import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChooseLocation = () => {
  return (
    <View style={styles.container}>
      <Text>ChooseLocation</Text>
    </View>
  )
}

export default ChooseLocation

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2c3e50',
        justifyContent:'center',
        alignItems:'center'
      },
})