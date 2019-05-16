import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

const products = [
  { id: 1, name: "Shirt 1", image: "http://www.iconarchive.com/download/i63349/cornmanthe3rd/plex/Internet-chrome.ico" },
  { id: 2, name: "Shirt 2", image: "http://www.iconarchive.com/download/i63349/cornmanthe3rd/plex/Internet-chrome.ico" },
  { id: 3, name: "Shirt 3", image: "http://www.iconarchive.com/download/i63349/cornmanthe3rd/plex/Internet-chrome.ico" },
  { id: 4, name: "Shirt 4", image: "http://www.iconarchive.com/download/i63349/cornmanthe3rd/plex/Internet-chrome.ico" },
  { id: 5, name: "Shirt 5", image: "http://www.iconarchive.com/download/i63349/cornmanthe3rd/plex/Internet-chrome.ico" },
  { id: 6, name: "Shirt 6", image: "http://www.iconarchive.com/download/i63349/cornmanthe3rd/plex/Internet-chrome.ico" },
  { id: 7, name: "Shirt 7", image: "http://www.iconarchive.com/download/i63349/cornmanthe3rd/plex/Internet-chrome.ico" },
]

class Products extends Component {
  // onPress = product => {
  //   alert(`Hello ${product.name}`)
  // }

  render() {
    return (
      <View style={styles.container}>
        {
          products.map(product => (
            <TouchableOpacity key={product.id} onPress={ () => this.props.onProductPress(product) }>
              <View  key={product.id} style={styles.product}>
                <Text style={styles.title}>{product.name}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}

export default Products