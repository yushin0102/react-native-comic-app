import { Asset } from 'expo-asset'

export const images: { [key: string]: ReturnType<typeof require> } = {
  logo: require('@assets/images/logo.svg'),
  logo_sm: require('@assets/images/logo-sm.png'),
  logo_lg: require('@assets/images/logo-lg.png'),
  pocketPro_logo: require('@assets/images/logo/pockepro-small-log.jpg'),
  chatRoomUserDefaultImg: require('@assets/images/icon/user-default.svg'),
  calendarOutlineIcon: require('@assets/images/icon/calendar-outline.svg'),
  calendarFilledIcon: require('@assets/images/icon/calendar-filled.svg'),
  contractListOutlineIcon: require('@assets/images/icon/contract-list-outline.svg'),
  contractListFilledIcon: require('@assets/images/icon/contract-list-filled.svg'),
  bookFavoritesOutlineIcon: require('@assets/images/icon/iconbook.png'),
  bookFavoritesFilledIcon: require('@assets/images/icon/icon-filled-book.png'),
  notificationIcon: require('@assets/images/icon/notification.svg'),
  chatRoomIcon: require('@assets/images/icon/chat-room-icon.svg'),
  testUserIcon: require('@assets/images/icon/test-user-icon.svg'),
}
// preload images
const preloadImages = () =>
  Object.keys(images).map((key) => {
    return Asset.fromModule(images[key]).downloadAsync()
  })

export const loadImages = async () => Promise.all(preloadImages())
