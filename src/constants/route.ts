export const RouteName = {
  Home: 'Home',
  Profile: 'profile',
  Settings: 'Settings',
  Details: 'Details',
  ChatList: 'chat-list',
  Chat: 'chat',
  ContractList: 'contractList',
  TaskCalendar: 'task-calendar',
  Invite: 'invite',
  InviteDetail: 'invite-detail',
  LatestUpdates: 'latest-updates', // 最新更新
  NewArrivals: 'new-arrivals', // 最新上架
  PopularList: 'popular-list', // 人氣榜
  ComicCategories: 'comic-categories', // 漫畫分類
} as const

// 定義路由參數的總合型別，對應不同的路由名稱
export type RootStackParamList = {
  [RouteName.Home]: { userId: string }
  [RouteName.Details]: undefined
  [RouteName.Profile]: { username: string }
  [RouteName.Settings]: { theme: string }
  [RouteName.ChatList]: undefined
  [RouteName.Chat]: { userId: string }
  [RouteName.ContractList]: { contractId: string }
  [RouteName.TaskCalendar]: { taskId: string }
  [RouteName.Invite]: undefined
  [RouteName.InviteDetail]: { inviteId: string }
  [RouteName.LatestUpdates]: undefined // 最新更新
  [RouteName.NewArrivals]: undefined // 最新上架
  [RouteName.PopularList]: undefined // 人氣榜
  [RouteName.ComicCategories]: undefined // 漫畫分類
}
