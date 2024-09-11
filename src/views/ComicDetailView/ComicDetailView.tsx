import { colors } from '@theme'
import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import DetailFooter from '@views/ComicDetailView/DetailFooter'
const ComicDetailView: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpanded = () => setIsExpanded((prev) => !prev)

  const description =
    '想要我的財寶嗎？ 想要的話可以全部給你，去找吧！其個性因為具有前世作為和平世界的日本人記憶，因此個性天真並且和善，容易大意而被算計，但是因為是從維爾德拉的妖氣中誕生出來的特殊個體，因此從誕生之初就擁有驚人的魔素量（魔素量在A級以下的魔物甚至不能靠近維爾德拉，否則會因其散發的魔素過高而死亡），總是被他人認為是強者的盈餘。此外，由於還擁有『大賢者』這種輔助思考技能，使其所作所為都讓他人感受到一種深不可測的感覺，加上由於前世是死於隨機刺殺犯因此會堅守絕不退讓的底限，一旦觸及逆鱗就會變得冷酷，因此成為周遭的人們的警戒榜首，也時常有敵對方因為盲信個性天真的傳聞而踏過容許線，從而導致遭到毀滅性打擊'

  return (
    <View style={styles.comicViewContainer}>
      <View style={styles.header}>
        <Text style={styles.comicTitle}>OuOb漫畫</Text>
        <Text style={styles.comicRanking}>人氣排行</Text>
      </View>
      <View style={styles.comicInfo}>
        <View style={styles.comicType}>
          <Text style={styles.comicInfoText}>尾田榮一郎</Text>
          <Text style={styles.typeTag}>少年熱血</Text>
        </View>
        <Text style={styles.ranking}>No.2</Text>
      </View>
      <View style={styles.comicDescription}>
        <Text
          numberOfLines={isExpanded ? undefined : 3}
          style={styles.description}
          ellipsizeMode="tail" // 尾部顯示...
        >
          {description}
        </Text>
        <TouchableOpacity onPress={toggleExpanded}>
          <MaterialIcons
            name={isExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={24}
            color="black"
            style={styles.moreButton}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.updateInfo}>
        <View style={styles.updateInfoContentWithBorder}>
          <Text style={styles.updateInfoText}>09-09</Text>
          <Text style={styles.desc}>最近更新</Text>
        </View>
        <View style={styles.updateInfoContent}>
          <Text style={styles.updateInfoText}>8.5分</Text>
          <Text style={styles.desc}>漫畫評分</Text>
        </View>
      </View>
      <DetailFooter />
    </View>
  )
}

export default ComicDetailView

const styles = StyleSheet.create({
  comicViewContainer: {
    paddingHorizontal: 24,
    paddingVertical: 26,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  comicTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
  },
  comicRanking: {
    fontSize: 14,
    color: colors.comicDarkGray,
    marginTop: 8,
  },
  comicInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  comicInfoText: {
    fontSize: 14,
    color: colors.comicBlackTitle,
    paddingRight: 10,
    textDecorationLine: 'underline',
  },
  comicType: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeTag: {
    fontSize: 12,
    color: colors.comicDarkGray,
  },
  ranking: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.comicRanking,
  },
  comicDescription: {
    marginTop: 24,
    fontSize: 14,
    color: colors.comicBlackTitle,
    overflow: 'hidden',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  moreButton: {
    marginTop: 5,
    alignSelf: 'center',
  },
  updateInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    borderRadius: 10,
    borderColor: colors.comicWhiteBoder,
    borderWidth: 1,
  },
  updateInfoContentWithBorder: {
    alignItems: 'center',
    padding: 15,
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: colors.comicWhiteBoder,
  },

  updateInfoText: {
    fontSize: 20,
    color: colors.comicRanking,
    paddingVertical: 3,
  },
  updateInfoContent: {
    alignItems: 'center',
    padding: 15,
    flex: 1,
  },
  desc: {
    fontSize: 14,
    color: colors.comicDarkGray,
  },
})
