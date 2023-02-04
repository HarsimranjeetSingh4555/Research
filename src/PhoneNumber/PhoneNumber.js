import { StyleSheet, Text, View,TextInput,ScrollView,Image,TouchableOpacity,Dimensions } from 'react-native'
import React,{useState} from 'react'
import PhoneInput from 'react-native-phone-number-input'

const PhoneNumber = ({navigation}) => {

  const [number, setNumber] = useState("");
  // const onSignInPressed = () => {

  //   navigation.navigate('Password')

  // }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View>
                    <View style={styles.main}>
                        <View>
                            <Image source={require('../PhoneNumber/assets/logo.png')} style={styles.logo} />
                        </View>
                        <View>
                            <Text style={styles.wel}>WELCOME</Text>
                        </View>
                        <View>
                            <Text style={styles.text}>We will send an SMS message to{'\n'}verify your phone number</Text>
                        </View>
                    </View>

                    <View style={styles.PhoneInput}>
                        <PhoneInput
                            defaultValue={number}
                            defaultCode='IN'
                            containerStyle={{
                                height: 60,
                                borderRadius: 10,
                                borderWidth: 1

                            }}
                            textContainerStyle={{
                                paddingTop: 0,
                                fontWeight: '600',
                                height: 58,
                                paddingBottom: -10,
                                borderRadius: 10
                            }}
                            onChangeFormattedText={(text) => {
                                setNumber(text)
                            }}

                        />

                    </View>
                    <View style={styles.SMS}>
                        <Text style={styles.smstext}> Carrier SMS charges may apply</Text>
                    </View>

                    {/* <TouchableOpacity onPress={onSignInPressed} style={styles.Btn}> */}
                    <TouchableOpacity onPress={()=>navigation.navigate('Password')} style={styles.Btn}>
                        <Text style={styles.btn}>Submit</Text>
                    </TouchableOpacity>

                </View>
            

            </ScrollView>
  )
}

export default PhoneNumber

const styles = StyleSheet.create({
  main: {
    marginVertical: 40
},
logo: {
    // width: Dimensions.get('window').width * 0.8,
    width: Dimensions.get('window').width / 1.3,
    // width: "70%",
    height: 100,
    alignSelf: 'center',
    marginTop: '12%',
    resizeMode: 'contain'
},
wel: {
    marginVertical: 30,
    textAlign: 'center',
    fontSize: 25,
    color: '#000000',
    fontWeight: '600'
},
text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000000',
    fontWeight: '600'
},
PhoneInput: {
    marginTop: '10%',
    // marginHorizontal: 35,
    alignSelf: 'center',

},
SMS: {
    alignSelf: "center",
    marginTop: 20
},
smstext: {
    color: '#7F8184',
    fontWeight: '500',
    fontSize: 20,
},

Btn: {
    alignItems: 'center',
    marginVertical: 40
},
btn: {
    backgroundColor: '#D1070A',
    paddingHorizontal: 90,
    paddingVertical: 15,
    color: '#FFFFFF',
    fontSize: 25,
    borderRadius: 15,
    fontWeight: "600"
},

})