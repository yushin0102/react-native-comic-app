import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { FavoritesScreenProps } from '@screens/Favorites/type'

export const FavoritesRight: React.FC<FavoritesScreenProps> = ({
  onToggleEditMode,
  isEditing,
}) => {
  return (
    <TouchableOpacity onPress={onToggleEditMode} style={styles.button}>
      <Text>{isEditing ? '取消' : '編輯'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginRight: 5,
  },
})
