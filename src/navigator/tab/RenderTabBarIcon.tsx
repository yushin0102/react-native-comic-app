import React from 'react'
import { TabBarStatus } from './Tab.typeDefs'
import { Image } from 'expo-image'
import { images, colors } from '@theme'
import { StyleSheet } from 'react-native'
import { RootStackParamList, RouteName } from '@constants/route'

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
          <Image
            style={styles.tabImage}
            source={
              tabStatus.focused
                ? images.calendarFilledIcon
                : images.calendarOutlineIcon
            }
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
  tabBar: {
    backgroundColor: colors.primary,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden',
    height: 80,
  },

  tabImage: {
    width: 30,
    height: 26,
    resizeMode: 'contain',
  },
  userImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
})
