import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { images, colors } from '@theme'
import { Image } from 'expo-image'

export function NotificationIcon() {
  const navigation = useNavigation()

  const handlePress = () => {
    // navigation.navigate('Home')
    console.log('通知')
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Image source={images.notificationIcon} style={styles.icon} />
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
