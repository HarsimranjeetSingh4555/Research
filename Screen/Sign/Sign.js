import { SafeAreaView, ScrollView, StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';



// ====> npm i react-native-select-dropdown

const Sign = ({navigation}) => {

    const image = { uri: "https://doctro.saasmonks.in/assets/img/login.png" }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('+91')
    const [phone, setPhone] = useState('')
    const [pass, setPass] = useState('')
    const [birth, setBirth] = useState('')
    const [gender,setGender] =useState('')

    const Phone = code + phone

    console.log(name, "name")
    console.log(email, 'email')
    console.log(code, 'code')
    console.log(Phone, 'Phone')
    console.log(pass, 'pass')
    console.log(birth, 'birth')

    return (

        <ImageBackground source={image} resizeMode="cover" blurRadius={9} style={styles.image}>
            <ScrollView>
                <View style={styles.Logo}>
                    <Image source={require('../assets/d.png')} style={styles.logo} />
                </View>

                <View style={styles.maininput}>

                    <View >
                        <TextInput placeholder='Enter Your Name'
                            placeholderTextColor={'#000'}
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

                    <View >
                        <TextInput placeholder='Enter Your Email'
                            placeholderTextColor={'#000'}
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.phnCode}>
                        <Text style={styles.Ccode} >{code}</Text>
                        <TextInput value={phone} onChangeText={setPhone} placeholder='Enter Your Phone'
                            placeholderTextColor={'#000'} style={styles.phone}
                            keyboardType='numeric'
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

                    <View >
                        <TextInput placeholder='Enter Your Date of Birth'
                            placeholderTextColor={'#000'}
                            style={styles.input}
                            value={birth} onChangeText={setBirth}
                        />
                    </View>

                    <View  style={styles.drop}>
                        <Picker
                            selectedValue={gender}
                            onValueChange={(itemValue) => setGender(itemValue)} 
                           
                            >

                            <Picker.Item label="Select Gender" value="disable" style={{ color: "#000", }} />
                            <Picker.Item label="Male" value="Male" style={{ color: "#000", }} />
                            <Picker.Item label="Female" value="Female" style={{ color: "#000", }} />

                        </Picker>
                    </View>

                    <TouchableOpacity style={styles.Btn} onPress={()=>navigation.navigate('Sign2')}>
                        <Text style={styles.btn}>Sign Up</Text>
                    </TouchableOpacity>

                    <View style={styles.bottom}>

                        <TouchableOpacity>
                            <Text style={styles.text1}>Already Have An Account?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.text2}>Login</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </ScrollView>
        </ImageBackground>


    )
}

export default Sign

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
        marginVertical: 60,
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
    Btn: {
        marginVertical: 50,
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
})