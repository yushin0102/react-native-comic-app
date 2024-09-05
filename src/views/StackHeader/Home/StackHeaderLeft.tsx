import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export function StackHeaderLeft() {
  return (
    <View style={styles.layoutHeader}>
      <Text style={styles.layoutDesc}>更新</Text>
      <Text style={styles.layoutDesc}>推薦</Text>
      <Text style={styles.layoutDesc}>男生</Text>
      <Text style={styles.layoutDesc}>女生</Text>
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
