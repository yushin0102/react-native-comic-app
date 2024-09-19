import React, { useEffect, useState } from 'react'
import Slider from '@react-native-community/slider' // 需要安裝 @react-native-community/slider
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  ListRenderItem,
  Modal,
  TouchableOpacity,
} from 'react-native'
import * as Brightness from 'expo-brightness'
import Button from '@components/Button'
import Feather from '@expo/vector-icons/Feather'
const ComicContentScreen: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [brightness, setBrightness] = useState(1) // 預設螢幕亮度

  // 請求調整螢幕亮度的權限
  useEffect(() => {
    const getBrightness = async () => {
      const { status } = await Brightness.requestPermissionsAsync()
      if (status !== 'granted') {
        alert('Permission to adjust brightness is required!')
        return
      }
      const currentBrightness = await Brightness.getBrightnessAsync()
      setBrightness(currentBrightness)
    }
    getBrightness()
  }, [])

  const handleBrightnessChange = async (value: number) => {
    setBrightness(value)
    await Brightness.setBrightnessAsync(value) // 調整螢幕亮度
  }

  return (
    <View style={{ marginTop: 100 }}>
      <Text>漫畫詳細圖頁面 </Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Feather name="sun" size={24} color="black" />
      </TouchableOpacity>
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Slider
              style={{ width: 300, height: 40 }}
              minimumValue={0}
              maximumValue={1}
              value={brightness}
              onValueChange={handleBrightnessChange}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ComicContentScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
})
