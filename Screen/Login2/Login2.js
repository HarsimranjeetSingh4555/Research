import { SafeAreaView, ScrollView, StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Login2 = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <ScrollView style={styles.container}>
            <View style={styles.Logo}>

                <Image source={require('../assets/d.png')} style={styles.logo} />
            </View>

            <View style={styles.maininput}>

               

                <View style={styles.input}>
                    <TextInput placeholder='Enter Your Email'
                        placeholderTextColor={'#000'}
                        style={styles.inputtext}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

              

                <View style={styles.input}>
                    <TextInput placeholder='Enter Your Password'
                        placeholderTextColor={'#000'}
                        style={styles.inputtext}
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
    )
}

export default Login2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    Logo: {
        margin: 10,
        height: 70,
    },
    logo: {
        resizeMode: 'center',
        marginTop: -30,
        alignSelf: 'center'
    },
    maininput: {
        marginVertical: '20%',
        marginHorizontal: 20
    },
    input: {
        marginHorizontal: 10,
        borderColor: '#000',
        borderWidth: 1,
        marginVertical: 10,
        fontSize: 15,
        borderRadius: 8,
    },
    inputtext: {
        marginLeft: 10
    },
    drop: {
        borderWidth: 1,
        borderColor: '#000',
        width: '95%',
        marginLeft: 10,
        borderRadius: 8,
        marginVertical: 10,
    },
    phone: {
        borderWidth: 1,
        borderColor: '#000',
        width: '83%',
        fontSize: 15,
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 8
    },
    phonetext: {
        marginLeft: 10
    },
    Code: {
        borderWidth: 1,
        borderColor: '#000',
        width: '15%',
        height: 52,
        marginTop: 9,
        borderRadius: 8,
        fontSize: 15,
    },
    Ccode: {
        marginTop: 15,
        color: '#000',
        fontSize: 15,
        textAlign: 'center'

    },
    phnCode: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
    forgot:{
        marginVertical: 20,
    },
    Btn: {
        marginVertical: 30,
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
        color: '#000',
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