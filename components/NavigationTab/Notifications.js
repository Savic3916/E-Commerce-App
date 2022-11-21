import { Pressable, StyleSheet, View, Text } from 'react-native';
import React from 'react';

import { FontAwesome } from '@expo/vector-icons'; 

export default function HeaderRightIcon({ name, onPress }) {
  return (
    <Pressable 
        onPress={onPress}
        style={({pressed}) => pressed? [styles.container, styles.pressed] : styles.container}>
      <FontAwesome name={name} size={20} color="black" />
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>4</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
    },
    pressed: {
        opacity: 0.3,
    },
    notificationContainer: {
        height: 20,
        width: 20,
        backgroundColor: 'black',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -10,
        left: 7,
    },
    notificationText: {
        color: 'white', 
        fontSize: 12,
        fontWeight: 'bold'
    }
})