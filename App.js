import {  StyleSheet } from 'react-native'
import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Cart from './screens/Cart';
import User from './screens/User';
import Favourite from './screens/Favourite';
import Details from './screens/Details';
import TabIcon from './components/NavigationTab/TabIcon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack(){

  return(
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerTitleAlign: 'center', headerTitleStyle: {fontWeight: 'bold'}}}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Details' component={Details}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
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
          <Tab.Screen name='CartTab' component={Cart} options={{
                                                                headerTitle: 'Cart',
                                                                headerShown: true,
                                                                headerTitleAlign: 'center',
                                                                headerTitleStyle: {fontWeight: 'bold'},
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
          <Tab.Screen name='FavoriteTab' component={Favourite} options={{
                                                                headerTitle: 'Favourite',
                                                                headerShown: true,
                                                                headerTitleAlign: 'center',
                                                                headerTitleStyle: {fontWeight: 'bold'},
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
          <Tab.Screen name='UserTab' component={User} options={{
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
    </Provider>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'black',
  },
})