import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

import Products from './src/screens/products'
import ProductDetail from './src/screens/products/detail'

export default class App extends Component {
  state = {
    screen: "Products",
    product: {}
  }

  onProductPress = product => {
    this.setState({ screen: "Product Detail", product })
  }

  backToProductScreen = () => {
    this.setState({ screen: "Products" })
  }

  render() {
    if (this.state.screen === "Products") {
      return (
        <View style={styles.container}>
          <Products
            onProductPress={this.onProductPress}
          />
        </View>
      )
    }

    if (this.state.screen === "Product Detail") {
      return (
        <View style={styles.container}>
          <ProductDetail
             product={this.state.product}
             backToProductScreen={this.backToProductScreen}
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
  