import { Image, StyleSheet, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({item}) => {

  const {height, width} = useWindowDimensions()

  console.log(height, width)

  return (
    <Card
      additionalStyle={styles.additionalStylesCard}
    >
        <Text style={width > 350 ? styles.textCategory : styles.textCategorySm}>{item.title}</Text>
        <Image 
          resizeMode='cover'
          style = {styles.image}
          source={{uri: item.images[0]}}
        />
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: '40%',
    minWidth: 150,
    maxWidth: 250,
    borderRadius: 8
  },
  additionalStylesCard: {
    flexDirection: 'row',
    height: 120,
    justifyContent: 'space-between'
  },
  textCategory: {
    width: '50%',
    fontSize: 22,
  },
  textCategorySm: {
    width: '50%',
    fontSize: 15,
  },
})