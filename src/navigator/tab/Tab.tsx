import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabParamList, TabBarStatus } from './Tab.typeDefs'
import { HomeStackNavigator, ProfileStackNavigator } from '../stack/Stack'
import { Image } from 'expo-image'
import { images, colors } from '@theme'
import { StyleSheet } from 'react-native'

const Tab = createBottomTabNavigator<TabParamList>()

const renderTabBarIcon =
  (tabName: keyof TabParamList) => (tabStatus: TabBarStatus) => {
    switch (tabName) {
      case 'HomeTab':
        return <Image source={images.pocketPro_logo} style={styles.tabImage} />
      case 'ContractListTab':
        return (
          <Image
            source={
              tabStatus.focused
                ? images.contract_list_filled_icon
                : images.contract_list_outline_icon
            }
            style={styles.tabImage}
          />
        )
      case 'CalendarTab':
        return (
          <Image
            source={
              tabStatus.focused
                ? images.calendar_filled_icon
                : images.calendar_outline_icon
            }
            style={styles.tabImage}
          />
        )
      case 'InviteTab':
        return (
          <Image
            source={
              tabStatus.focused
                ? images.invite_filled_icon
                : images.invite_outline_icon
            }
            style={styles.tabImage}
          />
        )
    }
  }

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: renderTabBarIcon(route.name),
        headerShown: false,
        tabBarActiveBackgroundColor: colors.white,
        tabBarShowLabel: false, // 移除文字標籤
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="ContractListTab" component={ProfileStackNavigator} />
      <Tab.Screen name="CalendarTab" component={ProfileStackNavigator} />
      <Tab.Screen name="InviteTab" component={ProfileStackNavigator} />
    </Tab.Navigator>
  )
}

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
})
