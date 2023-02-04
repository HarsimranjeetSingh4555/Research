import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import MapView from 'react-native-maps'


const Location = () => {

  const [info, setInfo] = useState(0)
  const [info2, setInfo2] = useState(0)
  Geolocation.getCurrentPosition(data => {
    setInfo(data.coords.latitude)
    setInfo2(data.coords.longitude)
  })

  return (
    <View>
      
      <Text style={{ fontSize: 45 }}>Latitude{info}</Text>
      <Text style={{ fontSize: 45 }}>Longitude{info2}</Text>
    </View>
  )
}

export default Location

const styles = StyleSheet.create({})

