import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../Global/Colors';

const Search = ({
    onSearch,
    error = "",
    goBack
}) => {
    const [keyword, setKeyword] = useState("")

  return (
    <View style ={styles.container}>
        <TextInput style ={styles.input} 
            placeholder='Search...'
            value={keyword}
            onChangeText={setKeyword}
        />
        <Pressable onPress={()=>onSearch(keyword)}>
            <AntDesign name="search1" size={24} color="black" />
        </Pressable>
        <Pressable onPress={()=> setKeyword("")}>
            <Ionicons name="md-backspace-sharp" size={24} color="black" />
        </Pressable>
        <Pressable onPress={goBack}>
        <Ionicons name="return-up-back" size={24} color="black" />
        </Pressable>
       { error ?
         <Text>
            {error}
        </Text>
        : null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        gap: 18,
    },
    input: {
        width: 250,
        padding: 8,
        fontSize: 18,
        backgroundColor: colors.coffee,
        borderRadius: 10,
    }
})