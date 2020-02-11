import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/app.style';
import ContactForm from '../cmps/ContactForm.js';
import StoreContext from '../store';

export default function ContactEditScreen({ navigation }) {

    const id = navigation.getParam('id');
    const ContactStore = useContext(StoreContext).ContactStore;
    const [contact, setContact] = useState(null);

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
    }, []);

    const editContact = async (editedContact) => {
        try {
            await ContactStore.editContact(editedContact);
            navigation.navigate('Contacts',
                { id: editedContact._id, key: Date.now() });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        contact && <ContactForm contact={contact} navigation={navigation}
            onSave={editContact} />
    )
}

ContactEditScreen.navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
        title: params.id ? 'Edit Contact' : 'Create New Contact',
    };
};