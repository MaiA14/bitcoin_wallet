import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../styles/app.style';
import formStyles from '../styles/form.style';

export default function ContactForm(props) {
    const [name, setContactName] = useState(props.contact.name);
    const [email, setContactEmail] = useState(props.contact.email);
    const [phone, setContactPhone] = useState(props.contact.phone);

    const onSave = () => {
        props.onSave({ ...props.contact, name: name, email: email, phone: phone });
    }

    const onBack = () => {
        props.navigation.navigate('Details');
    }

    return (

        <ImageBackground style={styles.backgroundImage}
            source={{ uri: 'https://res.cloudinary.com/dtwqtpteb/image/upload/v1581361699/xvu06sg5j5rmntprmvhh.jpg' }}>
            <View style={formStyles.formContainer}>
                <TextInput type="text" placeholder="Please Enter Full Name" name="name"
                    onChangeText={setContactName} style={formStyles.input} value={name} />
                <TextInput type="text" placeholder="Please Enter Email Address" name="email"
                    onChangeText={setContactEmail} style={formStyles.input} value={email} />
                <TextInput type="text" placeholder="Please Enter Phone Number" name="phone"
                    onChangeText={setContactPhone} style={formStyles.input} value={phone} />
                <TouchableOpacity style={styles.button} onPress={onSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.button} onPress={onBack}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity> */}
            </View>
        </ImageBackground>

    )
}