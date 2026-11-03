import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { JSX } from 'react/jsx-runtime'
import { Link, router } from 'expo-router'

import Header from '../../components/Header'
import Button from '../../components/Button'

const handlePress = (): void => {
  //ログイン
  router.push('/memo/list')
}

const LogIn = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput style={styles.input} value='メールアドレス' />
        <TextInput style={styles.input} value='パスワード' />
        <Button label='ログイン' onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>会員でない場合はこちら</Text>
          <Link href='/auth/sign_up' asChild={true}>
            <TouchableOpacity>
              <Text style={styles.footerLink}>新規登録</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8'
  },
  inner: {
    paddingVertical: 34,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dddddd',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
    borderRadius: 4
  },

  footer: {
    flexDirection: 'row'

  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fd3'
  }
})

export default LogIn
