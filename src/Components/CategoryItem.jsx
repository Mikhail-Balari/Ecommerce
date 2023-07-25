import { Pressable, StyleSheet, Text, useWindowDimensions, View} from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({item, navigation}) => {
  const {width} = useWindowDimensions()
  return (
    <View style = {{width:width, alignItems: 'center'}}>
      <Pressable onPress={() => navigation.navigate('ItemListCategory', {category: item})}>
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