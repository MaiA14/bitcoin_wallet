import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/app.style';
import StoreContext from '../store';

export default function SignupScreen({ navigation }) {
  const UserStore = useContext(StoreContext).UserStore;
  const [userName, setUserName] = useState('');

  return (
      <View>
          <TextInput type="text" placeholder="Please Enter Full Name" name="name"
              onChangeText={setUserName} value={name} />
          <TouchableOpacity style={styles.buttons} onPress={onSave}>
              <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
      </View>
  )
}