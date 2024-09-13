import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
interface FavoritesLeftProps {
  onPress?: (focus: string) => void
}

export const FavoritesLeft: React.FC<FavoritesLeftProps> = ({ onPress }) => {
  const [focused, setFocused] = useState<string | null>('收藏')

  const handlePress = (focus: string) => {
    setFocused(focus)
    if (onPress) {
      onPress(focus)
    }
  }

  const renderButton = (label: string) => (
    <TouchableOpacity onPress={() => handlePress(label)}>
      <Text style={[styles.layoutDesc, focused === label && styles.focused]}>
        {label}
      </Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.layoutHeader}>
      {renderButton('收藏')}
      {renderButton('歷史')}
      {renderButton('下載')}
    </View>
  )
}

const styles = StyleSheet.create({
  layoutHeader: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  layoutDesc: {
    fontSize: 16,
    padding: 10,
  },
  focused: {
    fontWeight: 'bold',
    fontSize: 28,
  },
})
