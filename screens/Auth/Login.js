import React, {useState} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
} from 'react-native';
import {Colors} from '../../components/constants';
import Button from '../../components/Button';
import Header from '../../components/Header';

import {toast} from '../../components/Toast';
import {baseUrl} from '../../Config/BaseUrl';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const ForgetPassword = () => {
    navigation.navigate('VerificationEmail');
  };
  const handleData = async () => {
    if (!email) {
      toast('Please enter your email');
      return;
    }
    if (!password) {
      toast('Pasword must be 6 character at least');
      return;
    }
    await fetch(`${baseUrl}/api/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'success') {
          setEmail('');
          setPassword('');
          toast('signIn successfully');
          navigation.navigate('BottomTabbe');
        } else {
          toast('email is not existing');
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <Header
        label={'Login'}
        navigation={navigation}
        color={Colors.RED}
        menuIcon={false}
        align={'center'}
      />

      <ScrollView>
        <View style={styles.mainForBody}>
          <View style={styles.mainImg}>
            <Image
              source={require('../../assets/Logo.png')}
              style={styles.logoImg}
              resizeMode="contain"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
              keyboardType="email-address"
              value={email}
              onChangeText={e => setEmail(e)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
              secureTextEntry={true}
              value={password}
              onChangeText={e => setPassword(e)}
            />
          </View>
          <View style={styles.forgetButton}>
            <TouchableOpacity>
              <Text
                navigation={navigation}
                onPress={ForgetPassword}
                style={styles.forgetBtnText}>
                Forget Password?
              </Text>
            </TouchableOpacity>
          </View>
          <Button
            navigation={navigation}
            label={'Login'}
            color={Colors.RED}
            onPress={handleData}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  mainForBody: {
    width: '100%',
    alignItems: 'center',
    flex: 0.9,
  },
  logoImg: {
    marginTop: 20,
    width: '70%',
    height: 90,
  },
  mainImg: {width: '100%', alignItems: 'center'},
  inputs: {
    paddingHorizontal: 10,
  },
  inputView: {
    width: '90%',
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    marginVertical: 7,
  },
  forgetButton: {
    width: '90%',
    marginVertical: 4,
  },
  forgetBtnText: {
    color: Colors.GREY,
    alignSelf: 'flex-end',
  },
});
export default Login;
