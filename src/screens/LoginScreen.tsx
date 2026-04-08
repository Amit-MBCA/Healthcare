import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, Alert, Image } from 'react-native';
import { useLoginMutation } from '../redux/api';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/authSlice';
import fontSizes from '../themes/fontSizes';
import { fontFamily } from '../assets/fonts/fontFamily';
import Spacer from '../components/spacer';
import { topInset, width } from '../themes/spacing';
import { colors } from '../themes/colors';
import CustomTextInput from '../components/CustomTextInput';
import { appImages } from '../themes/appImages';
import CustomButton from '../components/CustomButton';
import LoadingModal from '../components/LoadingModal';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const result = await login({ email, password }).unwrap();
      dispatch(setCredentials({ user: result.user, token: result.token }));
    } catch (err) {
      Alert.alert('Login Failed', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Spacer height={topInset} />
      <Text style={styles.header}>LOGIN</Text>
      <Spacer height={width * 0.15} />
      <Text style={styles.title}>Healthcare</Text>
      <Spacer height={width * 0.15} />
      <CustomTextInput
        title="Email Id"
        leftIcon={appImages.email}
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
      />
      <Spacer height={width * 0.08} />
      <CustomTextInput
        title="Password"
        leftIcon={appImages.lock}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => { }}>
        <Text style={styles.forgotPassword}>Forgot Password !</Text>
      </TouchableOpacity>

      <Spacer height={width * 0.08} />

      <View style={styles.row}>
        <Text style={styles.dontHaveAccount}>Don't have an account:</Text>
        <TouchableOpacity onPress={() => { }}>
          <Text style={[styles.dontHaveAccount, { color: '#04238E' }]}>Click here to register</Text>
        </TouchableOpacity>
      </View>
      <Spacer height={width * 0.27} />

      <CustomButton
        title="LOGIN"
        onPress={handleLogin}
      />

      <LoadingModal
        visible={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width * 0.05
  },
  header: {
    fontSize: fontSizes.f24,
    fontFamily: fontFamily.medium,
    textAlign: 'center',
    color: '#333'
  },
  title: {
    fontSize: fontSizes.f40,
    fontFamily: fontFamily.medium,
    textAlign: 'center',
    color: '#333'
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  },
  forgotPassword: {
    fontSize: fontSizes.f14,
    fontFamily: fontFamily.medium,
    textAlign: 'right',
    color: '#04238E'
  },
  dontHaveAccount: {
    fontSize: fontSizes.f14,
    fontFamily: fontFamily.medium,
    textAlign: 'right',
    color: colors.black
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  }
});
