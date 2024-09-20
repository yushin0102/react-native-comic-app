import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Image } from 'expo-image'
import { colors } from '@theme'
import { FavoritesComic } from '@screens/Favorites/type'

const FavoriteItem: React.FC<{
  item: FavoritesComic
  isEditing: boolean
  selectedIds: string[]
  onToggleSelect: (id: string) => void
}> = ({ item, isEditing, selectedIds, onToggleSelect }) => {
  return (
    <TouchableOpacity onPress={() => onToggleSelect(item.id)}>
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
            onPress={() => onToggleSelect(item.id)}
            style={
              isEditing && [
                styles.circle,
                selectedIds.includes(item.id) && styles.checkedCircle,
              ]
            }
          >
            {selectedIds.includes(item.id) && isEditing && (
              <View style={styles.innerCircle} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.comicFotter}>
          <Text
            style={styles.comicTitle}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.title}
          </Text>
          <Text style={styles.comicTagText} numberOfLines={1}>
            {item.comicTag}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  favoritesContainer: {
    flex: 1,
    margin: 10,
    maxWidth: '33%',
  },

  imgesContext: {
    position: 'relative',
    width: 120,
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 10,
  },
  favoritesHidden: {
    width: 120,
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
  comicFotter: {
    width: 120,
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

export default FavoriteItem
