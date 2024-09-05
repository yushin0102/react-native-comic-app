import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { DrawerProps } from '../drawer/Drawer.typeDefs'
import { StackHeaderLeft } from '@views/StackHeader/Home/StackHeaderLeft'
import { HomeSearch } from '@views/StackHeader/Home/HomeSearch'
import { RouteName, RootStackParamList } from '@constants/route'
import FavoritesScreen from '@screens/Favorites/FavoritesScreen'
import Details from '@views/Details'
import Home from '@views/Home'
import ComicDetailScreen from '@screens/ComicDetail/ComicDetailScreen'
import { FavoritesLeft, FavoritesRight } from '@views/StackHeader/Favorites'
const Stack = createNativeStackNavigator<RootStackParamList>()

export function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name={RouteName.HomeStack}
        options={{
          headerTitleAlign: 'center',
          headerTitle: '',
          headerLeft: () => <StackHeaderLeft />,
          headerRight: () => <HomeSearch />,
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

// 書籤的tab route 包含詳細頁面
export function FavoritesScreenStackNavigator() {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const handleRemoveItem = () => {
    setIsEditing((prevState) => !prevState)
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteName.BookFavoritesStack}
        options={{
          headerLeft: () => <FavoritesLeft />,
          headerRight: () => (
            <FavoritesRight
              onToggleEditMode={handleRemoveItem}
              isEditing={isEditing}
            />
          ),
          headerTitleAlign: 'center',
          headerTitle: '',
          headerShadowVisible: false,
        }}
      >
        {(props) => (
          <FavoritesScreen
            {...props}
            onToggleEditMode={handleRemoveItem}
            isEditing={isEditing}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        component={ComicDetailScreen}
        name={RouteName.ComicDetailScreen}
        options={{
          gestureEnabled: true,
          headerTitleAlign: 'center',
          headerTitle: '',
          headerLeft: undefined,
          headerRight: undefined,
        }}
      />
    </Stack.Navigator>
  )
}
