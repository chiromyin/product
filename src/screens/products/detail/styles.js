import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  btnBack: {
    marginTop: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default styles