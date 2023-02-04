import { SafeAreaView, ScrollView, StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const Sign3 = () => {

    const [gender, setGender] = useState('')

    return (
        <SafeAreaView>
            <ScrollView>

                <View style={styles.Logo}>
                    <Image source={require('../assets/d.png')} style={styles.logo} />
                </View>

                <View style={styles.maininput}>

                    <View style={styles.InputBorder}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput placeholder='Enter Name' style={styles.input} />
                    </View>

                    <View style={styles.InputBorder}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput placeholder='Enter Email' style={styles.input} />
                    </View>

                    <View style={styles.InputBorder}>
                        <Text style={styles.label}>Phone</Text>
                        <TextInput placeholder='Enter Phone' style={styles.input} />
                    </View>

                    <View style={styles.InputBorder}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput placeholder='Enter Password' style={styles.input} />
                    </View>

                    <View style={styles.InputBorder}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <TextInput placeholder='Enter Confirm Password' style={styles.input} />
                    </View>


                    <Text style={styles.gendertext}>Gender</Text>
                    <View style={styles.genderBorder}>

                        <Picker selectedValue={gender}
                            onValueChange={(itemValue) => setGender(itemValue)}
                        >
                            <Picker.Item label="Male" value="Male" style={{ color: "#000", }} />
                            <Picker.Item label="Female" value="Female" style={{ color: "#000", }} />

                        </Picker>

                    </View>


                    <TouchableOpacity style={styles.Btn}>
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
        </SafeAreaView>
    )
}

export default Sign3

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
    InputBorder: {
        marginHorizontal: 30,
        paddingVertical: 10,
    },
    label: {
        fontSize: 15,
        color: "#000",
        fontWeight: '500',
        marginVertical: 2
    },
    gendertext: {
        fontSize: 15,
        color: "#000",
        fontWeight: '500',
        marginTop: 15,
        marginHorizontal:31
    },
    genderBorder: {
        borderWidth: 1,
        marginHorizontal: 30,
        paddingVertical: 1,
        marginVertical: 4,
        borderRadius: 8
    },
    input: {
        borderWidth: 1,
        borderRadius: 8
    },
    drop: {
        borderWidth: 1

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
        color: '#000',
        marginVertical: 2
    },
    text2: {
        fontSize: 20,
        color: '#1F8CEB',
        marginHorizontal: 10,
    },
})