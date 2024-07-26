import React from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import Button from '@components/Button'
import { StackProps } from '@navigator/stack'
import { colors } from '@theme'

const styles = StyleSheet.create({
  profilePage: {
    backgroundColor: colors.white,
    padding: 34,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 16,
    color: colors.slateBlue,
    fontWeight: 'bold',
  },
  profileContainer: {
    backgroundColor: '#FFF8DF',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonTitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 22,
    height: 44,
    width: '50%',
    backgroundColor: colors.lightPurple,
  },
})

export default function Profile({ navigation }: StackProps) {
  return (
    <View style={styles.profilePage}>
      <Text style={styles.title}>個人專區</Text>
      <View style={styles.profileContainer}>
        <Text>個人資料</Text>
        <Text>訂單查詢</Text>
        <Text>我的收藏</Text>
        <Text>我的優惠券</Text>
        <Text>我的訂單</Text>
      </View>
      <Button
        title="Go to Details"
        titleStyle={styles.buttonTitle}
        style={styles.button}
        onPress={() => {
          navigation.navigate('Details', { from: 'Profile' })
        }}
      />
    </View>
  )
}
