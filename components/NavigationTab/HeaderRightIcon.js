import { Pressable, StyleSheet } from 'react-native';
import React from 'react';

import { FontAwesome } from '@expo/vector-icons'; 

export default function HeaderRightIcon({ name }) {
  return (
    <Pressable 
        onPress={() => console.log('Pressed')}
        style={({pressed}) => pressed? [styles.container, styles.pressed] : styles.container}>
      <FontAwesome name={name} size={18} color="black" />
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
    },
    pressed: {
        opacity: 0.3,
    }
})