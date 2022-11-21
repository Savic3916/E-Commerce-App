import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React from 'react'

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='small' color='gray'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})