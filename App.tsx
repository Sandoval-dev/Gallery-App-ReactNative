import { SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import Routes from './src/routes'

export class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1,}}>
        <Routes/>
      </SafeAreaView>
    )
  }
}

export default App