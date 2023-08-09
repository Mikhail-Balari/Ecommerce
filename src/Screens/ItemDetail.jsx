import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import allProducts from '../Data/products.json'
import { useState } from 'react';
import { Button } from 'react-native-web';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../Features/Cart/cartSlice';
const ItemDetail = ({
  navigation,
  route
}) => {

  const {productId: idSelected} = route.params

  const dispatch = useDispatch()

  const [product, setProduct] = useState(null);
  const [orientation, setOrientation] = useState("portrait")
  const {width, height} = useWindowDimensions()

  useEffect(() => {
    if (width > height) setOrientation("landscape")
    else setOrientation("portrait")
  }, [width, height])

  useEffect(() => {
    const productSelected = allProducts.find(product => product.id === idSelected)
    setProduct(productSelected)
  }, [idSelected])

  const onAddCart = () => {
    dispatch(addCartItem({...product, quantity: 1}))
  }

  return (
    <View>
      {product ? (
        <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape }>
          <Image 
            source={{uri: product.images[0]}} 
            style={styles.images}
            resizeMode='cover'
          />
          <View style={styles.textContainer}>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>${product.price}</Text>
            <Button 
              title='Agregar' 
              onPress={onAddCart}>
            </Button>
          </View>
        </View> 
      ) : null}
      
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10
  },
  mainContainerLandscape: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10
  },
  images: {
    width: 300,
    height: 500,
  },
  textContainer: {
    flexDirection: 'column'
  }
})