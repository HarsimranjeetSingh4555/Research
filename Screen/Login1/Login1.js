import { SafeAreaView, ScrollView, StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const Login1 = () => {

    const image = { uri: "https://doctro.saasmonks.in/assets/img/login.png" }

    
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


  return (
    <ImageBackground source={image} resizeMode="cover" blurRadius={9} style={styles.image}>
            <ScrollView>
                <View style={styles.Logo}>
                    <Image source={require('../assets/d.png')} style={styles.logo} />
                </View>

                <View style={styles.maininput}>

                    <View >
                        <TextInput placeholder='Enter Your Email'
                            placeholderTextColor={'#000'}
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View >
                        <TextInput placeholder='Enter Your Password'
                            placeholderTextColor={'#000'}
                            style={styles.input}
                            value={pass}
                            onChangeText={setPass}
                        />
                    </View>
                    
                    <TouchableOpacity style={styles.forgot}>
                            <Text style={styles.text3}>Forgot Password</Text>
                        </TouchableOpacity>

                    <TouchableOpacity style={styles.Btn} >
                        <Text style={styles.btn}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.bottom}>

                        <TouchableOpacity>
                            <Text style={styles.text1}>Already Have An Account?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.text2}>Sign Up</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </ScrollView>
        </ImageBackground>
  )
}

export default Login1

const styles = StyleSheet.create({
    image: {
        flex: 1,
        opacity: 0.8,

    },
    Logo: {
        margin: 10,
        backgroundColor: '#fff',
        height: 70,
    },
    logo: {
        resizeMode: 'center',
        marginTop: -30,
        alignSelf: 'center'
    },
    maininput: {
        marginVertical: '30%',
        marginHorizontal: 20
    },
    input: {
        marginHorizontal: 10,
        borderColor: '#fff',
        color: '#000',
        borderBottomWidth: 2,
        marginVertical: 10,
        fontSize: 15
    },
    drop:{
        borderBottomWidth:2,
        borderColor:'#fff',
        width: '95%',
        marginLeft:10
    },
    phone: {
        borderBottomWidth: 2,
        borderColor: '#fff',
        width: '81%',
        fontSize: 15
    },
    Ccode: {
        borderBottomWidth: 2,
        borderColor: '#fff',
        marginHorizontal: 11,
        width: '10%',
        marginTop: 17,
        color: '#000',
        fontSize: 15
    },
    phnCode: {
        flexDirection: 'row',
        // borderBottomWidth: 2,
        // borderColor: '#fff',
    },
    forgot:{
        marginVertical: 20,
    },
    Btn: {
        marginVertical: 20,
        backgroundColor: '#1F8CEB',
        height: 40,
        width: '30%',
        borderRadius: 8,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btn: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
    },
    bottom: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 15,
        marginLeft: 15,
    },
    text1: {
        fontSize: 17,
        color: '#fff',
        marginVertical: 2
    },
    text2: {
        fontSize: 20,
        color: '#1F8CEB',
        marginHorizontal: 10,
    },
    text3: {
        fontSize: 20,
        color: '#1F8CEB',
        textAlign:'center',
        fontWeight:'600'
    },
})