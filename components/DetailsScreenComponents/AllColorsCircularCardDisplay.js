import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import ColorsCircularCard from './ColorsCircularCard';

export default function AllColorsCircularCardDisplay({ setColor }) {

  const [position, setPosition] = useState('first');
  
  function firstPositionHandler(){
    setPosition('first');
    setColor('#485F6A')
  };
  function secondPositionHandler(){
    setPosition('second');
    setColor('#683222')
  };
  function thirdPositionHandler(){
    setPosition('third');
    setColor('#0D3E44');
  };
  function fourthPositionHandler(){
    setPosition('fourth');
    setColor('#764D68');
  };

  let firstStyle, secondStyle, thirdStyle, fourthStyle;

  if(position === 'first'){
    firstStyle = styles.addBorder;
  }else if(position === 'second'){
    secondStyle = styles.addBorder;
  }else if(position === 'third'){
    thirdStyle = styles.addBorder;
  }else{
    fourthStyle = styles.addBorder;
  };


  return (
    <View style={styles.container}>
      <ColorsCircularCard color='#485F6A' style={firstStyle} onPress={firstPositionHandler}/>
      <ColorsCircularCard color='#683222' style={secondStyle} onPress={secondPositionHandler}/>
      <ColorsCircularCard color='#0D3E44'  style={thirdStyle} onPress={thirdPositionHandler}/>
      <ColorsCircularCard color='#764D68'  style={fourthStyle} onPress={fourthPositionHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    addBorder: {
      borderWidth: 3,
      borderColor: "#F0B620",
    }
})