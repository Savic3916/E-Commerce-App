import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

export default function AvailabilitySizeBox({ children, onPress, style }) {
  return (
    <Pressable 
            style={style}
            onPress={onPress}        
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        fontWeight: 'bold'
    }
})