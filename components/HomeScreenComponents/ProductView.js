import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import React from 'react';

import ContentCard from './ContentCard'
 
export default function ProductView({ productTitle, productObject }) {
  return (
    <View style={styles.container}>
      <Text style={styles.productTitle}> {productTitle} </Text>
      <ScrollView horizontal>
        {productObject.map((value) => {
            return <ContentCard 
                            key={value.id} 
                            source={{uri: value.image}} 
                            price={value.price} 
                            title={value.title.slice(0, 16)}
                            rating={value.rating.rate}
                    />
        })}
      </ScrollView>
    </View>
  )
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
   productTitle: {
        fontWeight: 'bold',
        fontSize: screenHeight < 712? 16 : 18,
  },
})