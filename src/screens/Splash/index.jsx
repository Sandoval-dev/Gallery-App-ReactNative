import { ActivityIndicator, Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Entypo';


export class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.isAuthenticated();
  }

  isAuthenticated = () => {
    const { navigation } = this.props;
    navigation.addListener('focus', () => {
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Icon name="images" size={30} color="#000" />
        <ActivityIndicator size={30} style={styles.indicator} color="#000" />

      </View>
    )
  }
}

export default Splash