export interface FavoritesScreenProps {
  onToggleEditMode: () => void
  isEditing: boolean
}

export interface FavoritesComic {
  id: string
  title: string
  imageUrl: string | { uri: string }
  comicTag: string
  newUpdate?: boolean
}
