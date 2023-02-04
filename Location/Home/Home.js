import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView,{Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Directions_Keys} from '../GoogleKeys/GoogleKeys'

const Home = () => {

    const [state, setState] = useState({
        pickupCords: {
            latitude: 30.70446,
            longitude: 76.7179,
            latitudeDelta:0.0922,
            longitudeDelta:0.0922,
        },
        droplocationCors: {
            latitude: 30.7333,
            longitude: 76.7794,
            latitudeDelta:0.0922,
            longitudeDelta:0.0922,
        }
    })

    const {pickupCords,droplocationCors} =state


    return (
        <View style={styles.container}>
            <MapView
                style={StyleSheet.absoluteFill}
                initialRegion={pickupCords}
            />
            <Marker
            coordinate={droplocationCors}
            />

            <MapViewDirections
                origin={pickupCords}
                destination={droplocationCors}
                apikey={Directions_Keys}
                strokeWidth={4}
                strokeColor="hotpink"
            />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Btn: {
        backgroundColor: '#fff',
        marginVertical: 20,
        borderRadius: 5
    },
    btn: {
        padding: 10,
        color: '#000'
    },
})
