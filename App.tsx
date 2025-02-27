import { SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import Routes from './src/routes'
import {Provider} from 'mobx-react';
import store from './src/store';

export class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <SafeAreaView style={{ flex: 1, }}>
          <Routes />
        </SafeAreaView>
      </Provider>

    )
  }
}

export default App