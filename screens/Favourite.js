import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

export default function Favourite() {

  // App Wide State
  const favouritesIDs = useSelector((state) => state.e_commerce.favouriteIDs)
  console.log(favouritesIDs);

  return (
    <View style={styles.container}>
      <Text>Favourite</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  }
})