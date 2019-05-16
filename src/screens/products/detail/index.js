import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'


class ProductDetail extends Component {
  render() {
    return (
      <View>
         <TouchableOpacity onPress={this.props.backToProductScreen}>
          <View style={styles.btnBack}>
            <Text>Back</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>{this.props.product.name}</Text>
      </View>
    )
  }
}

export default ProductDetail;