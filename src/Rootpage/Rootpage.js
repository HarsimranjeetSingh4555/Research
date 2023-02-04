import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LangModal from '../LangModal/LangModal'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { translate } from '../AllLanguage/AllLanguage'

const Rootpage = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedLang, setSelectedLang] = useState(0)

  const saveSelectedLang = async (index) => {
    await AsyncStorage.setItem('Lang', index + "") /// '' iss da use iss krke kita kyuki string ch value mang reha c
     console.warn(Lang,"jjjjjj")
  }


  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 20, color: '#000' }}>

        {selectedLang == 0 ?
          translate[0].Punjabi
          : selectedLang == 1
            ? translate[0].Hindi
            : selectedLang == 2
              ? translate[0].English
              : selectedLang == 3
                ? translate[0].Deutsch
                : selectedLang == 3
                  ? translate[0].italiana
                  : null}
      </Text>

      <TouchableOpacity style={{ backgroundColor: 'red', marginHorizontal: 20, borderRadius: 20, marginVertical: 5 }}
        onPress={() => navigation.navigate('Page1')}
      >
        <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 20 }}> 
        {selectedLang == 0
            ? translate[2].Punjabi
            : selectedLang == 1
              ? translate[2].Hindi
              : selectedLang == 2
                ? translate[2].English
                : selectedLang == 3
                  ? translate[2].Deutsch
                  : selectedLang == 4
                    ? translate[2].italiana
                    : null}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ backgroundColor: 'red', marginHorizontal: 20, borderRadius: 20 }}
        onPress={() => navigation.navigate('Page2')}
      >
        <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 20 }}>
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
      </TouchableOpacity>

      <TouchableOpacity style={{ marginVertical: 50, marginHorizontal: 80, width: '40%', height: 30, alignSelf: 'center', backgroundColor: 'orange' }}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={{ textAlign: 'center', color: '#000', marginVertical: 3 }}>{/* Select Login Type */}
          {selectedLang == 0
            ? translate[3].Punjabi
            : selectedLang == 1
              ? translate[3].Hindi
              : selectedLang == 2
                ? translate[3].English
                : selectedLang == 3
                  ? translate[3].Deutsch
                  : selectedLang == 4
                    ? translate[3].italiana
                    : null}
        </Text>

      </TouchableOpacity>

      <LangModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onSelectLang={(x) => {
          setSelectedLang(x)
          saveSelectedLang(x)
        }}
      />

    </View>
  )
}

export default Rootpage

const styles = StyleSheet.create({})