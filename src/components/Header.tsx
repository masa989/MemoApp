import { View, Text, StyleSheet } from 'react-native'
import { JSX } from 'react/jsx-runtime'

const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.headerTitle}>メモアプリ</Text>
        <Text style={styles.headerRight}>ログアウト</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#467FD3',
    height: 104,
    justifyContent: 'flex-end'

  },
  headerInner: {
    alignItems: 'center'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: '#ffffff',
    opacity: .7
  },
  headerTitle: {
    marginBottom: 10,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#ffffff'
  }
})

export default Header
