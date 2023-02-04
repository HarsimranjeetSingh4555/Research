import { StyleSheet, Text, View, Modal, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const { height, width } = Dimensions.get('window');

const LangModal = ({ modalVisible, setModalVisible, onSelectLang }) => {



    const [selectlang, setSelectLang] = useState(0)
    const [languages, setLanguages] = useState([
        { name: 'ਪੰਜਾਬੀ', selected: false },
        { name: 'हिंदी', selected: false },
        { name: 'English', selected: true },
        { name: 'Deutsch', selected: false },
        { name: 'italiana', selected: false },
    ])

    console.log(languages)
    console.log(selectlang)

    // Select wala Logic start<=====//

    const onSelect = (index) => {
        const temp = languages;
        temp.map((item, ind) => {
            if (index == ind) {

                if (item.selected == true) {
                    item.selected = false;
                } else {
                    item.selected = true
                    setSelectLang(index)
                }
            } else {
                item.selected = false
            }
        });
        let temp2 = [];
        temp.map(item => {
            temp2.push(item)
        });
        setLanguages(temp2)
    }

    // Select wala Logic end <=====//

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible)
            }}
        >
            <View style={styles.centerView}>

                <View style={styles.modalView}>
                    <Text >Select Language</Text>

                    <View style={{ width: '100%' }}>
                        <FlatList
                            data={languages} renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity style={[styles.languageItem, { borderColor: item.selected == true ? 'blue' : 'black' }]}
                                        onPress={() => onSelect(index)}
                                    >
                                        {item.selected == true ?
                                            (
                                                <Image source={require('../assets/b2.png')} style={[styles.icon, { tintColor: 'blue' }]} />
                                            ) :
                                            (
                                                <Image source={require('../assets/b1.png')} style={styles.icon} />
                                            )

                                        }

                                        <Text style={{ marginHorizontal: 20, fontSize: 18, color: item.selected == true ? "blue" : 'black' }}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 30 }}>

                        <TouchableOpacity style={styles.cancle} onPress={() => {
                            setModalVisible(false)

                        }}>

                            <Text style={{ textAlign: 'center', marginVertical: 5 }}>Cancel</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.apply}
                            onPress={() => {
                                setModalVisible(false)
                                onSelectLang(selectlang)
                            }}
                        >
                            <Text style={{ textAlign: 'center', marginVertical: 5 }}>Apply</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>

        </Modal>
    )
}

export default LangModal

const styles = StyleSheet.create({
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    modalView: {
        width: width - 20,
        height: height * 0.6,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    title: {
        fontSize: 18,
        fontWeight: 600,

    },
    languageItem: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
        marginTop: 10,
        paddingTop: 10,
        paddingLeft: 10,
        flexDirection: 'row',

    },
    icon: {
        width: 24,
        height: 24
    },
    cancle: {
        backgroundColor: 'lightgray',
        width: '30%',
        marginHorizontal: 10,
        height: 30
    },
    apply: {

        width: '30%',
        backgroundColor: 'lightblue'
    },
})