import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>JC Distribuidora</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: colors.darkmatter,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
    },
    headerText: {
        fontSize: 25,
        color: colors.secondary,
        fontFamily: 'Roboto',
    }
})