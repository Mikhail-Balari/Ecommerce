import { Pressable, StyleSheet, Text, useWindowDimensions, View} from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../Features/Shop/shopSlice'

const CategoryItem = ({item, navigation}) => {

  const {width} = useWindowDimensions()

  const dispatch = useDispatch()

  const onSelectCategory = () => {
    dispatch(setCategorySelected(item))
    navigation.navigate('ItemListCategory', {category: item})
  }
  return (
    <View style = {{width:width, alignItems: 'center'}}>
      <Pressable onPress={onSelectCategory}>
          <Card>
              <Text style={styles.categoryText}>{item}</Text>
          </Card>
      </Pressable>
    </View>
    
  ) 
}

export default CategoryItem

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 18,

    }
})