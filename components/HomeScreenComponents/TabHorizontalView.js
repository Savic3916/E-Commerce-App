import { StyleSheet, ScrollView, Modal } from 'react-native';
import React, { useState } from 'react';

import TabDesign from './TabDesign';
import Jacket from './Tabs.js/Jacket';
import Shoes from './Tabs.js/Shoes';
import Pants from './Tabs.js/Pants';
import T_Shirts from './Tabs.js/T-Shirts';
import Socks from './Tabs.js/Socks';
import Suits from './Tabs.js/Suits';

export default function TabHorizontalView() {

  const [tab, setTab] = useState('jackets');
  const [visible, setVisible] = useState(false)

  let content = <Jacket/>

  if(tab == 'jackets'){
    content = <Jacket/>
  }else if(tab == 'shoes'){
    content = <Shoes/>
  }else if(tab == 'pants'){
    content = <Pants/>
  }else if(tab == 'tShirt'){
    content = <T_Shirts/>
  }else if(tab == 'socks'){
    content = <Socks/>
  }else{
    content = <Suits/>
  };

  const jacketPressHandler = () => {
    setTab('jackets');
    setVisible(true);
  };
  const shoesPressHandler = () => {
    setTab('shoes');
    setVisible(true);
  };
  const pantsPressHandler = () => {
    setTab('pants');
    setVisible(true);
  };
  const tShirtPressHandler = () => {
    setTab('tShirt');
    setVisible(true);
  };
  const socksPressHandler = () => {
    setTab('suits');
    setVisible(true);
  };
  const suitsPressHandler = () => {
    setTab('suits');
    setVisible(true);
  };

  return (
    <ScrollView style={styles.tabContainer} horizontal>
        <TabDesign tabTitle='Jackets' onPress={jacketPressHandler}/>
        <TabDesign tabTitle='Shoes' onPress={shoesPressHandler}/>
        <TabDesign tabTitle='Pants' onPress={pantsPressHandler}/>
        <TabDesign tabTitle='T-Shirts' onPress={tShirtPressHandler}/>
        <TabDesign tabTitle='Socks' onPress={socksPressHandler}/>
        <TabDesign tabTitle='Suits' onPress={suitsPressHandler}/>
        <Modal visible={visible} animationType='slide'>
            {content}
        </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    }
})