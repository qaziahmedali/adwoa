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
import {ComplexAnimationBuilder} from 'react-native-reanimated';
import {toast} from '../../components/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from '../../Config/BaseUrl';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

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
      toast('Pasword must be 6 character at least');
      return;
    }
    if (name && email && password) {
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
        // .then(res => JSON.parse(JSON.stringify(res)))
        .then(res => res.json())
        .then(res => {
          if (res.message === 'success') {
            setName('');
            setEmail('');
            setPassword('');
            setPhone('');
            toast('Data stored successfully');
            navigation.navigate('VerificationForEmail');

            AsyncStorage.setItem('email', res.email_message.email);
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      toast('Please Enter all Fields');
    }
  };

  const Login = () => {
    navigation.navigate('Login');
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
            label={'Register'}
            onPress={() => handleData()}
            color={Colors.RED}
          />
          <View style={styles.forgetButton}>
            <TouchableOpacity>
              <Text
                navigation={navigation}
                style={styles.forgetBtnText}
                onPress={Login}>
                Already have an account?
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
export default Register;
