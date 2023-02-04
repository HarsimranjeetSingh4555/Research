// import { StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { Picker } from '@react-native-picker/picker';


// const Currancy = () => {

//     const fetchCurrrency = () => {
//         return fetch('https://api.frankfurter.app/latest')
//             .then(response => response.json())
//             .then(data => Object.keys(data.rates, 'hkhkhkuhku'))
//     }

//     useEffect(() => {
//         fetchCurrrency()
//             .then(list => setCurrencyList(list))
//     }, [])

//     const [currencylist, setCurrencyList] = useState([])
//     console.log(currencylist)
//     const [value, setValueChange] = useState('')
//     const [quali, setQuali] = useState("");
//     console.log(quali, 'quali')


//     return (
//         <View>



//             <Text>Currancy</Text>

//             <View style={styles.main}>

//                 <Text>Source Amount</Text>
//                 <TextInput
//                     placeholder='enter currency'
//                     style={styles.input}
//                 />
                
                
//                 <Text>Select Source Currency</Text>
//                 <View style={{borderWidth:1}}>
//                 <Picker
//                     selectedValue={currencylist}
//                     onValueChange={(itemValue) => setQuali(itemValue)}
//                 >
//                     <Picker.Item label="Qualification :" value="disable" style={{ color: "#000" }} />
//                     <Picker.Item label="10th" value="10th" style={{ color: "#000", }} />
//                     <Picker.Item label="+2" value="+2" style={{ color: "#000", }} />
//                     <Picker.Item label="Graduation" value="Graduation" style={{ color: "#000", }} />
//                     <Picker.Item label="Diploma" value="Diploma" style={{ color: "#000", }} />

//                 </Picker>
//                 </View>

//                 <Text>Target Amount</Text>
//                 <TextInput
//                     placeholder='enter currency'
//                     style={styles.input}
//                     disable
//                 />
//                 <Text>Select Target Currancy</Text>
//                 <TextInput
//                     placeholder='enter currency'
//                     style={styles.input}
//                 />

//             </View>
//         </View >
//     )
// }

// export default Currancy

// const styles = StyleSheet.create({
//     main: {
//         padding: 30
//     },
//     input: {
//         borderRadius: 5,
//         // borderWidth:2,
//         backgroundColor: 'lightgray',
//         // color:'#fff'
//     },
// })



import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  ActivityIndicator
} from 'react-native';
// import { fetchCurrencyLatest, convertCurrencyAPI } from './api';


const currencyCoverterEndPoint="https://api.frankfurter.app"

const fetchCurrrency = () => {
    return  fetch( `${currencyCoverterEndPoint}/latest`)
         .then(response => response.json())
         .then(data => Object.keys(data.rates, 'hkhkhkuhku'))
 }

 const convertCurrency =(amount,sourceCurrency,targetCurrency)=>{
   return fetch(`${currencyCoverterEndPoint}latest?amount=${amount}&from=${sourceCurrency}&to=${targetCurrency}`)
   .then(response =>response.json())
   
}



const App = () => {
  const [currencyList, setCurrencyList] = useState([]);
  const [open, setOpen] = useState(false);
  const [ targetOpen, setTargetOpen ] = useState(false);
  const [sourceAmount, setSourceAmount] = useState("0");
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetAmount, setTargetAmount] = useState("0");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
    fetchCurrrency()
      .then(list => setCurrencyList(list))
   
      convertCurrency(1,"USD", "INR")
      .then(data =>console.log(data))
   }, [])
    

//   const convertCurrency =()=>{}

 
//   const convertCurrency = (amount, sourceCurrency, targetCurrency) => {
//     setLoading(true);
//     convertCurrencyAPI(amount, sourceCurrency, targetCurrency)
//       .then(data => {
//         const { rates } = data;
//         setTargetAmount(String(rates[targetCurrency]));
//         setLoading(false);
//       })
//   }

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <View
          style={styles.mainContainer}
        >
            <View>
              <Text>Source Amount</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={value => setSourceAmount(value)}
                value={sourceAmount}
              />
              <Text>Select Source Currency</Text>
              <Picker
                style={styles.textInput}
                onChangeText={value => setSourceCurrency(value)}
                open={open}
                value={sourceCurrency}
                items={currencyList.map(currency => ({
                  label: currency,
                  value: currency,
                }))}
                setOpen={setOpen}
                setValue={setSourceCurrency}
              />
            </View>
            <View>
              <Text>Target Amount</Text>
              <TextInput
                style={styles.textInput}
                editable={false}
                value={targetAmount}
              />
              <Text>Select Target Currency</Text>
              <Picker
                style={styles.textInput}
                onChangeText={value => setTargetCurrency(value)}
                open={targetOpen}
                value={targetCurrency}
                items={currencyList.map(currency => ({
                  label: currency,
                  value: currency,
                }))}
                setOpen={setTargetOpen}
                setValue={setTargetCurrency}
              />
            </View>
            <View>
              {
                loading
                  ? <ActivityIndicator color="#000000" size="large" />
                  : <Button onPress={() => convertCurrency(sourceAmount, sourceCurrency, targetCurrency)} title="Convert"/>
              }
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    height: 700,
    backgroundColor: "#fff"
  },
  textInput: {
    marginBottom: 10,
    backgroundColor: "lightgrey",
    color: "red"
  }
});

export default App;