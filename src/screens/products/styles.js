import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 5
  },
  product: {
    backgroundColor: 'blue',
    height: 100,
    width: (width / 2) - 15,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default styles