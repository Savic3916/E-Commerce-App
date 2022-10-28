import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors'
import Button from './Button';

export default function Card() {
  return (
        <View style={styles.discountCard}>
            <View style={styles.innerDiscountContainer}>  
                <Text style={styles.discountText}> Discount of </Text>
                <Text style={styles.discountText}> up to 20% </Text>
                <Button title='GRAB IT NOW!' style={styles.button} textStyle={styles.buttonText}/>
            </View>
            <View style={styles.imageView}>
                <Image source={require('../../assets/image/woman.png')} style={styles.image}/>
            </View>
        </View>
  )
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    discountCard: {
        marginTop: screenHeight < 712? '6%':'10%',
        backgroundColor: 'black',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 10,
        elevation: 3,
    },
    innerDiscountContainer: {
       padding: 20,
    },
    discountText: {
        fontSize: screenHeight < 712? 20:23,
        fontWeight: 'bold',
        color: 'white',
    },
    button: {
        width: screenHeight < 712? 100:120,
        marginTop: 10,
        backgroundColor: Colors.blue,
        alignItems: 'center',
        paddingHorizontal: 3,
        paddingVertical: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: screenHeight < 712? 10:12,
    },
    imageView: {
       width: screenHeight < 712? 180:200,
       height: screenHeight < 712? 180:200,
       position: 'absolute',
       bottom: screenHeight < 712? -30:0,
       right: screenHeight < 712? -20:-30,
    },
    image: {
        width: screenHeight < 712? 120: 150,
        height: screenHeight < 712? 150 : 200

    }
})