import { Provider } from 'react-redux'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Navigator from '@navigator'
import store from '@utils/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}
