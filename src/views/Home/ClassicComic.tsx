import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
  Pressable,
  Modal,
} from 'react-native'
import { Image } from 'expo-image'
import { colors } from '@theme'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RouteName, RootStackParamList } from '@constants/route'
import * as Haptics from 'expo-haptics'

interface Comic {
  id: string
  title: string
  imageUrl: string | { uri: string }
  comicTag: string
}

const comics: Comic[] = [
  {
    id: '1',
    title: '關於我轉生成史萊姆這黨事',
    imageUrl: require('@assets/images/melamo.jpeg'),
    comicTag: '轉生',
  },
  {
    id: '2',
    title: '我推的孩子',
    imageUrl: require('@assets/images/ido.jpeg'),
    comicTag: '復仇',
  },
  {
    id: '3',
    title: '我獨自升級',
    imageUrl: require('@assets/images/leveup.jpeg'),
    comicTag: '升級開掛',
  },
  {
    id: '4',
    title: '86不存在的戰區',
    imageUrl: require('@assets/images/86.jpeg'),
    comicTag: '戰爭',
  },
  {
    id: '5',
    title: '我推的孩子',
    imageUrl: require('@assets/images/ido.jpeg'),
    comicTag: '復仇',
  },
  {
    id: '6',
    title: '關於我轉生成史萊姆這黨事',
    imageUrl: require('@assets/images/melamo.jpeg'),
    comicTag: '開掛',
  },
]

const ClassicComic: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const [isModalVisible, setModalVisible] = useState<boolean>(false)

  // const handlePressIn = () => {
  //   Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
  //   setModalVisible(true)
  // }

  // const handlePressOut = () => {
  //   setModalVisible(false)
  // }

  const handleLongPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy) // 觸發震動反饋
    setModalVisible(true) // 顯示 3D Touch 模態
    setTimeout(() => {
      setModalVisible(false)
    }, 1000)
  }

  const handlePress = (id: string) => {
    Haptics.selectionAsync() // 觸發選擇反饋
    navigation.navigate(RouteName.ComicDetailScreen, {
      screen: RouteName.ComicDetailScreen,
      params: { comicId: id },
    })
  }

  const renderItem: ListRenderItem<Comic> = ({ item }) => (
    <TouchableOpacity
      style={{ flex: 1 }}
      onLongPress={handleLongPress}
      onPress={() => handlePress(item.id)}
    >
      <View style={styles.profileContainer}>
        <Image source={item.imageUrl} style={styles.image} />
        <Text style={styles.comicTitle} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text style={styles.comicTagText} numberOfLines={1}>
          {item.comicTag}
        </Text>
      </View>

      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>3D Touch Modal Content</Text>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  )

  return (
    <FlatList
      data={comics}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2} // 每行顯示兩個項目
    />
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 150,
  },
  comicTitle: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'left',
  },
  comicTagText: {
    marginTop: 5,
    fontSize: 16,
    width: '30%',
    color: colors.comicDarkGray,
    textAlign: 'center',
    borderRadius: 10,
    borderColor: colors.comicDarkGray,
    borderWidth: 1,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
})

export default ClassicComic
