import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  ProfileStackNavigator,
  FavoritesScreenStackNavigator,
} from '../stack/Stack'
import { colors } from '@theme'
import { StyleSheet } from 'react-native'
import { RootStackParamList, RouteName } from '@constants/route'
import RenderTabBarIcon from 'src/navigator/tab/RenderTabBarIcon'
const Tab = createBottomTabNavigator<RootStackParamList>()

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: RenderTabBarIcon(route.name as keyof RootStackParamList),
        headerShown: false,
        tabBarActiveBackgroundColor: colors.white,
        tabBarStyle: styles.tabBar,
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
})
