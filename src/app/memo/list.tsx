import { View, Text, StyleSheet } from 'react-native'
import { JSX } from 'react/jsx-runtime'
import Icon from '../../components/Icon'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import LogOutButton from '../../components/LogOutButton'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  //ナビゲーションオブジェクトを取得
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <LogOutButton />
      }
    })
  }, [])



  return (
    <View style={styles.container}>

      <View>

        <MemoListItem />
        <MemoListItem />
        <MemoListItem />

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
