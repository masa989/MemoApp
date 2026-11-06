import { View, StyleSheet, FlatList } from 'react-native'
import { JSX } from 'react/jsx-runtime'
import Icon from '../../components/Icon'
import { router, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import LogOutButton from '../../components/LogOutButton'
import { db, auth } from '../../config'
import { type Memo } from '../../../types/memo'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const [memos, setMemos] = useState<Memo[]>([])

  //ナビゲーションオブジェクトを取得
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <LogOutButton />
      }
    })
  }, [])
  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    const q = query(ref, orderBy('updatedAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const remoteMemos: Memo[] = []
      //firebaseからMemoをひとつずつ取り出す
      snapshot.forEach((doc) => {
        // console.log('memo', doc.data())
        const { bodyText, updatedAt } = doc.data()
        remoteMemos.push({
          id: doc.id,
          bodyText: bodyText,
          updatedAt: updatedAt
        })
      })
      //取り出したメモをStateに反映させる
      setMemos(remoteMemos)
    })

    return unsubscribe
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={({ item }) => {
          return <MemoListItem memo={item} />
        }}
      />
      <View>

        {/* FlatListを使用するため削除 */}
        {/* {memos.map((memo) => {
          return <MemoListItem key={memo.id} memo={memo} />
        })} */}

      </View>

      <CircleButton onPress={handlePress}>
        <Icon name='plus' size={40} color='#ffffff' />
      </CircleButton>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default List
