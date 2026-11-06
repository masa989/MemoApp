import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import { JSX } from 'react/jsx-runtime'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { signInWithEmailAndPassword, signInAnonymously } from '@firebase/auth'

import Button from '../../components/Button'
import { auth } from '../../config'

const handlePressSigninAnonymously = (): void => {
  signInAnonymously(auth)
    .then(() => {
      router.replace('/memo/list')
    })
    .catch((error) => {
      const errorMessage = error.message
      console.log(errorMessage)
    })
}

const handlePress = (email: string, password: string): void => {
  //会員登録
  console.log(email, password)
  signInWithEmailAndPassword(auth, email, password)
    .then((useCredential) => {
      console.log(useCredential.user.uid)
      router.replace('/memo/list')
    })
    .catch((error) => {
      const { code, message } = error
      console.log(code, message)
      Alert.alert(message)
    })

}

const LogIn = (): JSX.Element => {
  //const {name} = props これと同じようにuseStateが実行された返り値からemailを取り出す
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text) }}
          autoCapitalize='none'
          keyboardType='email-address'
          placeholder='メールアドレス'
          textContentType='emailAddress'
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text) }}
          autoCapitalize='none'
          secureTextEntry={true}
          placeholder='パスワード'
          textContentType='password'
        />
        <Button label='ログイン' onPress={() => handlePress(email, password)} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>会員でない場合はこちら</Text>
          <Link href='/auth/sign_up' asChild={true} replace={true}>
            <TouchableOpacity>
              <Text style={styles.footerLink}>新規登録</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => {
            handlePressSigninAnonymously()
          }}>
            <Text style={styles.footerLinkGuestText}>ゲストユーザーで使用する</Text>
          </TouchableOpacity>
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
    flexDirection: 'row',
    height: 32
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
  },
  footerLinkGuestText: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fd3'
  }
})

export default LogIn
