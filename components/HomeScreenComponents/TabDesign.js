import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';

export default function TabDesign({ tabTitle, onPress }) {
  return (
        <Pressable 
            onPress={onPress}
            style={({pressed}) => pressed? [styles.tab, styles.pressed]:styles.tab}>
            <Text style={styles.text}>{tabTitle}</Text>
        </Pressable>
  )
}

const styles = StyleSheet.create({
    tab: {
        borderRadius: 4,
        padding: 3,
        backgroundColor: 'white',
        marginRight: 10,
        borderWidth: 2,
        borderColor: Colors.lightGray,
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        marginBottom: 10
    },
    pressed: {
        opacity: 0.5,
    },
    text: {
        color: Colors.gray,
        fontWeight: 'bold',
    }
})