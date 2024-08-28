import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStackNavigator, ProfileStackNavigator } from '../stack/Stack'
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
        tabBarShowLabel: false, // 移除文字標籤
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name={RouteName.TaskCalendar}
        component={ProfileStackNavigator}
      />
      <Tab.Screen
        name={RouteName.ContractList}
        component={ProfileStackNavigator}
      />
      <Tab.Screen name={RouteName.Invite} component={HomeStackNavigator} />
      <Tab.Screen name={RouteName.Profile} component={ProfileStackNavigator} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: 85,
  },
})
