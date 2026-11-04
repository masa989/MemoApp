import { Stack } from 'expo-router'
import { JSX } from 'react/jsx-runtime'

const Layout = (): JSX.Element => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#467fd3'
    },
    headerTintColor: '#ffffff',
    headerTitle: 'メモアプリ',
    headerBackTitle: '戻る',
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold'
    }
  }} />
}

export default Layout
