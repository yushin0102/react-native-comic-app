import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { RootStackParamList } from '@constants/route'

export type TabBarStatus = {
  focused: boolean
  color: string
  size: number
}

export type TabProps = BottomTabScreenProps<
  RootStackParamList,
  keyof RootStackParamList
>
