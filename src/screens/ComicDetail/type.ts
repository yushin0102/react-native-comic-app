import { NavigationProp } from '@react-navigation/native'
import { RouteName, RootStackParamList } from '@constants/route'

export type ComicDetailScreenRouteProp = NavigationProp<
  RootStackParamList,
  typeof RouteName.BookFavoritesStack
>
