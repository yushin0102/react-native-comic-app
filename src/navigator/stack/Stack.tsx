import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { DrawerProps } from '../drawer/Drawer.typeDefs'
import { StackHeaderLeft } from '@views/StackHeader/Home/StackHeaderLeft'
import { HomeSearch } from '@views/StackHeader/Home/HomeSearch'
import { RouteName, RootStackParamList } from '@constants/route'
import FavoritesScreen from '@screens/Favorites/FavoritesScreen'
import Details from '@views/Details'
import Home from '@views/Home'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { ComicDetailScreenRouteProp } from '@screens/ComicDetail/type'
import ComicDetailScreen from '@screens/ComicDetail/ComicDetailScreen'
import { FavoritesLeft, FavoritesRight } from '@views/StackHeader/Favorites'

const Stack = createNativeStackNavigator<RootStackParamList>()

const customDefalutStackProps = () => ({
  headerShadowVisible: false, // 把最上面的bar陰影線隱藏
  headerTitleAlign: 'center' as const, // as const 是為了讓ts知道headerTitleAlign是一個固定的值
  headerTitle: '',
})

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    fontSize: 26,
    color: 'black',
  },
})

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
  const navigation = useNavigation<ComicDetailScreenRouteProp>()

  const [isEditing, setIsEditing] = useState<boolean>(false)
  const handleRemoveItem = () => {
    setIsEditing((prevState) => !prevState)
  }

  return (
    <Stack.Navigator screenOptions={customDefalutStackProps}>
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
          headerLeft: undefined,
          headerRight: undefined,
          // headerShown: false, // 隱藏header
          header: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.BookFavoritesStack)}
            >
              <AntDesign
                name="leftcircle"
                size={24}
                style={styles.backButton}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  )
}
