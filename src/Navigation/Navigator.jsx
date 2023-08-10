import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ShopStack from './ShopStack'
import CartStack from './CartStack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from '../Global/Colors'
import { View } from 'react-native-web'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import OrderStack from './OrderStack'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'
import MyProfileStack from './MyProfileStack'


const Tab = createBottomTabNavigator()

const Navigator = () => {

    const {email} = useSelector(state => state.userReducer.value)
    
  return (
    <SafeAreaView style = {styles.container}>
        <NavigationContainer>
           {    
                email ?
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarStyle: styles.tabBar,
                    }}
                >
                <Tab.Screen
                    name = 'Shop'
                    component={ShopStack}
                    options={{
                        tabBarIcon: ({focused}) => {
                            return (
                                <View>
                                    <Entypo name="shop" size={30} color={focused ? colors.primary : colors.coffee} />
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name = 'Cart'
                    component={CartStack}
                    options={{
                        tabBarIcon: ({focused}) => {
                            return (
                                <View>
                                    <MaterialCommunityIcons name="cart-arrow-right" size={30} color={focused ? colors.primary : colors.coffee} />
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name = 'Orders'
                    component={OrderStack}
                    options={{
                        tabBarIcon: ({focused}) => {
                            return (
                                <View>
                                    <MaterialCommunityIcons name="playlist-check" size={30} color={focused ? colors.primary : colors.coffee} />
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name = 'MyProfile'
                    component={MyProfileStack}
                    options={{
                        tabBarIcon: ({focused}) => {
                            return (
                                <View style={styles.item}>
                                    <Ionicons 
                                        name="person-circle-outline" 
                                        size={24} 
                                        color={focused ? colors.primary : colors.coffee} 
                                    />
                                </View>
                            )
                        }
                    }}
                />
                </Tab.Navigator>
                : <AuthStack/>
            
            }
        </NavigationContainer>
    </SafeAreaView>
  )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    tabBar: {
        backgroundColor: colors.darkmatter,
        shadowColor: 'black',
        elevation: 4,
        position: 'absolute',
        bottom: 20,
        left: 5,
        right: 5,
        borderRadius: 10,
        height: 75,
    }
  })