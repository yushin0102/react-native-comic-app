import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { RouteName } from '@constants/route'
import { ComicDetailScreenRouteProp } from '@screens/ComicDetail/type'

const ComicDetailScreenHeader: React.FC = () => {
  const navigation = useNavigation<ComicDetailScreenRouteProp>()

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
    marginLeft: 10,
  },
})

export default ComicDetailScreenHeader
