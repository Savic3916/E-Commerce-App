import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';

export default function Button({ title, mode, onPress }) {
  return (
    <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPress}>
      <View style={[styles.button, mode === 'flat' && styles.flatButton]}>
        <Text style={[styles.text, mode == 'flat' && styles.flatText]}>{title}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 7,
        alignItems: 'center',
        padding: 10,
    },
    flatButton: {
        backgroundColor: Colors.lightBlack,
    },
    pressed: {
        opacity: 0.5,
    },
    text: {
        fontWeight: 'bold',
    },
    flatText: {
        color: 'white'
    },
})