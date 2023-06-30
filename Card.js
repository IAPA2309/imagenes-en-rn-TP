import { StyleSheet, Text, View, Image } from 'react-native'
import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Image source={require('./assets/How-to-Make-a-Mocha-Latte-65.jpg')} style={styles.image} resizeMode={"cover"}/>
        <Text style={styles.coffeName}>Mocha</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    position:'relative',
  },image: {
    width: 250,
    height: 300,
    borderRadius: 50,
    overflow: "hidden",
    borderColor: "#D7DAE0",
    borderWidth: 1
  },
  coffeName:{
    position:'absolute',
    bottom:0,
    left: 0,
    width:250,
    height:50,
    backgroundColor: "#2a7433",
    color:"#ffffff",
    textAlign:'center',
    padding: 10,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    fontWeight: 'bold'
  }
});

export default Card