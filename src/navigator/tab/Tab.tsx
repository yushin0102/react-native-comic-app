import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  ProfileStackNavigator,
  FavoritesScreenStackNavigator,
} from '../stack/Stack'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

import { colors } from '@theme'
import { StyleSheet } from 'react-native'
import { RootStackParamList, RouteName } from '@constants/route'
import RenderTabBarIcon from 'src/navigator/tab/RenderTabBarIcon'
const Tab = createBottomTabNavigator<RootStackParamList>()

export default function TabNavigator() {
  const shouldHideTabBar = (route: { name: string }) => {
    const focusedRoute: string | undefined = getFocusedRouteNameFromRoute(route)
    return focusedRoute === RouteName.ComicContentScreen
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: RenderTabBarIcon(route.name as keyof RootStackParamList),
        headerShown: false,
        tabBarActiveBackgroundColor: colors.white,
        tabBarStyle: shouldHideTabBar(route)
          ? styles.hiddenTabBar
          : styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      })}
    >
      <Tab.Screen name={RouteName.Home} component={ProfileStackNavigator} />
      <Tab.Screen
        name={RouteName.ContractList}
        component={ProfileStackNavigator}
      />
      <Tab.Screen
        name={RouteName.BookFavorites}
        component={FavoritesScreenStackNavigator}
      />
      {/* 書籤的tab route */}
      <Tab.Screen name={RouteName.Profile} component={ProfileStackNavigator} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: 85,
  },
  hiddenTabBar: {
    height: 0,
    display: 'none',
  },
  tabBarLabel: {
    color: colors.black,
  },
})
