import React, { useContext, useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from '../styles/app.style';
import StoreContext from '../store';

export default function ContactScreen({ navigation }) {
  let id = navigation.getParam("id");
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

  const onBack = () => {
    navigation.navigate('Contacts');
  }

  return (
    <View>
      <Image
        style={{ width: 100, height: 100, margin: 10 }}
        source={{ uri: `https://robohash.org/${contact._id}` }}></Image>
      <Text style={styles.btnText}>name: {contact.name}</Text>
      <Text style={styles.btnText}>email: {contact.email}</Text>
      <Text style={styles.btnText}>phone: {contact.phone}</Text>
      <TouchableOpacity style={styles.buttons} onPress={onEditContact}>
        <Text style={styles.btnText}>edit details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={onDelete}>
        <Text style={styles.btnText}>delete contact</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={onBack}>
        <Text style={styles.btnText}>back</Text>
      </TouchableOpacity>
    </View>)
}