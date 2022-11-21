import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import AvailabilitySizeBox from './AvailabilitySizeBox';
import Colors from '../../constants/Colors';

export default function ({ size, setSize }) {
  
    let myXSStyle = styles.container;
    let mySStyle = styles.container;
    let myMStyle = styles.container;
    let myLStyle = styles.container;
    let myXLStyle = styles.container;
    let myXXLStyle = styles.container;

    if(size == 'XS'){
        myXSStyle = styles.pressed;
    }else if(size == 'S'){
        mySStyle = styles.pressed;
    }else if(size == 'M'){
        myMStyle = styles.pressed;
    }else if(size == 'L'){
        myLStyle = styles.pressed;
    }else if(size == 'XL'){
        myXLStyle = styles.pressed;
    }else{
        myXXLStyle = styles.pressed;
    };

  return (
    <View style={{flexDirection: 'row'}}>
      <AvailabilitySizeBox onPress={() => setSize('XS')} style={myXSStyle}>XS</AvailabilitySizeBox>
      <AvailabilitySizeBox onPress={() => setSize('S')} style={mySStyle}>S</AvailabilitySizeBox>
      <AvailabilitySizeBox onPress={() => setSize('M')} style={myMStyle}>M</AvailabilitySizeBox>
      <AvailabilitySizeBox onPress={() => setSize('L')} style={myLStyle}>L</AvailabilitySizeBox>
      <AvailabilitySizeBox onPress={() => setSize('XL')} style={myXLStyle}>XL</AvailabilitySizeBox>
      <AvailabilitySizeBox onPress={() => setSize('XXL')} style={myXXLStyle}>XXL</AvailabilitySizeBox>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        padding: 3,
        backgroundColor: 'white',
        marginRight: 10,
        borderWidth: 2,
        borderColor: Colors.lightGray,
        padding: 5,
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        width: '13%',
        alignItems: 'center',
    },
    pressed: {
        borderRadius: 4,
        padding: 3,
        backgroundColor: Colors.blue,
        marginRight: 10,
        borderWidth: 2,
        borderColor: Colors.blue,
        padding: 5,
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        width: '13%',
        alignItems: 'center',
    },
})