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


// function EditScreen({ navigation }) {
//     let id = navigation.getParam("id");
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');

//     async function onSaveContact() {
//         await contactService.saveContact({ _id: id, name, phone, email });
//         navigation.navigate('Home', { key: new Date() })
//     }
//     async function loadContact() {
//         const contact = await contactService.getContactById(id)
//         if (contact.name === undefined) {
//             setName(contact.name)
//             setPhone(contact.phone)
//             setEmail(contact.email)
//         }
//     }

//     useEffect(() => {
//         loadContact()
//     }, [id])

//     return <View>
//         <View>
//             <TextInput
//                 placeholderTextColor="#444" placeholder="Name"
//                 value={name} onChangeText={setName} />
//             <TextInput
//                 placeholderTextColor="#444"
//                 placeholder="Phone"
//                 value={phone} onChangeText={setPhone}
//                 multiline={true}
//                 numberOfLines={4} />
//             <TextInput
//                 placeholderTextColor="#444"
//                 placeholder="Email"
//                 value={email} onChangeText={setEmail}
//                 multiline={true}
//                 numberOfLines={4} />
//             <TouchableOpacity style={styles.buttons} onPress={onSaveContact} title="Save">
//                 <Text style={styles.btnText}>Save</Text>
//             </TouchableOpacity>

//         </View>
//     </View>
// }

// EditScreen.navigationOptions = ({ navigation, navigationOptions }) => {
//     const { params } = navigation.state;
//     return {
//         title: (params !== undefined && params.id) ? 'Edit contact' : 'New contact'
//     };
// };

// export default EditScreen