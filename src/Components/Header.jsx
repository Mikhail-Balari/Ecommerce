import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../Features/User/userSlice';

const Header = ({route, navigation}) => {

  let title

  if (route.name === 'Home') title = 'JC Distribuidora'
  else if (route.name === 'Signup') title = 'Registrate'
  else if (route.name === 'Login') title = 'Ingresa'
  else if (route.name === 'CartScreen') title = 'Carrito'
  else if (route.name === 'OrderScreen') title = 'Ordenes'
  else if (route.name === 'ItemListCategory') title = route.params.category
  else if (route.name === 'Detail') title = route.params.title
  else title = route.name

  const dispatch = useDispatch() 
  const {email} = useSelector(state => state.userReducer.value)
  
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
          {
            route.name !== "Home" && route.name !== "Signup" && route.name !== "Login" ? 

              <Pressable 
                style={styles.pressable} 
                onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle-sharp" size={35} color={colors.primary} />
              </Pressable> : null
          }
            { email ? 
              <Pressable style={styles.signOut} onPress={() => dispatch(signOut())}>
                <Octicons name="sign-out" size={26} color={colors.primary} />
              </Pressable>
             : null 
            }
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
      top: '25%',
    },
    signOut: {
      position: 'absolute',
      right: 30,
      top: '25%',
    },
})