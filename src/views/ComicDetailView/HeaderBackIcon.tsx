import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RouteName, RootStackParamList } from '@constants/route'

const ComicDetailHeaderBackIcon: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(RouteName.BookFavoritesStack)}
    >
      <AntDesign name="leftcircle" size={24} style={styles.backButton} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    fontSize: 26,
    color: 'black',
  },
})

export default ComicDetailHeaderBackIcon
