import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartData from '../Data/cart.json'
import CartItem from '../Components/CartItem'

const Cart = () => {
    console.log(CartData)
  return (
    <View>
      <CartItem
        cartItem={CartData[0]}
      />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})