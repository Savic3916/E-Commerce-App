import { StyleSheet, Dimensions, View } from 'react-native';
import React from 'react';

import DetailSmallCardDisplay from './DetailSmallCardDisplay';

export default function AllDetailSmallCardsDisplay({ source }) {
  return (
    <View style={styles.container}>
      <DetailSmallCardDisplay source={source}/>
      <DetailSmallCardDisplay source={source}/>
      <DetailSmallCardDisplay source={source}/>
      <DetailSmallCardDisplay source={source}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})