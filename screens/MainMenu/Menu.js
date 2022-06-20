import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import {Colors} from '../../components/constants';

const Menu = ({navigation}) => {
  const Login = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Logo.png')} style={styles.logoimg} />
      <Button navigation={navigation} label={'Register'} onPress={Login} />
      <Button navigation={navigation} label={'Login'} onPress={Login} />
    </View>
  );
};
export default Menu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  logoimg: {
    width: '100%',
    height: 100,
  },
});
