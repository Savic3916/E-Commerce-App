import { ScrollView, Dimensions, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

import { fetchFlashSalesProducts, fetchWinterArrivalProducts } from '../util/http';
import Card from '../components/HomeScreenComponents/Card';
import TabHorizontalView from '../components/HomeScreenComponents/TabHorizontalView';
import ProductView from '../components/HomeScreenComponents/ProductView';
import LoadingOverlay from '../components/UI/LoadingOverlay';

export default function Home() {

  const [flashSales, setFlashSales] = useState([]);
  const [winterArrivals, setWinterArrivals] = useState([])
  const [isFetching, setIsFetching] = useState(true);

  // fetch flashSales
  useEffect(() => {
    async function getFlashSalesProducts(){
        setIsFetching(true);
        const response = await fetchFlashSalesProducts();
        setIsFetching(false);
        setFlashSales(response);
    };
    getFlashSalesProducts();
  }, []);

  // fetch winterArrival
  useEffect(() => {
    async function getWinterArrivals(){
      setIsFetching(true);
      const response = await fetchWinterArrivalProducts();
      setIsFetching(false);
      setWinterArrivals(response)
    };
    getWinterArrivals();
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
    padding: screenWidth < 361? 15: 20,
  },
})