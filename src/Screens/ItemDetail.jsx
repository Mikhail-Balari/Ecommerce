import { Image, StyleSheet, Text, View } from 'react-native'
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

  const [product, setProduct] = useState({})

  useEffect(() => {
    const productSelected = allProducts.find(product => product.id === idSelected)
    setProduct(productSelected)
  }, [idSelected])

  console.log(product)

  return (
    <View>
      <Button onPress={() => setProductSelected("")} title='Go Back'/>
      <View style={styles.mainContainer}>
        <Image 
          source={{uri: product.images}} 
          style={styles.images}
          resizeMode='cover'
        />
        <Text>{product.title}</Text>
        <Text>{product.description}</Text>
        <Text>${product.price}</Text>
      </View>
      
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
  images: {
    width: 300,
    height: 500,
  }
})