import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button({ title, style, textStyle }) {
  return (
    <Pressable 
        style={({pressed}) => pressed? [style, styles.pressed]: style}
        onPress={() => console.log('Pressed!!')}
        >
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
    }
})