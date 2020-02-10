import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from '../styles/app.style'

export default function HomeScreen({ navigation }) {

  function enterApp() {
    navigation.navigate('Contacts')
  }

  return (<View style={styles.container} >
    <View>
      <Image
        style={{ width: 130, height: 150, alignItems: 'center' }}
        source={{ uri: 'https://res.cloudinary.com/dtwqtpteb/image/upload/v1581115793/pj0qhzilabafipdlb1lv.png' }}
      />
      <Text style={styles.logoText}>
        Welcome to MisterBitcoin
          </Text>
      <TouchableOpacity style={styles.buttons} onPress={enterApp} title="Enter">
        <Text style={styles.btnText}>Enter</Text>
      </TouchableOpacity>
    </View>
  </View>)
}