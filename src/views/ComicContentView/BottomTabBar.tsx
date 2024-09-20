import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native'
import Slider from '@react-native-community/slider'
import Feather from '@expo/vector-icons/Feather'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Fontisto from '@expo/vector-icons/Fontisto'
import Button from '@components/Button'
import * as Brightness from 'expo-brightness'

export default function BottomTabBar() {
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
    <View style={styles.container}>
      {/* 返回按鈕和進度條 */}
      <View style={styles.topRow}>
        <TouchableOpacity>
          <EvilIcons name="chevron-left" size={40} color="#6F6C67" />
        </TouchableOpacity>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={15}
          value={7} // 目前進度
          minimumTrackTintColor="#f9a825"
          maximumTrackTintColor="#e0e0e0"
          thumbTintColor="#f9a825"
        />
        <TouchableOpacity>
          <EvilIcons name="chevron-right" size={40} color="#6F6C67" />
        </TouchableOpacity>
      </View>

      {/* 底部按鈕區 */}
      <View style={styles.bottomRow}>
        <TouchableOpacity>
          <Feather name="bookmark" style={styles.iconColor} />
          <Text>章節</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)}>
          <Feather name="sun" style={styles.iconColor} />
          <Text>亮度</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Fontisto name="commenting" style={styles.iconColor} />
          <Text>評論</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather name="settings" style={styles.iconColor} />
          <Text>設定</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={isModalVisible} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
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
            <Button title="關閉" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  iconColor: {
    color: '#6F6C67',
    marginBottom: 8,
    fontSize: 26,
  },
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingTop: 30,
    paddingBottom: 35,
    borderColor: '#e0e0e0',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
