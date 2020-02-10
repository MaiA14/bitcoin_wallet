import React from 'react'
import { FlatList, View } from 'react-native';
import ContactPreview from './ContactPreview';
import contactsStyle from '../styles/contacts.style'
import styles from '../styles/app.style'

export default function ({ contacts, navigation }) {
  return (<View style={contactsStyle.container}>
      <FlatList 
        keyExtractor={(item, index) => index.toString()} data={contacts}
        renderItem={({ item }) =>
          <ContactPreview  item={item} navigation={navigation} />}
      /></View>)
}