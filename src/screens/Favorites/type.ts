import { NavigationProp } from '@react-navigation/native'
import { RouteName, RootStackParamList } from '@constants/route'

export interface FavoritesScreenProps {
  onToggleEditMode: () => void
  isEditing: boolean
}

export type ComicDetailScreenNavigationProp = NavigationProp<
  RootStackParamList,
  typeof RouteName.ComicDetailScreen
>

export interface FavoritesComic {
  id: string
  title: string
  imageUrl: string | { uri: string }
  comicTag: string
  newUpdate?: boolean
}
