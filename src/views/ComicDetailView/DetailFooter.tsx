import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import Button from '@components/Button'
import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from '@theme'

const updateComicData = Array.from({ length: 20 }, (_, index) => ({
  key: '第',
  id: index + 1,
}))

const DetailSection: React.FC<{
  title: string
  buttonText: string
  iconColor: string
  buttonStyle: any
  textStyle: any
}> = ({ title, buttonText, iconColor, buttonStyle, textStyle }) => (
  <View style={styles.sectionContainer}>
    <View style={styles.sectionTitle}>
      <Text style={styles.sectionText}>{title}</Text>
      <View style={styles.underline} />
    </View>
    <View style={styles.buttonContainer}>
      {/* <TouchableOpacity
          style={styles.updateBox}
          // onPressIn={() => setIsExpanded(true)} // 當按下時觸發
          // onPressOut={() => setIsExpanded(false)} // 當放開時觸發
        >
          <Text style={styles.updateText}>更新至第200話</Text>
        </TouchableOpacity> */}
      <Button title={buttonText} titleStyle={textStyle} style={buttonStyle} />
      <Ionicons name="arrow-redo" size={16} color={iconColor} />
    </View>
  </View>
)

const DetailFooter: React.FC = () => {
  return (
    <View>
      <DetailSection
        title="連載中"
        buttonText="更新至第200話"
        iconColor={colors.warning}
        buttonStyle={styles.recentButton}
        textStyle={styles.updateText}
      />
      <FlatList
        horizontal
        keyExtractor={(item) => item.id.toString()}
        data={updateComicData.reverse()}
        renderItem={({ item }) => (
          <View style={styles.updateList}>
            <Text>
              {item.key} {item.id + 1} 話
            </Text>
          </View>
        )}
      />
      <DetailSection
        title="評論"
        buttonText="999+評論"
        iconColor={colors.warning}
        buttonStyle={styles.recentButton}
        textStyle={styles.commentText}
      />
      <Text style={{ marginTop: 30 }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, qui at
        architecto cumque ab, aliquid deleniti nisi eligendi veniam tenetur
        fugiat ipsa debitis asperiores minus, sunt incidunt! Eveniet natus,
        doloribus eaque porro praesentium impedit alias ratione dolorum, commodi
      </Text>
    </View>
  )
}

export default DetailFooter

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  sectionTitle: {
    position: 'relative',
  },
  sectionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  underline: {
    position: 'absolute',
    bottom: 3,
    left: 0,
    right: 0,
    height: 6,
    backgroundColor: colors.borderColorLight,
    borderRadius: 2,
    zIndex: -1,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 22,
    borderColor: colors.comicDarkGray,
    borderWidth: 1,
  },
  updateText: {
    color: colors.comicDarkGray,
  },
  recentButton: {
    paddingHorizontal: 5,
  },
  updateList: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginTop: 30,
    margin: 5,
    borderRadius: 6,
    borderColor: colors.borderColorDark,
    borderWidth: 1,
  },
  commentText: {
    color: colors.comicRanking,
  },
})
