import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export function FavoritesLeft({ onPress }: { onPress?: () => void }) {
  return (
    <View style={styles.layoutHeader}>
      <Text style={styles.layoutDesc}>收藏</Text>
      <Text style={styles.layoutDesc}>歷史</Text>
      <Text style={styles.layoutDesc}>下載</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  layoutHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  layoutDesc: {
    fontSize: 16,
    padding: 10,
  },
})
