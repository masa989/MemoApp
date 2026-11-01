import { View, StyleSheet } from 'react-native'
import { JSX } from 'react/jsx-runtime'
import Icon from '../../components/Icon'

import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'


const List = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <Header />

      <View>

        <MemoListItem />
        <MemoListItem />
        <MemoListItem />

      </View>

      <CircleButton>
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
