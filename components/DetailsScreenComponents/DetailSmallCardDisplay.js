import { StyleSheet, Image, View, Dimensions} from 'react-native'
import React from 'react'

export default function DetailSmallCardDisplay({ source, }) {
  return (
    <View style={styles.container}>
        <Image source={source} style={styles.image}/>
    </View>
  )
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        marginRight: screenHeight < 712? 10 : 5,
    },
    image: {
        height: screenHeight < 712? 49 : 53,
        width: screenHeight < 712? 49 : 53,
    }
})