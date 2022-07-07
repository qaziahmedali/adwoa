import React, {useState} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../../components/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {toast} from '../../../components/Toast';

import Button from '../../../components/Button';
import {RFValue} from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {baseUrl} from '../../../Config/BaseUrl';

const VerificationEmail = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleDisableData = () => {
    toast('loading...');
  };
  const sendData = async () => {
    if (!email) {
      toast('Please enter your email');
      return;
    }
    setDisabled(true);
    setLoading(true);
    await fetch(`${baseUrl}/api/email-send`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then(res => res.json())
      .then(res => {
        setLoading(false);

        if (res.message === 'email not correct') {
          toast('invalid email');
        }
        setDisabled(false);

        if (res.success === true) {
          setEmail('');
          toast(res.message);
          AsyncStorage.setItem('emailForPassword', email);
          navigation.navigate('VerificationForPassword');
        }
      })
      .catch(err => {
        setLoading(false);
        toast('something went wrong ');
        setDisabled(false);
      });
  };
  const GoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainForBody}>
          <TouchableOpacity style={styles.ForgetTextView}>
            <AntDesign
              name="arrowleft"
              size={wp(6)}
              color={Colors.WHITE}
              style={styles.iconBack}
              onPress={GoBack}
            />
          </TouchableOpacity>
          <View style={styles.ForgetTextView}>
            <Text style={styles.ForgetText}>Forget Password</Text>
          </View>
          <View style={styles.ParaTextView}>
            <Text style={styles.ParaText}>
              Enter your E-mail address so we can send your verification code
            </Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
              keyboardType="email-address"
              value={email}
              onChangeText={e => setEmail(e)}
            />
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
              onPress={disabled ? handleDisableData : sendData}
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
  iconBack: {
    color: Colors.BLACK,
  },
  mainForBody: {
    width: '93%',
    alignSelf: 'center',
    alignItems: 'center',
    height: '80%',
    flex: 0.9,
  },
  ForgetTextView: {
    marginVertical: 10,
    marginHorizontal: 10,
    width: '100%',
  },
  ForgetText: {
    fontWeight: 'bold',
    fontSize: RFValue(23, 700),
    color: Colors.BLACK,
  },
  ParaTextView: {
    marginVertical: 5,
    width: '100%',
  },
  ParaText: {
    color: Colors.GREY,
    alignSelf: 'flex-start',
    fontSize: RFValue(16, 700),
  },
  inputView: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    marginVertical: 7,
  },
  inputs: {
    paddingHorizontal: 10,
    color: Colors.BLACK,
  },
  btnView: {
    marginVertical: 55,
    width: '100%',
    alignItems: 'center',
  },
});
export default VerificationEmail;
