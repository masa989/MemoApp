import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { JSX } from 'react/jsx-runtime'
import { onSnapshot, doc } from 'firebase/firestore'
import { useState, useEffect } from 'react'

import Icon from '../../components/Icon'
import { router, useLocalSearchParams } from 'expo-router'
import { auth, db } from '../../config'
import { type Memo } from '../../../types/memo'

import CircleButton from '../../components/CircleButton'

const handlePress = (id: string): void => {
  router.push({ pathname: '/memo/edit', params: { id: id } })
}

const Detail = (): JSX.Element => {
  const id = String(useLocalSearchParams().id)
  const [memo, setMemo] = useState<Memo | null>(null)
  useEffect(() => {
    if (auth.currentUser === null) {
      return
    }
    //ドキュメントを取得
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    const unsubscribe = onSnapshot(ref, (memoDoc) => {
      console.log(memoDoc.data())
      //as は TypeScript の 型アサーション（type assertion） で、「この値は Memo 型として扱ってください」とコンパイラに伝える書き方です。
      const { bodyText, updatedAt } = memoDoc.data() as Memo
      setMemo({
        id: memoDoc.id,
        bodyText: bodyText,
        updatedAt: updatedAt
      })
    })
    return unsubscribe
  }, [])
  console.log(id)
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text
          style={styles.memoTitle}
          numberOfLines={1}
        >{memo?.bodyText}</Text>
        <Text style={styles.memoDate}>{memo?.updatedAt?.toDate().toLocaleString('ja-JP')}</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          {memo?.bodyText}
        </Text>
      </ScrollView>

      <CircleButton style={{
        top: 60,
        bottom: 'auto'
      }} onPress={() => { handlePress(id) }}>
        <Icon name='pencil' size={40} color='#ffffff' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  memoHeader: {
    backgroundColor: '#467fd3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold'
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingHorizontal: 27
  },
  memoBodyText: {
    paddingVertical: 32,
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  }
})

export default Detail
