import { Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
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
    const {width, height} = useWindowDimensions()

    const onErase = () => {
        setKeyword("")
        onSearch("")
    }

  return (
    <View style ={width > 350 ? styles.container : styles.containerSm}>
        <TextInput style ={styles.input} 
            placeholder='Search...'
            value={keyword}
            onChangeText={setKeyword}
        />
        <Pressable onPress={()=>onSearch(keyword)}>
            <AntDesign name="search1" size={24} color="black" />
        </Pressable>
        <Pressable onPress={onErase}>
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
    containerSm: {
        flexDirection: 'column',
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