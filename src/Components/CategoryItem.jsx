import { StyleSheet, Text} from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({item}) => {
  return (
    <Card>
        <Text style={styles.categoryText}>{item}</Text>
    </Card>
  ) 
}

export default CategoryItem

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 18,

    }
})