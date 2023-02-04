import { StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import LangModal from '../LangModal/LangModal'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { translate } from '../AllLanguage/AllLanguage'


const Page2 = ({navigation}) => {

   // Value get krna <====
  // state define krna <===
  const [selectedLang,setSelectedLang] =useState(0)

  useEffect(()=>{
    getLang();
  }, [])

  const getLang= async ()=>{
    setSelectedLang(await AsyncStorage.getItem('Lang'))
  }


  // Value get krna <====

  return (
    <View>
    <Text style={{fontSize:20,textAlign:'center',marginVertical:20}}>
    {selectedLang == 0
            ? translate[1].Punjabi
            : selectedLang == 1
              ? translate[1].Hindi
              : selectedLang == 2
                ? translate[1].English
                : selectedLang == 3
                  ? translate[1].Deutsch
                  : selectedLang == 4
                    ? translate[1].italiana
                    : null}
    </Text>

    <TextInput placeholder='Enter Email id' style={{borderWidth:1,marginVertical:20,marginHorizontal:20}}/>
    <TextInput placeholder='Enter Password' style={{borderWidth:1,marginVertical:10,marginHorizontal:20}}/>
    <TextInput placeholder='Enter Adress' style={{borderWidth:1,marginVertical:10,marginHorizontal:20}}/>

    <TouchableOpacity onPress={()=>navigation.navigate('HomePage')}>
      <Text style={{fontSize:20,textAlign:'center',marginVertical:20,backgroundColor:'orange',
      marginHorizontal:20,borderRadius:10,height:40,}}>
        {selectedLang == 0
            ? translate[4].Punjabi
            : selectedLang == 1
              ? translate[4].Hindi
              : selectedLang == 2
                ? translate[4].English
                : selectedLang == 3
                  ? translate[4].Deutsch
                  : selectedLang == 4
                    ? translate[4].italiana
                    : null}
      </Text>
    </TouchableOpacity>
  </View>
  )
}

export default Page2

const styles = StyleSheet.create({})