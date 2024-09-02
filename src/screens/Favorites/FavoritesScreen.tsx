import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Image } from 'expo-image'
import { colors } from '@theme'
import { FavoritesScreenProps, FavoritesComic } from '@screens/Favorites/type'

const comicsData: FavoritesComic[] = [
  {
    id: '1',
    title: '關於我轉生成史萊姆這黨事',
    imageUrl: require('@assets/images/melamo.jpeg'),
    comicTag: '第121話/第122話',
    newUpdate: false,
  },
  {
    id: '2',
    title: '我推的孩子',
    imageUrl: require('@assets/images/ido.jpeg'),
    comicTag: '第21話/第222話',
    newUpdate: true,
  },
  {
    id: '3',
    title: '我獨自升級',
    imageUrl: require('@assets/images/leveup.jpeg'),
    comicTag: '第31話/第622話',
    newUpdate: false,
  },
  {
    id: '4',
    title: '86不存在的戰區',
    imageUrl: require('@assets/images/86.jpeg'),
    comicTag: '第71話/第92話',
    newUpdate: false,
  },
]

const FavoritesScreen: React.FC<FavoritesScreenProps> = ({
  isEditing,
  onToggleEditMode,
}) => {
  const navigation = useNavigation()

  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [defaultData, setDefaultData] = useState<FavoritesComic[]>(comicsData)

  const handleToggleSelect = (id: string) => {
    setSelectedIds((prv) =>
      prv.includes(id) ? prv.filter((item) => item !== id) : [...prv, id],
    )
  }

  const handleToggleSelectAll = () => {
    setSelectedIds((prv) =>
      prv.length === comicsData.length ? [] : comicsData.map((item) => item.id),
    )
  }

  const handleDeleteItem = (id: string[]) => {
    setDefaultData((prv) => prv.filter((item) => !id.includes(item.id)))
    onToggleEditMode()
  }

  useEffect(() => {
    if (isEditing) {
      navigation.setOptions({ tabBarVisible: false })
    } else {
      navigation.setOptions({ tabBarVisible: true })
    }
  }, [isEditing])

  useEffect(() => {
    if (!isEditing) {
      setSelectedIds([])
    }
  }, [isEditing])

  const renderItem: ListRenderItem<FavoritesComic> = ({ item }) => (
    <View style={styles.favoritesContainer}>
      <View style={styles.imgesContext}>
        <Image
          source={item.imageUrl}
          style={!isEditing ? styles.image : styles.favoritesHidden}
        />
        {item.newUpdate && (
          <View style={styles.imgText}>
            <Text>New</Text>
          </View>
        )}
        <TouchableOpacity
          style={
            isEditing && [
              styles.circle,
              selectedIds.includes(item.id) && styles.checkedCircle,
            ]
          }
          onPress={() => handleToggleSelect(item.id)}
        >
          {selectedIds.includes(item.id) && isEditing && (
            <View style={styles.innerCircle} />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.comicTitle} numberOfLines={1} ellipsizeMode="tail">
        {item.title}
      </Text>
      <Text style={styles.comicTagText} numberOfLines={1}>
        {item.comicTag}
      </Text>
    </View>
  )

  return (
    <>
      <FlatList
        data={defaultData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.listContainer}
      />
      {isEditing && (
        <TouchableWithoutFeedback onPress={onToggleEditMode}>
          <View style={styles.fullScreenModalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <TouchableOpacity onPress={handleToggleSelectAll}>
                  <Text style={styles.modalText}>全選</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity onPress={() => handleDeleteItem(selectedIds)}>
                  <Text style={styles.modalText}>刪除</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
  favoritesContainer: {
    flex: 1,
    margin: 10,
  },

  imgesContext: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  favoritesHidden: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    opacity: 0.5,
  },
  imgText: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: colors.comicHintGreen,
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 16,
  },
  comicTitle: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  comicTagText: {
    marginTop: 5,
    fontSize: 16,
    color: colors.comicDarkGray,
    textAlign: 'center',
  },
  circle: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    height: 24,
    width: 24,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    borderColor: 'black',
  },
  innerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: colors.comicHintGreen,
  },
  fullScreenModalContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
  },
  modalText: {
    fontSize: 18,
  },
})

export default FavoritesScreen
