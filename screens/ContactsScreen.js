import React, { useContext, useEffect } from 'react';
import { View, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/app.style'
import ContactList from '../cmps/ContactList';
import { useObserver } from 'mobx-react';
import StoreContext from '../store';

export default function ContactsScreen({ navigation }) {
  
  const ContactStore = useContext(StoreContext).ContactStore;
  const key = navigation.getParam("key");

  useEffect(() => {
    ContactStore.loadContacts();
  }, [key]);


  function onAddContact() {
    navigation.navigate('ContactEdit', { id: '' })
  }

  return useObserver(() => {
    return (
      ContactStore.contacts && <View>
        <TouchableOpacity style={styles.buttons}
          onPress={onAddContact} title="AddContact">
          <Text style={styles.btnText}>Add Contact</Text>
        </TouchableOpacity>
        <View >
          <ContactList contacts={ContactStore.contacts} navigation={navigation} />
        </View>
      </View>
    )
  })
}
