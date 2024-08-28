import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { images, colors } from '@theme'
import { Image } from 'expo-image'
import { AntDesign } from '@expo/vector-icons'

import EvilIcons from '@expo/vector-icons/EvilIcons'
export function FavoritesRight() {
  const navigation = useNavigation()

  const handlePress = () => {
    // navigation.navigate('Home')
    console.log('通知')
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text>編輯</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  icon: {
    width: 22,
    height: 24,
    resizeMode: 'contain',
  },
})
