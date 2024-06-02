import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image'
import { images, colors } from '@theme'
import { parseISO, isValid, isSameMinute, startOfToday, format } from 'date-fns'
import UnreadBadge from '@components/UnreadBadge'
import { ChatListData } from 'src/views/Home/Home'

interface ChatItemProps {
  item: ChatListData
}

const ChatList: React.FC<ChatItemProps> = ({ item }) => {
  const extractChatTimestamp = (content: string | null): string | null => {
    if (!content) return null

    const match = content.match(/【(.*?)】/)
    return match ? match[1] : null
  }

  // 解析聊天內容
  const parseChatContent = (chat: { content: string }): string => {
    return chat.content.split('【')[0]
  }

  // 獲取聊天記錄的顯示時間
  const getChatDisplayTime = (chat: { content: string }): string => {
    const extractedText = extractChatTimestamp(chat.content)
    if (!extractedText) {
      return ''
    }

    const chatDate = parseISO(extractedText)
    if (!isValid(chatDate)) {
      return ''
    }

    const now = new Date()
    const today = startOfToday()

    if (isSameMinute(chatDate, now)) {
      return '剛剛'
    }
    return chatDate >= today
      ? format(chatDate, 'HH:mm')
      : format(chatDate, 'MM/dd')
  }

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.chatPage}>
        <View style={styles.chatContainer}>
          <View style={styles.chatAvatar}>
            <Image
              source={images.chat_room_default_img}
              style={styles.chatImage}
            />
          </View>
          <View style={styles.chatDescRow}>
            <View style={styles.chatCase}>
              <Text numberOfLines={1}>{item.caseName}</Text>
            </View>
            <View style={styles.chatContentDesc}>
              <Text style={styles.chatContent} numberOfLines={1}>
                {/* {item.content} */}
                {parseChatContent(item)}
              </Text>
            </View>
          </View>
          <View style={styles.dateTimeBox}>
            <Text style={styles.dateTime}>{getChatDisplayTime(item)}</Text>
          </View>
          {item.unreadCount > 1 && (
            <UnreadBadge
              unreadCount={item.unreadCount}
              style={{ top: 20, right: 10 }}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  chatPage: {
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  chatDescRow: {},
  chatAvatar: {
    marginRight: 6,
    width: 52,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primaryBgColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatImage: {
    width: 30,
    height: 26,
    resizeMode: 'contain',
  },

  chatCase: {
    paddingLeft: 12,
    width: '80%',
    fontSize: 16,
    color: colors.jetBlack,
  },

  dateTime: {
    color: colors.paleSliver,
    fontSize: 12,
  },
  chatContentDesc: {
    position: 'relative',
    flexDirection: 'row',
    paddingTop: 4,
    paddingLeft: 12,
    width: '85%',
  },
  chatContent: {
    color: colors.slateGrey,
    fontSize: 12,
  },
  unreadText: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.white,
  },
  dateTimeBox: {
    position: 'absolute',
    right: 10,
    top: 0,
  },
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
})

export default ChatList
