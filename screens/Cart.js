import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

export default function Cart({ navigation }) {

  // REDUX STATE
  const cartProducts = useSelector((state) => state.e_commerce.carts);
  console.log(cartProducts);
  
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable style={{paddingLeft: 15}} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />      
        </Pressable>
      ),
    });
  }, [navigation]);
  
  return (
    <View style={styles.container}>
      <Text> hy </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})