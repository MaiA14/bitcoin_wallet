import React from 'react'
import { FlatList, View } from 'react-native';
import ContactPreview from './ContactPreview';
import contactsStyle from '../styles/contacts.style'

export default function ({ contacts, navigation }) {
  return (
      <FlatList style={contactsStyle.list}
        keyExtractor={(item, index) => index.toString()} data={contacts}
        renderItem={({ item }) =>
          <ContactPreview  item={item} navigation={navigation} />}
      />)
}