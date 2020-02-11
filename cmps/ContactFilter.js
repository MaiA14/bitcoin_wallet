import React, { useContext, useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';

import StoreContext from '../store'

export default function ContactFilter() {
    const ContactStore = useContext(StoreContext).ContactStore;
    const [term, setTerm] = useState('');

    useEffect(() => {
        ContactStore.setFilter({term: term});
    }, [term]);

    return (
        <View>
            <TextInput placeholder='Search...' placeholderTextColor = "white"
            style={{color: 'white', fontSize: 20, marginTop: 20}}
                value={term}
                onChangeText={setTerm} />
        </View>
    )
}
