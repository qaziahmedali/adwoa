import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const Header = ({label, navigation, onPress}) => {
  return (
    <View style={styles.header}>
      <View style={styles.fixeheight1}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 270,
  },
  fixeheight1: {
    height: 270,
    paddingTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  label: {
    fontSize: RFVe,
  },
});
