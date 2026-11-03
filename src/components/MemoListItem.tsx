import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { JSX } from 'react/jsx-runtime'
import { Link } from 'expo-router'

import Icon from './Icon'

const MemoListItem = (): JSX.Element => {
  return (
    <Link href='/memo/detail' asChild={true}>
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2026年11月1日 10:12</Text>
        </View>
        <TouchableOpacity>
          <Icon name='delete' size={30} color='#b0b0b0' />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  }
})

export default MemoListItem
