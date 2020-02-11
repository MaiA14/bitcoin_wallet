import React, { useContext, useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import contactStyle from '../styles/contact.style';
import styles from '../styles/app.style';
import StoreContext from '../store';

export default function ContactScreen({ navigation }) {
  let id = navigation.getParam('id');
  const key = navigation.getParam('key');
  const ContactStore = useContext(StoreContext).ContactStore;
  const [contact, setContact] = useState('');

  const loadContact = async () => {
    try {
      const contact = await ContactStore.getContactById(id);
      setContact(contact);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadContact();
  }, [id, key])

  const onDelete = async () => {
    await ContactStore.deleteContact(id);
    navigation.navigate('Contacts');
  }

  const onEditContact = () => {
    navigation.navigate('ContactEdit', { id: id })
  }

  // const onBack = () => {
  //   navigation.navigate('Contacts');
  // }

  return (
    <ImageBackground style={styles.backgroundImage} 
    source={{uri: 'https://res.cloudinary.com/dtwqtpteb/image/upload/v1581361699/xvu06sg5j5rmntprmvhh.jpg'}}>
    <View style={contactStyle.detailsContainer}>
      <Image
        style={{ width: 100, height: 100, margin: 10 }}
        source={{ uri: `https://i.imgur.com/ScW5VJl.png` }}></Image>
      <Text style={contactStyle.contactHeader}>{contact.name}</Text>
      <Text style={contactStyle.contentText}> {contact.phone}</Text>
      <Text style={contactStyle.contentText}> {contact.email}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={contactStyle.button} onPress={onEditContact}>
          <Text style={contactStyle.buttonText}>Edit details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={contactStyle.button} onPress={onDelete}>
          <Text style={contactStyle.buttonText}>Delete contact</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={contactStyle.button} onPress={onBack}>
          <Text  style={contactStyle.buttonText}>Back</Text>
        </TouchableOpacity> */}
      </View>
      </View>
      </ImageBackground>
  )
}