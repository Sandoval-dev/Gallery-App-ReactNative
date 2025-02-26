import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Entypo';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppUrl from '../../RestAPI/AppUrl';

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSecure: true,
    }
  }
  _handleSubmit = (values, { resetForm, setSubmitting }) => {

  }
  render() {
    Alert.alert(AppUrl.login)
    const { isSecure } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.formTopArea}>
            <Image resizeMode={"contain"} source={require("../../assets/logo/logocupcake.webp")} style={styles.formTopImage} />
            <Text style={styles.formTopText}> Galeri Giriş Ekranı</Text>
          </View>
          <Formik onSubmit={this._handleSubmit}
            validationSchema={Yup.object().shape({
              email: Yup.string().required('Email adresi gerekli').email("Geçerli bir email giriniz"),
              password: Yup.string().min(8, 'Şifre en az 8 karakter olmalıdır').required('Şifre gerekli').max(16, 'Şifre en fazla 16 karakter olmalıdır'),
            })}
            enableReinitialize={true} initialValues={{ email: '', password: '' }}>
            {({ values, handleChange, errors, isSubmitting, touched, isValid, handleSubmit, handleBlur }) => (

              <View style={styles.formArea}>
                <View style={styles.formEmailArea}>
                  <TextInput value={values.email} onChangeText={handleChange("email")} onBlur={handleBlur("email")}
                  keyboardType='email-address' placeholder='Email adresiniz' style={styles.formEmailInput} />
                  <Icon name='mail' size={25} color='black' style={styles.formEmailIcon} />
                </View>
                {(touched.email && errors.email) && <Text style={styles.errorText}>{errors.email}</Text>}
                <View style={styles.formPasswordArea}>
                  <TextInput value={values.password} onChangeText={handleChange("password")} onBlur={handleBlur("password")} placeholder='Şifreniz' style={styles.formPasswordInput} secureTextEntry={isSecure} />
                  <Icon name={isSecure ? 'eye-with-line' : 'eye'} size={25} color='black' style={styles.formPasswordIcon} onPress={() => this.setState({ isSecure: !isSecure })} />
                </View>
                {(touched.password && errors.password) && <Text style={styles.errorText}>{errors.password}</Text>}
                <TouchableOpacity onPress={handleSubmit} disabled={(!isValid || isSubmitting)} style={styles.formLoginButton}>
                  <Text style={styles.formLoginText}>Giriş Yap</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.formCreateAccount} onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.formCreateText}>Hesap Oluştur</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    )
  }
}

export default Login