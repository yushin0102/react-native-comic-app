import { colors } from '@theme'
import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const DetailFooter: React.FC = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.updateInfo}>
        <View style={styles.updateInfoTitle}>
          <Text style={styles.updateInfoText}>評論</Text>
          <View style={styles.underline} />
        </View>
        <TouchableOpacity
          style={styles.updateBox}
          // onPressIn={() => setIsExpanded(true)} // 當按下時觸發
          // onPressOut={() => setIsExpanded(false)} // 當放開時觸發
        >
          <Text style={styles.updateText}>更新至第200話</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DetailFooter

const styles = StyleSheet.create({
  footerContainer: {
    paddingVertical: 26,
    justifyContent: 'center',
  },
  updateInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  updateInfoTitle: {
    position: 'relative',
  },
  updateInfoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  underline: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    height: 6,
    backgroundColor: colors.borderColorLight,
    borderRadius: 2,
    zIndex: -1,
  },
  updateBox: {
    borderColor: colors.comicDarkGray,
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },

  updateText: {
    color: colors.comicDarkGray,
  },
})
