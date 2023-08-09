import { Pressable, StyleSheet, View, Text, FlatList } from 'react-native'
import CartItem from '../Components/CartItem'
import React from 'react'
import { colors } from '../Global/Colors'
import { useSelector } from 'react-redux'
import { usePostCartMutation } from '../Services/shopServices'

const Cart = () => {

    const {items: CartData, total, updateAt, user} = useSelector(state => state.cartReducer.value)
    const [triggerPostCart, result] = usePostCartMutation()

    const onConfirm = () => {
        triggerPostCart({items: CartData, total, user, updateAt})
    }

    console.log(result);

  return (
    <View style={styles.container}>
        <FlatList
            data={CartData}
            keyExtractor={cartItem => cartItem.id }
            renderItem={({item}) => {
                return (
                    <CartItem cartItem={item} />
                )
            }}
        />
        <View style={styles.totalContainer}>
            <Pressable onPress={onConfirm}>
                <Text>Confirm</Text>
            </Pressable>
            
            <Pressable>
                <Text>Total: ${total}</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        marginBottom: 120,
        backgroundColor: colors.primary
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto',
    }
})