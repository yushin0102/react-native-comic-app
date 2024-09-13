import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export function StackHeaderLeft() {
  return (
    <View style={styles.layoutHeader}>
      <Text style={styles.layoutDesc}>更新</Text>
      <Text style={styles.focused}>推薦</Text>
      <Text style={styles.layoutDesc}>男生</Text>
      <Text style={styles.layoutDesc}>女生</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  layoutHeader: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  layoutDesc: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  focused: {
    fontWeight: 'bold',
    fontSize: 28,
  },
})
