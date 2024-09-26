import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// createNativeStackNavigator 比較適合沒要求太多客製化動畫手勢的地方
import { RouteName, RootStackParamList } from '@constants/route'
import FavoritesScreen from '@screens/Favorites/FavoritesScreen'
import ComicContentScreen from '@screens/ComicContent/ComicContentScreen'
import ComicDetailScreen from '@screens/ComicDetail/ComicDetailScreen'
import { FavoritesLeft, FavoritesRight } from '@views/StackHeader/Favorites'
import ComicDetailHeaderBackIcon from '@views/ComicDetailView/HeaderBackIcon'
const Stack = createStackNavigator<RootStackParamList>()

const customDefalutStackProps = () => ({
  headerShadowVisible: false, // 把最上面的bar陰影線隱藏
  headerTitleAlign: 'center' as const, // as const 是為了讓ts知道headerTitleAlign是一個固定的值
  headerTitle: '',
})

export function FavStackNavigator() {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isTouchComicContent, setIsTouchComicContent] = useState<boolean>(true)
  const defaultScreenOptions = {
    gestureEnabled: true,
    gestureResponseDistance: 200,
  }

  const renderFavoritesScreenOptions = {
    headerLeft: () => <FavoritesLeft />,
    headerRight: () => (
      <FavoritesRight
        onToggleEditMode={handleRemoveItem}
        isEditing={isEditing}
      />
    ),
  }

  const handleRemoveItem = () => {
    setIsEditing((prevState) => !prevState)
  }

  const handleTouchComicContent = () => {
    setIsTouchComicContent((prevState) => !prevState)
  }

  return (
    <Stack.Navigator screenOptions={customDefalutStackProps}>
      <Stack.Screen
        name={RouteName.BookFavoritesStack}
        options={renderFavoritesScreenOptions}
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
          ...defaultScreenOptions,
          header: () => <ComicDetailHeaderBackIcon />,
        }}
      />
      <Stack.Screen
        name={RouteName.ComicContentScreen}
        options={{
          ...defaultScreenOptions,
          headerBackTitle: '',
          headerBackTitleStyle: {
            display: isTouchComicContent ? 'none' : 'none',
          },
          headerLeft: isTouchComicContent ? undefined : () => null,
          headerTintColor: 'black',
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
          // headerShown: isTouchComicContent,
          // 點選漫畫內容時，隱藏header的ui 要修成動畫現在很跳
        }}
      >
        {(props) => (
          <ComicContentScreen
            {...props}
            isTouchComicContent={isTouchComicContent}
            onTouchComicContent={handleTouchComicContent}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
