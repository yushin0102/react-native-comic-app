import React from 'react'
import { TabBarStatus } from './Tab.typeDefs'
import { Image } from 'expo-image'
import { images, colors } from '@theme'
import { StyleSheet } from 'react-native'
import { RootStackParamList, RouteName } from '@constants/route'
import Octicons from '@expo/vector-icons/Octicons'
const RenderTabBarIcon =
  (tabName: keyof RootStackParamList) => (tabStatus: TabBarStatus) => {
    switch (tabName) {
      case RouteName.Home:
        return <Image source={images.pocketPro_logo} style={styles.tabImage} />
      case RouteName.ContractList:
        return (
          <Image
            style={styles.tabImage}
            source={
              tabStatus.focused
                ? images.contractListFilledIcon
                : images.contractListOutlineIcon
            }
          />
        )
      case RouteName.TaskCalendar:
        return (
          <Octicons
            style={styles.tabImage}
            name="home"
            size={24}
            color="black"
          />
        )
      case RouteName.Invite:
        return (
          <Image
            style={styles.tabImage}
            source={
              tabStatus.focused
                ? images.inviteFilledIcon
                : images.inviteOutlineIcon
            }
          />
        )
      case RouteName.Profile:
        return <Image style={styles.userImage} source={images.testUserIcon} />
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
