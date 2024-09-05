import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
// import { ComicDetailScreenRouteProp } from './types';

const ComicDetailScreen: React.FC = () => {
  // const route = useRoute<ComicDetailScreenRouteProp>();
  // const { comic } = route.params;

  return (
    <View style={styles.container}>
      <Text>123測試</Text>
      {/* <Text style={styles.title}>{comic.title}</Text> */}
      {/* <Text style={styles.description}>{comic.description}</Text> */}
      {/* 其他漫畫介紹內容 */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
})

export default ComicDetailScreen
