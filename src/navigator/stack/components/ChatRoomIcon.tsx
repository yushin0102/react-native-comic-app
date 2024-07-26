import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { images } from '@theme'
import { Image } from 'expo-image'
import { RouteName, RootStackParamList } from '@constants/route'

export function ChatRoomIcon() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const handlePress = () => {
    navigation.navigate(RouteName.ChatList)
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Image source={images.chatRoomIcon} style={styles.icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingLeft: 10,
    paddingRight: 5,
  },
  icon: {
    width: 22,
    height: 24,
    resizeMode: 'contain',
  },
})
