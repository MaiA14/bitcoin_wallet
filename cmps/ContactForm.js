import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/app.style';

export default function ContactForm(props) {
    const [name, setContactName] = useState(props.contact.name);
    const [email, setContactEmail] = useState(props.contact.email);
    const [phone, setContactPhone] = useState(props.contact.phone);

    const onSave = () => {
        props.onSave({ ...props.contact, name: name, email: email, phone: phone });
    }

    const onBack = () => {
        props.navigation.navigate('ContactScreen');
    }

    return (
        <View>
            <TextInput type="text" placeholder="Please Enter Full Name" name="name"
                onChangeText={setContactName} style={styles.editInput} value={name} />
            <TextInput type="text" placeholder="Please Enter Email Address" name="email"
                onChangeText={setContactEmail} style={styles.editInput} value={email} />
            <TextInput type="text" placeholder="Please Enter Phone Number" name="phone"
                onChangeText={setContactPhone} style={styles.editInput} value={phone} />
            <TouchableOpacity style={styles.buttons} onPress={onSave}>
                <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={onBack}>
                <Text style={styles.btnText}>back to contacts</Text>
            </TouchableOpacity>
        </View>
    )
}