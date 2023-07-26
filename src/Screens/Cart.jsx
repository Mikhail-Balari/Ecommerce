import { Pressable, StyleSheet, View, Text } from 'react-native'
import CartData from '../Data/cart.json'
import CartItem from '../Components/CartItem'
import { FlatList } from 'react-native-web'
import { colors } from '../Global/Colors'

const Cart = () => {

    const total = CartData.reduce(
        (acumulador, currentItem) => (acumulador += currentItem.price * currentItem.quantity),0
    );

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
            <Pressable>
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