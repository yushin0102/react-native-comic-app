import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { colors } from '@theme'

interface CategoryItemProps {
  iconComponent: React.ComponentType<any>
  iconName: string
  title: string
  routeName: string
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  iconComponent: Icon,
  iconName,
  title,
  routeName,
}) => {
  const navigation = useNavigation()
  const from = routeName as string

  return (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate(routeName, { from })}
    >
      <Icon name={iconName} size={24} color="black" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  categoryItem: { display: 'flex', alignItems: 'center' },

  title: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 14,
    color: colors.gray,
    fontWeight: 'bold',
  },
})

export default CategoryItem
