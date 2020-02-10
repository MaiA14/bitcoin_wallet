import React from 'react'
import { Text, View, Image, TouchableOpacity, Button, Alert } from 'react-native';
import contactStyles from '../styles/contact.style'

export default function ({ item, navigation }) {
    function onContactPress() {
        navigation.navigate('ContactDetails', { id: item._id })
    }

    return (
        <TouchableOpacity onPress={onContactPress} style={contactStyles.container} >
            <Text>
                {item.name}
            </Text>
            <Image
                style={{ width: 100, height: 100, margin: 10 }}
                source={{ uri: `https://robohash.org/${item._id}` }}></Image>
        </TouchableOpacity>)
}