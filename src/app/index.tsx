import { View, Text, StyleSheet } from 'react-native'
import { JSX } from 'react/jsx-runtime'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>メモアプリ</Text>
          <Text>ログアウト</Text>
        </View>
      </View>
      <View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2026年11月1日 10:12</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2026年11月1日 10:12</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2026年11月1日 10:12</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>

      <View>
        <Text>＋</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Index
