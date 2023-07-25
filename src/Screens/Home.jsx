import { FlatList, StyleSheet, View, StatusBar} from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import categories from '../Data/categories.json'
import CategoryItem from '../Components/CategoryItem'

const Home = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <StatusBar/>
      <FlatList
          data = {categories}
          keyExtractor={category => category}
          renderItem={({item}) => <CategoryItem item={item} navigation={navigation}/>}
          showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: colors.primary, 
        alignItems: 'center',
    }
})