import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated, ViewStyle } from 'react-native'

// 定義組件的屬性類型
interface UnreadBadgeProps {
  unreadCount: number
  style?: ViewStyle // 添加可選的 style 屬性
}

const UnreadBadge: React.FC<UnreadBadgeProps> = ({ unreadCount, style }) => {
  const colorAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (unreadCount > 1) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(colorAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: false,
          }),
          Animated.timing(colorAnim, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: false,
          }),
        ]),
      ).start()
    }
  }, [colorAnim, unreadCount])

  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(255, 129, 129, 1)', 'rgba(255, 129, 129, 0.5)'],
  })

  return (
    <Animated.View style={[styles.unreadBadge, style, { backgroundColor }]}>
      <Text style={styles.unreadText}>{unreadCount}</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  unreadBadge: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 129, 129, 1)',
    borderRadius: 100,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
    right: 10,
  },
  unreadText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
})

export default UnreadBadge
