import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from '../styles/app.style'
import loadingImg from '../assets/loading.png'

export default function App() {
    return (
      <View style={styles.container} >
            <ImageBackground style={styles.backgroundImage} source={loadingImg} />
      </View>
    )
}
