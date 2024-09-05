import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  ListRenderItem,
} from 'react-native'
import Button from '@components/Button'
import ClassicComic from '@views/Home/ClassicComic'
import RecentScrollView from '@views/Home/RecentScrollView'
import { colors } from '@theme'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import AntDesign from '@expo/vector-icons/AntDesign'
import CategoryItem from './CategoryItem'
import { RouteName } from '@constants/route'
import Ionicons from '@expo/vector-icons/Ionicons'

type SectionItem = {
  title: string
  data: string[]
}
const sections: SectionItem[] = [
  {
    title: 'Category',
    data: ['category'],
  },
  {
    title: 'Recent',
    data: ['recent'],
  },
  {
    title: 'Classic',
    data: ['classic'],
  },
]

const CategorySection: React.FC = () => (
  <View style={styles.homeCategory}>
    <CategoryItem
      iconComponent={AntDesign}
      iconName="rocket1"
      title="最新更新"
      routeName={RouteName.LatestUpdates}
    />
    <CategoryItem
      iconComponent={MaterialCommunityIcons}
      iconName="inbox-arrow-up-outline"
      title="最新上架"
      routeName={RouteName.Details}
    />
    <CategoryItem
      iconComponent={MaterialCommunityIcons}
      iconName="crown-outline"
      title="人氣榜"
      routeName={RouteName.PopularList}
    />
    <CategoryItem
      iconComponent={MaterialIcons}
      iconName="category"
      title="漫畫分類"
      routeName={RouteName.ComicCategories}
    />
  </View>
)

const RecentSection: React.FC = () => (
  <View style={styles.recentContainer}>
    <View style={styles.moreContent}>
      <Text style={styles.sectionTitle}>最近在看</Text>
      <View style={styles.recentButtonContent}>
        <Button
          title="More"
          titleStyle={styles.recentButtonTitle}
          style={styles.recentButton}
        />
        <Ionicons name="arrow-redo" size={16} color={colors.warning} />
      </View>
    </View>
    <RecentScrollView />
  </View>
)

const ClassicSection: React.FC = () => (
  <View style={styles.classicContainer}>
    <View style={styles.moreContent}>
      <Text style={styles.sectionTitle}>那些經典大作！</Text>
      <View style={styles.recentButtonContent}>
        <Button
          title="More"
          titleStyle={styles.recentButtonTitle}
          style={styles.recentButton}
        />
        <Ionicons name="arrow-redo" size={16} color={colors.warning} />
      </View>
    </View>
    <ClassicComic />
  </View>
)

const renderItem: ListRenderItem<string> = ({ item }) => {
  switch (item) {
    case 'category':
      return <CategorySection />
    case 'recent':
      return <RecentSection />
    case 'classic':
      return <ClassicSection />
    default:
      return null
  }
}

const Profile: React.FC = () => {
  return (
    <SectionList
      sections={sections}
      renderItem={renderItem}
      keyExtractor={(item, index) => item + index}
      contentContainerStyle={styles.profilePage}
    />
  )
}

const styles = StyleSheet.create({
  profilePage: {
    backgroundColor: colors.white,
    padding: 20,
  },

  homeCategory: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  recentContainer: {
    marginTop: 30,
  },

  moreContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  recentButtonTitle: {
    fontSize: 14,
    color: colors.black,
    textAlign: 'center',
  },
  recentButton: {
    paddingHorizontal: 5,
  },
  recentButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderRadius: 22,
    height: 32,
    borderColor: colors.comicDarkGray,
    borderWidth: 1,
  },
  buttonTitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 22,
    height: 44,
    width: '50%',
    backgroundColor: colors.lightPurple,
  },
  // 經典大作區域的ui
  classicContainer: {
    marginTop: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
})

export default Profile
