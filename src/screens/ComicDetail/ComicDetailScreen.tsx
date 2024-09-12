import React from 'react'
import { View, StyleSheet, Animated, Text } from 'react-native'
// import { RouteProp, useRoute } from '@react-navigation/native'
import { Image } from 'expo-image'
import { colors } from '@theme'
import Ionicons from '@expo/vector-icons/Ionicons'

import ComicDetailView from '@views/ComicDetailView/ComicDetailView'
const ComicDetailScreen: React.FC = () => {
  const scrollY = new Animated.Value(0)

  const scale = scrollY.interpolate({
    inputRange: [-200, 0],
    outputRange: [1.5, 1],
    extrapolate: 'clamp',
  })

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.imageContainer, { transform: [{ scale }] }]}
      >
        <Image
          source={require('@assets/images/melamo.jpeg')}
          style={styles.image}
        />
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.panelContainer}>
          <View style={styles.content}>
            <ComicDetailView />
            <View style={styles.saveContainer}>
              <View style={styles.savedButton}>
                <Ionicons
                  name="star-outline"
                  size={18}
                  color={colors.warning}
                />
                <Text style={styles.savedText}>已收藏</Text>
              </View>
              <View style={styles.continueButton}>
                <Text style={styles.continueText}>繼續看第1132話</Text>
              </View>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.comicLightGray,
  },
  scrollViewContent: {
    paddingTop: 250,
  },
  imageContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 250,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  panelContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Android 上的陰影
  },
  content: {
    // height: 1000, //! 記得移除
  },
  saveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 10,
  },
  savedButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.comicDarkGray,
  },
  savedText: {
    marginLeft: 10,
    color: '#A9A9A9',
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: colors.comicRanking,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
  },
})

export default ComicDetailScreen
