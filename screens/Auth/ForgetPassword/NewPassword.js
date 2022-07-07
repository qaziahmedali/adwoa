import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Text,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {Colors} from '../../../components/constants';
import Button from '../../../components/Button';
import {RFValue} from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {toast} from '../../../components/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from '../../../Config/BaseUrl';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const NewPassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [rightIcon, setRightIcon] = useState('eye');
  const [rightIcon1, setRightIcon1] = useState('eye');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(true);
  const [disabled, setDisabled] = useState(false);
  const changeIconConfirmPassword =
    confirmPasswordVisibility === true ? false : true;
  const changeIcon = passwordVisibility === true ? false : true;
  const handleDisableData = () => {
    toast('loading...');
  };
  const EnterNewPassword = async () => {
    var email = await AsyncStorage.getItem('emailForPassword');
    if (!password) {
      toast('Please enter your password');
      return;
    }
    if (!confirmPassword) {
      toast('Please enter confirmPassword');
      return;
    }
    setDisabled(true);

    setLoading(true);
    if (password === confirmPassword) {
      await fetch(`${baseUrl}/api/change-password`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          password,
          email,
        }),
      })
        .then(res => res.json())
        .then(res => {
          setLoading(false);

          if (res.message === 'password updated') {
            setPassword('');
            setConfirmPassword('');
            toast(res.message);
            navigation.navigate('Login');
          } else {
            toast('something went wrong');
          }
          setDisabled(false);
        })
        .catch(err => {
          setLoading(false);
          console.log(err);
        });
    } else {
      setLoading(false);
      setDisabled(false);
      toast('confirm password and password are not same');
    }
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
          <View style={styles.inputViewForPassword}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputForPassword}
              secureTextEntry={passwordVisibility ? true : false}
              value={password}
              onChangeText={e => setPassword(e)}
            />
            <Pressable
              onPress={() => {
                setPasswordVisibility(changeIcon);
              }}
              style={styles.eyeView}>
              <Icon
                name={changeIcon ? 'eye' : 'eye-off'}
                size={22}
                color={Colors.BLACK}
                style={styles.eyeIcon}
              />
            </Pressable>
          </View>
          <View style={styles.inputViewForPassword}>
            <TextInput
              placeholder="Create new password"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputForPassword}
              secureTextEntry={confirmPasswordVisibility ? true : false}
              value={confirmPassword}
              onChangeText={e => setConfirmPassword(e)}
            />
            <Pressable
              onPress={() => {
                setConfirmPasswordVisibility(changeIconConfirmPassword);
              }}
              style={styles.eyeView}>
              <Icon
                name={changeIconConfirmPassword ? 'eye' : 'eye-off'}
                size={22}
                color={Colors.BLACK}
                style={styles.eyeIcon}
              />
            </Pressable>
          </View>
          <View style={styles.btnView}>
            <Button
              navigation={navigation}
              label={
                loading ? (
                  <ActivityIndicator size="small" color={Colors.WHITE} />
                ) : (
                  'Send'
                )
              }
              color={disabled ? Colors.DISABLEDCOLOR : Colors.RED}
              onPress={disabled ? handleDisableData : EnterNewPassword}
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
    width: '93%',
    alignSelf: 'center',
    alignItems: 'center',
    height: '80%',
    flex: 0.9,
  },
  iconBack: {
    color: Colors.BLACK,
  },
  ForgetTextView: {
    marginVertical: 10,
    marginHorizontal: 10,
    width: '100%',
  },
  inputForPassword: {
    paddingHorizontal: 10,
    color: Colors.BLACK,
    width: '90%',
  },
  inputViewForPassword: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    marginVertical: 7,
    flexDirection: 'row',
  },
  eyeView: {
    alignSelf: 'center',
  },
  ForgetText: {
    fontWeight: 'bold',
    fontSize: RFValue(23, 700),
    color: Colors.BLACK,
  },
  inputView: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    marginVertical: 13,
  },
  inputs: {
    paddingHorizontal: 10,
  },
  btnView: {
    marginVertical: 55,
    width: '100%',
    alignItems: 'center',
  },
});
export default NewPassword;
