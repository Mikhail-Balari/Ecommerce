import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import { Ionicons } from '@expo/vector-icons';

const Header = ({route, navigation}) => {

  let title
  if (route.name === 'Home') title = 'JC Distribuidora'
  else if (route.name === 'ItemListCategory') title = route.params.category
  else if (route.name === 'Detail') title = route.params.title
  else title = route.name

  return (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
        {route.name !== "Home" ? (
          <Pressable style={styles.pressable} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-circle-sharp" size={35} color={colors.primary} />
          </Pressable> 
        ) : null}
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
    }
})