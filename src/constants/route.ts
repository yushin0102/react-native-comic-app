export const RouteName = {
  Home: '首頁',
  HomeStack: '首頁Stack',
  HomeComicDetail: '首頁漫畫詳細介紹',
  Profile: '我的',
  Settings: '設定',
  Details: '詳細資料',
  ContractList: '不知叫啥',
  TaskCalendar: 'task-calendar',
  BookFavorites: '書架',
  BookFavoritesDetail: '書架內頁',
  LatestUpdates: 'latest-updates', // 最新更新
  NewArrivals: 'new-arrivals', // 最新上架
  PopularList: 'popular-list', // 人氣榜
  ComicCategories: 'comic-categories', // 漫畫分類
  ComicDetailScreen: '漫畫詳細介紹',
  BookFavoritesStack: '書架Stack',
  ComicContentScreen: '漫畫圖片內容',
  ComicContentStack: '漫畫內容Stack',
} as const

// 定義路由參數的總合型別，對應不同的路由名稱
export type RootStackParamList = {
  [RouteName.Home]: undefined
  [RouteName.HomeStack]: undefined
  [RouteName.Details]: undefined
  [RouteName.Profile]: { username: string }
  [RouteName.Settings]: { theme: string }
  [RouteName.ContractList]: { contractId: string }
  [RouteName.TaskCalendar]: { taskId: string }
  [RouteName.BookFavoritesStack]: undefined
  [RouteName.BookFavoritesDetail]: { BookFavoritesId: string }
  [RouteName.LatestUpdates]: undefined // 最新更新
  [RouteName.NewArrivals]: undefined // 最新上架
  [RouteName.PopularList]: undefined // 人氣榜
  [RouteName.ComicCategories]: undefined // 漫畫分類
  [RouteName.BookFavorites]: {
    screen: keyof RootStackParamList
    params?: { comicId: string }
  }
  [RouteName.ComicDetailScreen]: {
    screen: keyof RootStackParamList
    params?: { comicId: string }
  } // 漫畫詳細介紹的路由參數
  [RouteName.ComicContentScreen]: {
    params: { comicId: string }
    screen: keyof RootStackParamList
  } // 漫畫圖片內容的路由參數
}
