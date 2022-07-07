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
import {baseUrl} from '../../Config/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const changeIcon = passwordVisibility === true ? false : true;
  // const handlePasswordVisibility = () => {
  //   if (rightIcon === 'eye') {
  //     setRightIcon('eye-off');
  //     setPasswordVisibility(!passwordVisibility);
  //   } else if (rightIcon === 'eye-off') {
  //     setRightIcon('eye');
  //     setPasswordVisibility(!passwordVisibility);
  //   }
  // };
  const ForgetPassword = () => {
    navigation.navigate('SendEmail');
  };

  const storeData = async (userToken, userData) => {
    console.log('ye h usertoken', userToken, userData);
    try {
      await AsyncStorage.setItem('userToken', JSON.stringify(userToken));
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      navigation.navigate('LoginNow');
    } catch (e) {
      console.log('error', e);
    }
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
    setDisabled(true);
    setLoading(true);
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
        setLoading(false);
        if (res.message === 'Username or password is wrong!') {
          toast(res.message);
        }
        if (res.message === '"email" must be a valid email') {
          toast(res.message);
        }
        setDisabled(false);

        if (res.message === 'success') {
          setEmail('');
          setPassword('');
          if (res.data.emailVerified === false) {
            navigation.navigate('VerificationForAccount');
            toast('email is not verified');
          } else {
            storeData('userToken', res);
            toast('login successfully');
          }
        }
      })
      .catch(err => {
        setLoading(false);
        toast('something went wrong ');
        setDisabled(false);
      });
  };
  const handleDisableData = () => {
    toast('loading...');
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
            label={
              loading ? (
                <ActivityIndicator size="small" color={Colors.WHITE} />
              ) : (
                'Login'
              )
            }
            color={disabled ? Colors.DISABLEDCOLOR : Colors.RED}
            onPress={disabled ? handleDisableData : handleData}
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
    width: '93%',
    alignSelf: 'center',
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
    color: Colors.BLACK,
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
  inputView: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    marginVertical: 7,
  },
  forgetButton: {
    width: '100%',
    marginVertical: 4,
  },
  eyeView: {
    alignSelf: 'center',
  },
  forgetBtnText: {
    color: Colors.GREY,
    alignSelf: 'flex-end',
  },
});
export default Login;
