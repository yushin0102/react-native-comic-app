import React from 'react'
import { TabBarStatus } from './Tab.typeDefs'
import { Image } from 'expo-image'
import { images } from '@theme'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { StyleSheet } from 'react-native'
import { RootStackParamList, RouteName } from '@constants/route'
import Ionicons from '@expo/vector-icons/Ionicons'
const RenderTabBarIcon =
  (tabName: keyof RootStackParamList) => (tabStatus: TabBarStatus) => {
    switch (tabName) {
      case RouteName.Home:
        return (
          <Ionicons
            style={styles.tabImage}
            name={tabStatus.focused ? 'home-sharp' : 'home-outline'}
            size={24}
            color="black"
          />
        )
      case RouteName.ContractList:
        return (
          <Ionicons
            style={styles.tabImage}
            name={
              tabStatus.focused ? 'game-controller' : 'game-controller-outline'
            }
            size={24}
            color="black"
          />
        )
      case RouteName.BookFavorites:
        return (
          <Image
            style={styles.tabImage}
            source={
              tabStatus.focused
                ? images.bookFavoritesFilledIcon
                : images.bookFavoritesOutlineIcon
            }
          />
        )
      case RouteName.Profile:
        return (
          <FontAwesome
            name={tabStatus.focused ? 'user-circle-o' : 'user-o'}
            size={24}
            color="black"
          />
        )
      default:
        return null
    }
  }

export default RenderTabBarIcon

const styles = StyleSheet.create({
  tabImage: {
    width: 34,
    height: 30,
    resizeMode: 'contain',
  },
  userImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
})
