import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DrawerProps } from '../drawer/Drawer.typeDefs'
import { StackHeaderLeft, NotificationIcon, ChatRoomIcon } from './components'
import { colors } from '@theme'
import { RouteName, RootStackParamList } from '@constants/route'

import Home from '@views/Home'
import Details from '@views/Details'
import Profile from '@views/Profile'

const Stack = createNativeStackNavigator<RootStackParamList>()

const navigationProps = (navigation: DrawerProps['navigation']) => ({
  headerStyle: { backgroundColor: colors.primaryBgColor },
  headerTitleStyle: { fontSize: 18 },
  headerLeft: () => (
    <StackHeaderLeft onPress={() => navigation.toggleDrawer()} />
  ),
  headerRight: () => (
    <>
      <NotificationIcon />
      <ChatRoomIcon />
    </>
  ),
})

export function HomeStackNavigator({ navigation }: DrawerProps) {
  return (
    <Stack.Navigator screenOptions={navigationProps(navigation)}>
      <Stack.Screen
        component={Home}
        name={RouteName.ChatList}
        options={{
          headerTitleAlign: 'center',
          headerTitle: '',
        }}
      />
      <Stack.Screen
        component={Details}
        name={RouteName.Details}
        options={{
          headerTitleAlign: 'center',
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  )
}

export function ProfileStackNavigator({ navigation }: DrawerProps) {
  return (
    <Stack.Navigator screenOptions={navigationProps(navigation)}>
      <Stack.Screen
        component={Profile}
        name={RouteName.Profile}
        options={{
          headerTitleAlign: 'center',
          headerTitle: '',
        }}
      />
      <Stack.Screen
        component={Details}
        name={RouteName.Details}
        options={{
          headerTitleAlign: 'center',
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  )
}
