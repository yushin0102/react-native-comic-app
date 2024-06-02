import { Asset } from 'expo-asset'

export const images: { [key: string]: ReturnType<typeof require> } = {
  logo: require('@assets/images/logo.svg'),
  logo_sm: require('@assets/images/logo-sm.png'),
  logo_lg: require('@assets/images/logo-lg.png'),
  pocketPro_logo: require('@assets/images/logo/pockepro-small-log.jpg'),
  chat_room_default_img: require('@assets/images/icon/user-default.svg'),
  calendar_outline_icon: require('@assets/images/icon/calendar-outline.svg'),
  calendar_filled_icon: require('@assets/images/icon/calendar-filled.svg'),
  contract_list_outline_icon: require('@assets/images/icon/contract-list-outline.svg'),
  contract_list_filled_icon: require('@assets/images/icon/contract-list-filled.svg'),
  Invite_outline_icon: require('@assets/images/icon/invite-outline.svg'),
  Invite_filled_icon: require('@assets/images/icon/invite-filled.svg'),
}
// preload images
const preloadImages = () =>
  Object.keys(images).map((key) => {
    return Asset.fromModule(images[key]).downloadAsync()
  })

export const loadImages = async () => Promise.all(preloadImages())
