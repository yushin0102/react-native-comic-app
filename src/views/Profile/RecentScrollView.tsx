import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { colors } from '@theme'

interface RecentScrollViewProps {
  items?: string[]
  onItemPress?: (item: string) => void
}

const RecentScrollView: React.FC<RecentScrollViewProps> = ({
  items,
  onItemPress,
}) => {
  console.log('123')
  return (
    // 記得改成FlatList
    <ScrollView horizontal style={styles.scrollView}>
      <View style={styles.profileContainer}>
        <Image
          source={require('@assets/images/melamo.jpeg')}
          style={styles.image}
        />
        <Text
          style={styles.comicTitle}
          numberOfLines={1} // 設置顯示的最大行數
          ellipsizeMode="tail" // 設置省略號的位置，可以是 'head', 'middle', 'tail', 或 'clip'
        >
          關於我轉生成史萊姆這黨事
        </Text>
        <Text style={styles.comicDesc} numberOfLines={1} ellipsizeMode="tail">
          第121話/第122話
        </Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require('@assets/images/ido.jpeg')}
          style={styles.image}
        />
        <Text style={styles.comicTitle}>我推的孩子</Text>
        <Text style={styles.comicDesc} numberOfLines={1} ellipsizeMode="tail">
          第158話/第158話
        </Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require('@assets/images/leveup.jpeg')}
          style={styles.image}
        />
        <Text style={styles.comicTitle}>我獨自升級</Text>
        <Text style={styles.comicDesc} numberOfLines={1} ellipsizeMode="tail">
          第200話/第210話
        </Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://example.com/image4.jpg' }}
          style={styles.image}
        />
        <Text style={styles.comicTitle}>航海王</Text>
        <Text style={styles.comicDesc} numberOfLines={1} ellipsizeMode="tail">
          第958話/第1091話
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {},
  profileContainer: {
    width: 150,
    marginTop: 15,
    backgroundColor: '#e6f0f7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
    padding: 10,
  },
  image: {
    width: 130,
    height: 130,
  },

  comicTitle: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  comicDesc: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
    color: colors.comicDarkGray,
  },
})

export default RecentScrollView
