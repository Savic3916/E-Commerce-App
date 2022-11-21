import { StyleSheet, Dimensions, View, Pressable } from 'react-native'
import React from 'react'

export default function ColorsCircularCard({ color, style, onPress }) {
  // screen dimension
  const screenHeight = Dimensions.get('window').height;

  return (
    <Pressable onPress={onPress}>
      <View style={[{
              padding: 5,
              backgroundColor: color,
              borderRadius: screenHeight < 712? 30 : 35,
              width: screenHeight < 712? 30 : 35,
              height: screenHeight < 712? 30 : 35,
              marginRight: 15,
      }, style]}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({})