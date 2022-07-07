import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../components/constants';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.logoimg}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  main: {width: '100%', height: '100%', alignItems: 'center'},
  logoimg: {
    width: '70%',
    height: 100,
    marginTop: 60,
  },
  footer: {
    width: '100%',
    marginBottom: 0,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
});
