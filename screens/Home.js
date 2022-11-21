import { ScrollView, Dimensions, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

import { fetchCartProducts, fetchFavourites, fetchFlashSalesProducts, fetchWinterArrivalProducts } from '../util/http';
import { setCart } from '../store/redux/e_commerceSlice';
import { useSelector , useDispatch} from 'react-redux';
import Card from '../components/HomeScreenComponents/Card';
import TabHorizontalView from '../components/HomeScreenComponents/TabHorizontalView';
import ProductView from '../components/HomeScreenComponents/ProductView';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import Notifications from '../components/NavigationTab/Notifications';

export default function Home({ navigation }) {

  // APP WIDE STATE 
  const cartProducts = useSelector((state) => state.e_commerce.carts);
  const dispatch = useDispatch();

  const [flashSales, setFlashSales] = useState([]);
  const [winterArrivals, setWinterArrivals] = useState([])
  const [isFetching, setIsFetching] = useState(true);
  
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Notifications name='bell-o' onPress={() => console.log('Pressed!!')}/>
      ),
    })
  }, []);

  // fetch flashSales
  useEffect(() => {
    async function getFlashSalesProducts(){
        setIsFetching(true);
        const flashSalesResponse = await fetchFlashSalesProducts();
        setIsFetching(false);
        setFlashSales(flashSalesResponse);

      };
    getFlashSalesProducts();
  }, []);

  // fetch winterArrival
  useEffect(() => {
    async function getWinterArrivals(){
      setIsFetching(true);
      const response = await fetchWinterArrivalProducts();
      setIsFetching(false);
      setWinterArrivals(response);
    };
    getWinterArrivals();
  }, []);

  // fetch cartItems
  useEffect(() => {
    async function getCartItems(){ 
      const cartProducts = await fetchCartProducts();
      dispatch(setCart(cartProducts));
    }
    getCartItems();
  }, []);

  // fetch favourites IDs
  useEffect(() => {
    async function getFavourites(){
      const response = await fetchFavourites();
      console.log(response);
    };
    getFavourites();
  }, []);


  let content, secondContent;
  if(isFetching){
    content = <LoadingOverlay/>;
  }else{
    content = <ProductView productTitle='Flash Sales' productObject={flashSales}/>;
    secondContent = <ProductView productTitle='Winter Arrival' productObject={winterArrivals}/>
  };

  return (
      <ScrollView style={styles.container}>
          <Card/>
          <TabHorizontalView/>
          {content}
          {secondContent}
      </ScrollView>
  )
}
 
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: screenWidth < 361? 15: 20,
  },
})