import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from 'react-native'
import { Image } from 'expo-image'
import { colors } from '@theme'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RouteName, RootStackParamList } from '@constants/route'

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

  const renderItem: ListRenderItem<Comic> = ({ item }) => (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() =>
        navigation.navigate(RouteName.ComicDetailScreen, {
          screen: RouteName.ComicDetailScreen,
          params: { comicId: item.id },
        })
      }
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
    </TouchableOpacity>
  )

  return (
    <FlatList
      data={comics}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2} // 每行顯示兩個項目
      contentContainerStyle={styles.listContainer}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
  },
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
    textAlign: 'center',
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
})

export default ClassicComic
