import React from 'react'
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native'
import { Image } from 'expo-image'
import BottomTabBar from '@views/ComicContentView/BottomTabBar'
import { ComicContentScreenProps } from '@screens/ComicContent/type'
const ComicContentScreen: React.FC<ComicContentScreenProps> = ({
  isTouchComicContent,
  onTouchComicContent,
}) => {
  interface ComicContent {
    id: string
    imageUrl: string | { uri: string }
  }

  const comicDefaultData: ComicContent[] = [
    {
      id: '1',
      imageUrl: require('@assets/images/comicContent1.png'),
    },
    {
      id: '2',
      imageUrl: require('@assets/images/comicContent2.png'),
    },
    {
      id: '3',
      imageUrl: require('@assets/images/comicContent3.png'),
    },
    {
      id: '4',
      imageUrl: require('@assets/images/comicContent1.png'),
    },
    {
      id: '5',
      imageUrl: require('@assets/images/comicContent2.png'),
    },
  ]

  return (
    <View style={styles.container}>
      {/* 點選漫畫內容時，隱藏header的ui 要修成動畫現在很跳 */}
      <FlatList
        data={comicDefaultData}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={onTouchComicContent}>
            <Image source={item.imageUrl} style={styles.image} />
          </TouchableWithoutFeedback>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {isTouchComicContent && (
        <View style={styles.bottomFix}>
          <BottomTabBar />
        </View>
      )}
    </View>
  )
}

export default ComicContentScreen

const styles = StyleSheet.create({
  container: {
    minHeight: 830,
  },
  bottomFix: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
})
