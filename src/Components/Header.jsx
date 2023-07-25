import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>JC Distribuidora</Text>
      <Pressable style={styles.pressable} onPress={() => {}}>
        <Ionicons name="return-up-back" size={24} color="orange" />
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: colors.darkmatter,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        position: 'relative',
    },
    headerText: {
        fontSize: 25,
        color: colors.secondary,
        fontFamily: 'Roboto',
    },
    pressable: {
      position: 'absolute',
      left: 30,
      top: '50%',
    }
})