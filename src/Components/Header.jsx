import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: '10%',
        backgroundColor: colors.darkmatter,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 25,
        color: colors.secondary,
    }
})