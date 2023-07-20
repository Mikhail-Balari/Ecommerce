import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import allProducts from '../Data/products.json'
import { useState } from 'react';
import { Button } from 'react-native-web';

const ItemDetail = ({
  idSelected,
  setProductSelected
}) => {

  console.log(idSelected);

  const [product, setProduct] = useState(null);
  const [orientation, setOrientation] = useState("portrait")
  const {width, height} = useWindowDimensions()

  useEffect(() => {
    if (width > height) setOrientation("landscape")
    else setOrientation("portrait")
  }, [width, height])

  console.log(orientation)

  useEffect(() => {
    const productSelected = allProducts.find(product => product.id === idSelected)
    setProduct(productSelected)
  }, [idSelected])

  console.log(product)

  return (
    <View>
      <Button onPress={() => setProductSelected("")} title='Go Back'/>
      {product ? (
        <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape }>
          <Image 
            source={{uri: product.images}} 
            style={styles.images}
            resizeMode='cover'
          />
          <View style={styles.textContainer}>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>${product.price}</Text>
            <Button title='Agregar'/>
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