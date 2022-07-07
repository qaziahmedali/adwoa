import React, {useState} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  ActivityIndicator,
  Alert,
  Pressable,
} from 'react-native';

import {Colors} from '../../components/constants';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {toast} from '../../components/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from '../../Config/BaseUrl';
import Icon from 'react-native-vector-icons/Ionicons';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const changeIcon = passwordVisibility === true ? false : true;

  // random id ...
  var id = '';
  var characters = 'AEFGHbcdefghijklstuvwxyz0123456789';
  for (var i = 0; i < characters.length; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // fetching api ...
  const handleData = async () => {
    if (!name) {
      toast('Please enter your name');
      return;
    }
    if (!email) {
      toast('Please enter your email');
      return;
    }
    if (!password) {
      toast('Please enter your Pasword');
      return;
    }
    if (password.length < 5) {
      toast('password must be atleast 6 characters');
      return;
    }
    setDisabled(true);
    setLoading(true);
    await fetch(`${baseUrl}/api/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phone,
        role: 'seller',
      }),
    })
      .then(res => res.json())
      .then(res => {
        setLoading(false);
        if (res.message === 'This email is already taken.') {
          toast(res.message);
        }
        if (res.message === '"email" must be a valid email') {
          toast(res.message);
        }
        setDisabled(false);
        if (res.success === true) {
          setName('');
          setEmail('');
          setPassword('');
          setPhone('');

          toast(res.message);

          navigation.navigate('VerificationForAccount');
          AsyncStorage.setItem('email', res.data.user.email);
        }
      })
      .catch(err => {
        setLoading(false);
        setDisabled(false);
      });
  };

  const Login = () => {
    navigation.navigate('Login');
  };
  const handleDisableData = () => {
    toast('loading...');
  };
  return (
    <View style={styles.container}>
      <Header
        label={'Register'}
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
              placeholder="Name"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
              value={name}
              onChangeText={e => setName(e)}
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
          <View style={styles.inputViewForPassword}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputForPassword}
              secureTextEntry={passwordVisibility ? true : false}
              value={password}
              onChangeText={e => setPassword(e)}
            />
            <Pressable
              onPress={() => {
                setPasswordVisibility(changeIcon);
              }}
              style={styles.eyeView}>
              <Icon
                name={changeIcon ? 'eye' : 'eye-off'}
                size={22}
                color={Colors.BLACK}
                style={styles.eyeIcon}
              />
            </Pressable>
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Phone"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={e => setPhone(e)}
            />
          </View>

          <Button
            navigation={navigation}
            label={
              loading ? (
                <ActivityIndicator size="large" color={Colors.WHITE} />
              ) : (
                'Register'
              )
            }
            color={disabled ? Colors.DISABLEDCOLOR : Colors.RED}
            onPress={disabled ? handleDisableData : handleData}
          />
          <View style={styles.forgetButton}>
            <TouchableOpacity>
              <Text
                navigation={navigation}
                style={styles.forgetBtnText}
                onPress={Login}>
                Already have an account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    height: '100%',
  },
  mainForBody: {
    width: '93%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.9,
  },
  logoImg: {
    marginTop: 20,
    width: '70%',
    height: 100,
  },
  mainImg: {width: '90%', alignItems: 'center'},
  inputs: {
    paddingHorizontal: 10,
    color: Colors.BLACK,
  },
  inputView: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    marginVertical: 7,
  },
  inputForPassword: {
    paddingHorizontal: 10,
    color: Colors.BLACK,
    width: '90%',
  },
  inputViewForPassword: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    marginVertical: 7,
    flexDirection: 'row',
  },
  eyeView: {
    alignSelf: 'center',
  },
  forgetButton: {
    width: '100%',
    marginVertical: 4,
  },
  forgetBtnText: {
    color: Colors.GREY,
    alignSelf: 'flex-end',
  },
});
export default Register;
