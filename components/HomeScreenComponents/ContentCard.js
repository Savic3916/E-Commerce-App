import { Image, Pressable, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/Colors';

export default function ContentCard({ id, source, title, price, rating, count }) {

// react navigation
const navigation = useNavigation();

// format the title gotten from the Product View screen
const myTitle = title.slice(0, 16) + '...';

  return (
    <View>
        <Pressable 
                style={({pressed}) => pressed? [styles.contentCard, styles.pressed]: styles.contentCard}
                onPress={() => navigation.navigate('Details', {
                                                                id: id,
                                                                source: source, 
                                                                title: title, 
                                                                price: price, 
                                                                rating: rating,
                                                                count: count,
                                                              }
                                                    )}
        >
        <Image source={source} style={styles.image}/>
        </Pressable>
        <View>
            <Text style={styles.title}> {myTitle} </Text>
            <View style={styles.priceTagView}>
                <Text style={styles.price}> ${price} </Text>
                <Text style={styles.rating}> | </Text>
                <FontAwesome name="star" size={16} color="#F0B620"/>
                <Text style={styles.rating}> {rating} </Text>
            </View>
        </View>
    </View>
  )
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    contentCard: {
        padding: screenHeight < 712? 5 : 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: Colors.gray, 
        borderRadius: 5,
        marginRight: 10,
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.5,
    },
    image: {
        width:  screenHeight < 712? 90:110,
        height:  screenHeight < 712? 80:100,
    },
    priceTagView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontWeight: '500',
    },
    price: {
        fontWeight: 'bold',
    },
    rating: {
        color: Colors.gray
    }
})