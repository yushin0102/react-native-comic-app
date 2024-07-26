import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@constants/route'

export type StackProps = NativeStackScreenProps<
  RootStackParamList,
  keyof RootStackParamList
>
