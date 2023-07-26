import { StyleSheet, View } from 'react-native'
import React from 'react'
import OrderData from '../Data/orders.json'
import OrderItem from '../Components/OrderItem'
import { FlatList } from 'react-native-web'
import { colors } from '../Global/Colors'


const OrderScreen = () => {
  return (
    <View style={styles.containerOrder}>
        <FlatList
            data={OrderData}
            keyExtractor={orderItem => orderItem.id}
            renderItem={({item}) => {
                return (
                    <OrderItem order={item}/>
                )
            }}
        
        />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    containerOrder: {
        flex: 1,
        backgroundColor: colors.secondary,
    }
})