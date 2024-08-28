import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { images, colors } from '@theme'
import { Image } from 'expo-image'
import { AntDesign } from '@expo/vector-icons'

import EvilIcons from '@expo/vector-icons/EvilIcons'
export function HomeSearch() {
  const navigation = useNavigation()

  const handlePress = () => {
    // navigation.navigate('Home')
    console.log('通知')
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <AntDesign name="search1" size={20} color="#495B7D" />
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
