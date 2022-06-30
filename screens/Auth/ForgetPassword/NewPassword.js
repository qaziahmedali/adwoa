import React from 'react';
import {ScrollView, View, StyleSheet, TextInput, Text} from 'react-native';
import {Colors} from '../../../components/constants';
import Button from '../../../components/Button';
import {RFValue} from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const NewPassword = ({navigation}) => {
  const EnterNewPassword = () => {
    navigation.navigate('Login');
  };
  const GoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainForBody}>
          <View style={styles.ForgetTextView}>
            <AntDesign
              name="arrowleft"
              size={wp(6)}
              color={Colors.WHITE}
              style={styles.iconBack}
              onPress={GoBack}
            />
          </View>
          <View style={styles.ForgetTextView}>
            <Text style={styles.ForgetText}>New Password</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Create new password"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Create new password"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.btnView}>
            <Button
              navigation={navigation}
              label={'Send'}
              onPress={EnterNewPassword}
              color={Colors.RED}
            />
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
  },
  mainForBody: {
    width: '97%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    flex: 0.9,
  },
  iconBack: {
    color: Colors.BLACK,
  },
  ForgetTextView: {
    marginVertical: 10,
    marginHorizontal: 10,
    width: '90%',
  },

  ForgetText: {
    fontWeight: 'bold',
    fontSize: RFValue(23, 700),
    color: Colors.BLACK,
  },
  inputView: {
    width: '90%',
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    marginVertical: 13,
  },
  inputs: {
    paddingHorizontal: 10,
  },
  btnView: {
    marginVertical: 65,
    width: '100%',
    alignItems: 'center',
  },
});
export default NewPassword;
