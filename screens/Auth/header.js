import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors} from '../../components/constants';

const Header = ({label}) => {
  return (
    <View style={styles.loginHeaderMain}>
      <Text style={styles.loginHeaderText}>{label}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  loginHeaderMain: {
    width: '100%',
    backgroundColor: Colors.RED,
  },
  loginHeaderText: {
    color: Colors.WHITE,
    paddingVertical: 13,
    textAlign: 'center',
  },
});
export default Header;
