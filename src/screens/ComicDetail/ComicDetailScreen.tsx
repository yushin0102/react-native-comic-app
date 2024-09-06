import React from 'react'
import { View, StyleSheet, Animated, Text } from 'react-native'
// import { RouteProp, useRoute } from '@react-navigation/native'
import { Image } from 'expo-image'

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
        <View />
        <View style={styles.content}>
          <Text>123測試</Text>
        </View>
      </Animated.ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingTop: 200,
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
})

export default ComicDetailScreen
