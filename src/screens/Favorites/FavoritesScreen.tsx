import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { colors } from '@theme'
import { FavoritesScreenProps, FavoritesComic } from '@screens/Favorites/type'
import FavoriteItem from '@views/StackHeader/Favorites/FavoritesItems'
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
    if (id.length === 0) return
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

  const renderItem = ({ item }: { item: FavoritesComic }) => (
    <FavoriteItem
      item={item}
      isEditing={isEditing}
      selectedIds={selectedIds}
      onToggleSelect={handleToggleSelect}
    />
  )

  return (
    <>
      {defaultData.length === 0 && (
        <View style={styles.notFoundFavoritesItems}>
          <Text style={styles.notFoundFavoritesText}>目前尚無收藏</Text>
        </View>
      )}
      <FlatList
        data={defaultData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.listContainer}
      />
      {isEditing && defaultData.length !== 0 && (
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
  notFoundFavoritesItems: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundFavoritesText: {
    fontSize: 30,
    color: colors.comicDarkGray,
  },
})

export default FavoritesScreen
