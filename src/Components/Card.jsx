import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Card = ({children, additionalStyle = []}) => {
  return (
    <View style={[styles.cardContainer, additionalStyle]}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        height: 50,
        width: 180,
        shadowColor: colors.secondary,
        shadowOffset:{
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 7,
        borderWidth: 2,
        borderColor: colors.darkmatter,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 8,
    }
})