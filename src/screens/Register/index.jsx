import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Entypo';
import { Formik } from 'formik';
import * as Yup from 'yup';


export class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSecure: true,
      isConfirmSecure: true
    }
  }

  _handleSubmit = (values, { resetForm, setSubmitting }) => {

  }
  render() {
    const { isSecure } = this.state;
    const { isConfirmSecure } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.formTopArea}>
            <Image resizeMode={"contain"} source={require("../../assets/logo/logocupcake.webp")} style={styles.formTopImage} />
            <Text style={styles.formTopText}> Galeri Kayıt Olma Ekranı</Text>
          </View>
          <Formik onSubmit={this._handleSubmit}
            validationSchema={Yup.object().shape({
              c_name: Yup.string().required('İsim gerekli'),
              c_surname: Yup.string().required('Soyisim gerekli'),
              email: Yup.string().required('Email adresi gerekli').email("Geçerli bir email giriniz"),
              password: Yup.string().min(8, 'Şifre en az 8 karakter olmalıdır').required('Şifre gerekli').max(16, 'Şifre en fazla 16 karakter olmalıdır'),
              passwordConfirm: Yup.string().required('Şifre tekrarı gerekli').oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor'),
            })}
            enableReinitialize={true} initialValues={{ c_name: '', c_surname: '', email: '', password: '', passwordConfirm: '' }}>
            {({ values, handleChange, errors, isSubmitting, touched, isValid, handleSubmit, handleBlur }) => (
              <View style={styles.formArea}>
                <View style={styles.formNameArea}>
                  <TextInput value={values.c_name} onChangeText={handleChange("c_name")} onBlur={handleBlur("c_name")} keyboardType='default' placeholder='İsminiz' style={styles.formNameInput} />
                  <Icon name='man' size={25} color='black' style={styles.formNameIcon} />
                </View>
                {(touched.c_name && errors.c_name) && <Text style={styles.errorText}>{errors.c_name}</Text>}
                <View style={styles.formSurNameArea}>
                  <TextInput value={values.c_surname} onChangeText={handleChange("c_surname")} onBlur={handleBlur("c_surname")} keyboardType='default' placeholder='Soyisminiz' style={styles.formSurNameInput} />
                  <Icon name='man' size={25} color='black' style={styles.formNameIcon} />
                </View>
                {(touched.c_surname && errors.c_surname) && <Text style={styles.errorText}>{errors.c_surname}</Text>}
                <View style={styles.formEmailArea}>
                  <TextInput value={values.email} onChangeText={handleChange("email")} onBlur={handleBlur("email")} keyboardType='email-address' placeholder='Email adresiniz' style={styles.formEmailInput} />
                  <Icon name='mail' size={25} color='black' style={styles.formEmailIcon} />
                </View>
                {(touched.email && errors.email) && <Text style={styles.errorText}>{errors.email}</Text>}
                <View style={styles.formPasswordArea}>
                  <TextInput value={values.password} onChangeText={handleChange("password")} onBlur={handleBlur("password")} placeholder='Şifreniz' style={styles.formPasswordInput} secureTextEntry={isSecure} />
                  <Icon name={isSecure ? 'eye-with-line' : 'eye'} size={25} color='black' style={styles.formPasswordIcon} onPress={() => this.setState({ isSecure: !isSecure })} />
                </View>
                {(touched.password && errors.password) && <Text style={styles.errorText}>{errors.password}</Text>}
                <View style={styles.formPasswordConfirmArea}>
                  <TextInput value={values.passwordConfirm} onBlur={handleBlur("passwordConfirm")} onChangeText={handleChange("passwordConfirm")} placeholder='Şifreniz Tekrar' style={styles.formPasswordConfirmInput} secureTextEntry={isConfirmSecure} />
                  <Icon name={isConfirmSecure ? 'eye-with-line' : 'eye'} size={25} color='black' style={styles.formPasswordIcon} onPress={() => this.setState({ isConfirmSecure: !isConfirmSecure })} />
                </View>
                {(touched.passwordConfirm && errors.passwordConfirm) && <Text style={styles.errorText}>{errors.passwordConfirm}</Text>}
                <TouchableOpacity onPress={handleSubmit} disabled={(!isValid || isSubmitting)} style={styles.formRegisterButton}>
                  <Text style={styles.formRegisterText}>Hesap Oluştur</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.formLoginAccount} onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.formLoginText}>Giriş Yap</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    )
  }
}

export default Register