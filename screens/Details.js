import { Image, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';

import { FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, addToFavourites, removeFromFavourites } from '../store/redux/e_commerceSlice';
import { deleteFavouriteIDs, storeCartProduct, storeFavouriteIDs } from '../util/http';
import Colors from '../constants/Colors';
import AvailabilitySizesView from '../components/DetailsScreenComponents/AvailabilitySizesView';
import AllDetailSmallCardsDisplay from '../components/DetailsScreenComponents/AllDetailSmallCardsDisplay';
import AllColorsCircularCardDisplay from '../components/DetailsScreenComponents/AllColorsCircularCardDisplay';
import Button from '../components/DetailsScreenComponents/Button';
import HeaderRightIcon from '../components/NavigationTab/HeaderRightIcon';

export default function Details({ navigation, route }) {
  const { id, title, source, price, rating, count } = route.params;
  const [size, setSize] = useState('XS');
  const [color, setColor] = useState('#485F6A');

   // format the title if the length is longer than 25 characters
   const myTitle = title.slice(0, 24) + '...';

  // App wide state
  const favouriteProducts = useSelector((state) => state.e_commerce.favouriteProducts);
  const cartProducts = useSelector((state) => state.e_commerce.carts);
  const dispatch = useDispatch();

  const product = {
      productNumber: id,
      title: title, 
      source: source['uri'], 
      price: price, 
      rating, rating, 
      count: count,
      size: size,
      color: color
  };

  // store the product number to show it as a faourite
  const favouriteProductNumbers = [];

  for(let a = 0; a < favouriteProducts.length; a++){
    if(favouriteProducts[a].productNumber === product.productNumber){
      favouriteProductNumbers.push(product.productNumber); 
    }
  }

  // if any product number exists, then it is favourite
  const isFavourite = favouriteProductNumbers.includes(product.productNumber);
  console.log(isFavourite);

  const favoriteButtonHandler = (product) => {
    if(isFavourite){
      // remove from favoure
    }else{
      // add to favourite
    }
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRightIcon 
              // name={isFavourite? 'heart':'heart-o'}
              name='heart-o'
              onPress={() => favoriteButtonHandler(product)}
        />) 
    })
  }, [navigation]);

  // press handler for add to cart button
  const addToCartPressHandler = async() => {

    const cartItemObj = {
      productNumber: id,
      title: title, 
      source: source['uri'], 
      price: price, 
      rating, rating, 
      count: count,
      size: size,
      color: color
    };
    
    if(cartProducts.length <= 0){
       // adds the cartItemObj to the backend and get the id
        const id = await storeCartProduct(cartItemObj);
      // adds the cartITemObj to the REDUX state
        dispatch(addToCart([...cartProducts, {...cartItemObj, id: id}]));
        // navigate to the cart screen
        navigation.navigate('CartTab');
    }else{
      // check if the object to be added already exists
      for(let a = 0; a < cartProducts.length; a++){
        // if it exist, terminate
        if(cartItemObj.title == cartProducts[a].title){
          navigation.navigate('CartTab');
          return;
        }
      }
    
      // Since it dosen't exist
      // adds the cartItemObj to the backend and get the id
      const id = await storeCartProduct(cartItemObj);
      // adds the cartITemObj to the REDUX state
      dispatch(addToCart([...cartProducts, {...cartItemObj, id: id}]));
      navigation.navigate('CartTab');
    };
  };

  return (
    <ScrollView style={styles.container}> 
        <View style={styles.imageContainer}>
            <Image source={source} style={styles.image}/>
        </View>
        <View style={styles.allDetailSmallCardDisplayStyle}>
          <AllDetailSmallCardsDisplay source={source}/>
        </View>
        <View style={styles.namePriceView}>
            <Text style={styles.text}>{myTitle}</Text>
            <Text style={styles.text}> ${price} </Text>
        </View>
        <View style={styles.ratingView}>
            <FontAwesome name="star" size={16} color="#F0B620"/>
            <Text style={styles.ratingText}>{rating}</Text>
            <Text style={styles.countText}>({count})</Text>
        </View>
        <View style={styles.horizontalLine}>
          <Text style={styles.availableSizeText}>Available Size</Text>
          <AvailabilitySizesView size={size} setSize={setSize}/>
        </View>
        <View>
          <Text style={styles.colorText}>Colors</Text>
          <AllColorsCircularCardDisplay setColor={setColor}/>
        </View>
        <View style={styles.button}>
          <View style={styles.buttonStyle}>
            <Button title='Add to Cart' onPress={addToCartPressHandler}/>
          </View>
          <View style={styles.buttonStyle}>
            <Button title='Buy Now' mode='flat'/>
          </View>
        </View>
    </ScrollView>
  )
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    marginBottom: screenHeight < 712? 7 : 10
  },
  image: {
    width: screenHeight < 712? 110 : 140,
    height: screenHeight < 712? 120 : 150,
  },
  allDetailSmallCardDisplayStyle: {
    alignItems: 'center',
    marginBottom: screenHeight < 712? 7 : 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: screenHeight < 712? 15 : 17,
  },
  ratingText: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  countText: {
    fontWeight: 'bold',
    color: 'gray',
  },  
  namePriceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingView: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  horizontalLine: {
    borderTopWidth: 1,
    borderColor: Colors.miniGray,
    marginVertical: screenHeight < 712? 15 : 20,
  },
  availableSizeText: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'gray'
  },
  colorText: {
    marginVertical: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
  },
  buttonStyle: {
    flex: 1,
    marginRight: 10,
  }
})