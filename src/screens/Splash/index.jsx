import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.isAuthenticated();
  }
  
  isAuthenticated=() =>{
    const {navigation} = this.props;
    navigation.addListener('focus', () => {
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    })
  }
  render() {
    return (
      <View>
        <Text>Yükleniyor...</Text>
      </View>
    )
  }
}

export default Splash