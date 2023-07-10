import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import categories from '../Data/categories.json'
import CategoryItem from '../Components/CategoryItem'

const Home = () => {
  return (
    <View style={styles.homeContainer}>
        <FlatList
            data = {categories}
            keyExtractor={category => category}
            renderItem={({item}) => CategoryItem({item})}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    homeContainer: {
        height: '90%',
        backgroundColor: colors.primary, 
        alignItems: 'center',
    }
})