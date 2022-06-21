import React from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';
import {Colors} from '../../components/constants';
import Button from '../../components/Button';
import Header from './header';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainForBody}>
        <Image
          source={require('../../assets/Logo.png')}
          style={styles.logoimg}
        />
        <View style={styles.inputView}>
          <TextInput
            placeholder="search posts"
            placeholderTextColor={Colors.GREY}
            color={Colors.GREY}
            // style={styles.inputsearch}
          />
        </View>
        <Button navigation={navigation} label={'Login'} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  mainForBody: {
    width: '97%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: 'black',
  },
  logoimg: {
    width: '100%',
    height: 100,
  },
  inputView: {
    width: '90%',
    borderWidth: 1,
  },
});
export default Login;
