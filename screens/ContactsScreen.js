import React, { useContext, useEffect } from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import styles from '../styles/app.style';
import contactsStyle from '../styles/contacts.style';
import filterStyle from '../styles/filter.style';

import ContactList from '../cmps/ContactList.js';
import ContactFilter from '../cmps/ContactFilter.js'

import { useObserver } from 'mobx-react';
import StoreContext from '../store';

export default function ContactsScreen({ navigation }) {
  const ContactStore = useContext(StoreContext).ContactStore;
  const key = navigation.getParam('key');

  useEffect(() => {
    ContactStore.loadContacts();
  }, [key]);


  function onAddContact() {
    navigation.navigate('ContactEdit', { id: '' })
  }

  return useObserver(() => {
    return (
      <ImageBackground style={styles.backgroundImage} 
      source={{uri: 'https://res.cloudinary.com/dtwqtpteb/image/upload/v1581361699/xvu06sg5j5rmntprmvhh.jpg'}}>
           <ContactFilter style={filterStyle.FilterContainer}></ContactFilter>
        <View style={styles.container}>
       
          <TouchableOpacity style={contactsStyle.addButton}
            onPress={onAddContact} title="AddContact">
            <Text style={contactsStyle.addButtonText}>  +  </Text>
          </TouchableOpacity>
          <View >
            <ContactList contacts={ContactStore.contacts} navigation={navigation} />
          </View>
        
        </View>
        </ImageBackground>
        )
      })
    }
