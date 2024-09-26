import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StackHeaderLeft } from '@views/StackHeader/Home/StackHeaderLeft'
import { HomeSearch } from '@views/StackHeader/Home/HomeSearch'
import { RouteName, RootStackParamList } from '@constants/route'
import Details from '@views/Details'
import Home from '@views/Home'
import ComicDetailScreen from '@screens/ComicDetail/ComicDetailScreen'
import ComicDetailHeaderBackIcon from '@views/ComicDetailView/HeaderBackIcon'
const Stack = createStackNavigator<RootStackParamList>()

export function HomeNavigator() {
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
      {/* 首頁前往漫畫介紹頁面 一定要寫在同個screen中 因為是不同Tab rn會報錯 */}
      <Stack.Screen
        component={ComicDetailScreen}
        name={RouteName.ComicDetailScreen}
        options={{
          gestureEnabled: true,
          gestureResponseDistance: 250, // 手勢反應距離
          header: () => <ComicDetailHeaderBackIcon />,
        }}
      />
    </Stack.Navigator>
  )
}
