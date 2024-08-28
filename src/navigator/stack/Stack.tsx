import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DrawerProps } from '../drawer/Drawer.typeDefs'
import { StackHeaderLeft } from '@views/StackHeader/Home/StackHeaderLeft'
import { HomeSearch } from '@views/StackHeader/Home/HomeSearch'
import { colors } from '@theme'
import { RouteName, RootStackParamList } from '@constants/route'
import FavoritesScreen from '@screens/Favorites/FavoritesScreen'
import Details from '@views/Details'
import Profile from '@views/Profile'
import { FavoritesLeft, FavoritesRight } from '@views/StackHeader/Favorites'

const Stack = createNativeStackNavigator<RootStackParamList>()

const navigationProps = (navigation: DrawerProps['navigation']) => ({
  headerStyle: { backgroundColor: colors.white },
  headerTitleStyle: { fontSize: 18 },
  headerLeft: () => (
    <StackHeaderLeft onPress={() => navigation.toggleDrawer()} />
  ),
  headerRight: () => (
    <>
      <HomeSearch />
    </>
  ),
})

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

export function FavoritesScreenStackNavigator({ navigation }: DrawerProps) {
  return (
    <Stack.Navigator screenOptions={navigationProps(navigation)}>
      <Stack.Screen
        component={FavoritesScreen}
        name={RouteName.BookFavorites}
        options={{
          headerLeft: () => <FavoritesLeft />,
          headerRight: () => <FavoritesRight />,
          headerTitleAlign: 'center',
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  )
}
