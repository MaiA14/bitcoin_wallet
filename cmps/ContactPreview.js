import React from 'react'
import { Text, View, Image, TouchableOpacity, Button, Alert } from 'react-native';
import contactStyles from '../styles/contact.style'

export default function ({ item, navigation }) {
    function onContactPress() {
        navigation.navigate('Details', { id: item._id })
    }

    return (
        <TouchableOpacity onPress={onContactPress} >
            <View style={{flexDirection:"row"}}>
            <Image
                style={{ width: 100, height: 100, margin: 10 }}
                source={{ uri: `https://i.imgur.com/ScW5VJl.png` }}></Image>
                <View style={{justifyContent: 'center'}}>
            <Text style={{color: 'white'}}>
                {item.name}
            </Text>
            <Text style={{color: 'white'}}>
                {item.phone}
            </Text>
            </View>
           
           
                 </View>
        </TouchableOpacity>)
}