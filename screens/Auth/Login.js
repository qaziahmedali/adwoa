import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Button from '../../components/Button';
import {Colors} from '../../components/constants';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const Register = () => {
    navigation.navigate('Register');
  };
  const Login = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/Logo.png')}
          style={styles.logoimg}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.textinputView}>
          <View style={styles.textinputView1}>
            <TextInput
              style={styles.inputEmail}
              label="Email"
              placeholder="Enter Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Button navigation={navigation} label={'Login'} onPress={Login} />
      </View>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  header: {
    width: '100%',
    height: '30%',
  },
  main: {width: '100%', height: '40%'},
  logoimg: {
    width: '100%',
    height: 120,
    marginTop: 60,
  },
  footer: {
    width: '100%',
    marginBottom: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: '30%',
  },
  inputEmail: {
    borderRadius: 10,
    width: '100%',
    paddingLeft: 10,
    height: Platform.OS === 'ios' ? 40 : 40,
    borderColor: '#000',
    fontSize: RFValue(10, 580),
    fontFamily: 'Poppins-Regular',
    color: Colors.WHITE,
  },
  textinputView: {
    width: '100%',
    borderColor: Colors.BLACK,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    paddingVertical: 40,
  },
  textinputView1: {
    width: '90%',
    borderWidth: 2,
    borderColor: Colors.BLACK,
    borderRadius: 10,
  },
});
