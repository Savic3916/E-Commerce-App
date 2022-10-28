import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function TabIcon({ text, focused, source1, source2 }) {
  return (
    <View style={styles.container}>
      <Image source={focused? source1:source2} style={styles.image}/>
      <Text style={styles.text}> {text} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        width: 100,
    },
    text: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    },
    image: {
        width: 20,
        height: 20,
        tintColor: 'white',
    }
})