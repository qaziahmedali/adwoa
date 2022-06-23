import * as React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from './constants';

const ButtonGreen = ({label, navigation, onPress}) => {
  return (
    <View style={styles.MainResponsevieView}>
      <View style={styles.ResponsevieView}>
        <Pressable style={styles.btn} onPress={() => onPress()}>
          <Text style={styles.Textcreate}>{label}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ButtonGreen;

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 48,
    borderRadius: 12,
    backgroundColor: Colors.GREEN,
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textcreate: {
    color: Colors.WHITE,
    fontSize: RFValue(14, 580),
    fontFamily: 'Poppins-SemiBold',
  },
  MainResponsevieView: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  ResponsevieView: {
    width: '90%',
  },
});
