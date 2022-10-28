import { Text, StyleSheet, View, Image } from 'react-native'
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Cart from './screens/Cart';
import User from './screens/User';
import Favourite from './screens/Favourite';
import Details from './screens/Details';
import TabIcon from './components/NavigationTab/TabIcon';
import HeaderRightIcon from './components/NavigationTab/HeaderRightIcon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack(){
  return(
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerTitleAlign: 'center', headerTitleStyle: {fontWeight: 'bold'}}}>
      <Stack.Screen name='Home' component={Home} options={{headerRight: () => (
                                                              <HeaderRightIcon name='bell-o'/>
    )}}/>
      <Stack.Screen name='Details' component={Details} options={{headerRight: () => (
                                                              <HeaderRightIcon name='heart-o'/>
    )}}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: styles.tabBarStyle}}>
          <Tab.Screen name='HomeTab' component={HomeStack} options={{
                                                                title: '',
                                                                tabBarIcon: ({focused}) => (
                                                                  <TabIcon
                                                                    focused={focused}
                                                                    text='Home'
                                                                    source1={require('./assets/icons/home.png')}
                                                                    source2={require('./assets/icons/home1.png')}
                                                                  />
                                                                )
          }}/>
          <Tab.Screen name='CartCard' component={Cart} options={{
                                                                title: '',
                                                                tabBarIcon: ({focused}) => (
                                                                  <TabIcon
                                                                    focused={focused}
                                                                    text='Cart'
                                                                    source1={require('./assets/icons/shoppingcart.png')}
                                                                    source2={require('./assets/icons/shoppingcart1.png')}
                                                                  />
                                                                )
          }}/>
          <Tab.Screen name='Favorite' component={Favourite} options={{
                                                                title: '',
                                                                tabBarIcon: ({focused}) => (
                                                                  <TabIcon
                                                                    focused={focused}
                                                                    text='Favourite'
                                                                    source1={require('./assets/icons/heart.png')}
                                                                    source2={require('./assets/icons/heart1.png')}
                                                                  />
                                                                )
          }}/>
          <Tab.Screen name='User' component={User} options={{
                                                        title: '',
                                                        tabBarIcon: ({focused}) => (
                                                          <TabIcon
                                                            focused={focused}
                                                            text='User'
                                                            source1={require('./assets/icons/user.png')}
                                                            source2={require('./assets/icons/user1.png')}
                                                          />
                                                        )
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'black',
  },
})