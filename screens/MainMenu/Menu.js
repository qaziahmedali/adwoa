import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import {Colors} from '../../components/constants';

const Menu = ({navigation}) => {
  const Register = () => {
    navigation.navigate('Register');
  };
  const Login = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          source={require('../../assets/Logo.png')}
          style={styles.logoimg}
          resizeMode="contain"
        />
      </View>
      <View style={styles.footer}>
        <Button
          navigation={navigation}
          label={'Register'}
          onPress={Register}
          color={Colors.RED}
        />
        <Button
          navigation={navigation}
          label={'Login'}
          onPress={Login}
          color={Colors.RED}
        />
      </View>
    </View>
  );
};
export default Menu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  main: {width: '100%', height: '100%', alignItems: 'center'},
  logoimg: {
    width: '70%',
    height: 100,
    marginTop: 60,
  },
  footer: {
    width: '93%',
    marginBottom: 0,
    bottom: 20,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
});
