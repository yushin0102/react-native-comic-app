import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  TextInput,
  FlatList,
} from 'react-native'
import axios from 'axios'
import Button from '@components/Button'
import { StackProps } from '@navigator/stack'
import { colors } from '@theme'
import { useQuery } from '@tanstack/react-query'
import { AntDesign } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ChatList from 'src/screens/chatList/ChatList'
const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
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
    backgroundColor: colors.lightPurple,
    height: 44,
    width: '50%',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#F1F1F1',
    borderRadius: 20,
    paddingHorizontal: 28,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    height: 40,
    fontSize: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
})

export interface ChatListData {
  caseId: number
  caseName: string
  companyName: string
  unreadCount: number
  content: string
  totalCount: number
}

export default function Home({ navigation }: StackProps) {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0ZWM3NTRhNy1kNWVhLTQ4YTAtYTVjMi0xYzBjODRhNzcxNWIiLCJqdGkiOiJhZTA3ODJiYy0xMDJmLTQ1NzYtYmRkZS1iNWIyOTI5Y2RiNDAiLCJuYmYiOjE3MTcyOTk3NTksImV4cCI6MTcxNzk0Nzc1OSwiaWF0IjoxNzE3Mjk5NzU5LCJpc3MiOiJNZW1iZXIuQVBJIn0.gPZU7Ltk8AiTdh8LR9TQbC6iO6wM_bSQZM5pDhaayIA'
  const [page, setPage] = useState<number>(1)
  const [size, setSize] = useState<number>(10)
  const [search, setSearch] = useState<string>('')
  const Tab = createBottomTabNavigator()

  const {
    data: chatData,
    error,
    isLoading,
  } = useQuery<ChatListData[]>({
    queryKey: ['data', page, size],
    queryFn: async () => {
      const response = await axios.post(
        'https://devmemberapi.pocketpro.tw/api/getchatroomlist',
        {
          page,
          size,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json, text/plain, */*',
            Authorization: 'Bearer ' + `${token}`,
          },
        },
      )

      return response.data.data
    },
  })

  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text>Error: {(error as Error).message}</Text>
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      {/* <Text style={styles.title}>Home</Text> */}
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <AntDesign
            name="search1"
            size={20}
            color="#495B7D"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="搜尋"
            // value={search}
            // onChangeText={setSearch}
          />
        </View>

        <FlatList
          data={chatData}
          keyExtractor={(item) => item.caseId.toString()}
          renderItem={({ item }) => <ChatList item={item} />}
          ListEmptyComponent={<Text>尚未有聊天內容</Text>}
        />
      </View>
      {/* <Button
        title="Go to Details"
        titleStyle={styles.buttonTitle}
        style={styles.button}
        onPress={() => navigation.navigate('DetailsStack', { from: 'Home' })}
      /> */}
    </View>
  )
}
