import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../../components/constants';
import Button from '../../../components/Button';
import {RFValue} from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from '../../../Config/BaseUrl';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {toast} from '../../../components/Toast';
const VerifictaionCode = ({navigation, label, type, accountVerification}) => {
  const CELL_COUNT = 5;
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingForMail, setLoadingForMail] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  // fetching api
  const EnterVerificationCode = async () => {
    var emailForAccount = await AsyncStorage.getItem('email');
    var emailForPassword = await AsyncStorage.getItem('emailForPassword');
    if (accountVerification) {
      var email = emailForAccount;
    } else {
      var email = emailForPassword;
    }
    setDisabled(true);
    setLoading(true);
    await fetch(`${baseUrl}/api/code-verify`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        code: value,
        type: type,
      }),
    })
      .then(res => res.json())
      .then(res => {
        setLoading(false);
        if (res.message === 'verification code incorrect') {
          toast(res.message);
        }
        setDisabled(false);
        if (res.message === 'verified') {
          toast('Email verified');
          if (accountVerification) {
            navigation.navigate('Login');
          } else {
            navigation.navigate('NewPassword');
          }
        }
      })
      .catch(err => {
        setLoading(false);
        setDisabled(false);
      });
  };
  const GoBack = () => {
    navigation.goBack();
  };
  const sendOtp = async () => {
    const email = await AsyncStorage.getItem('emailForPassword');
    console.log(email);
    setLoadingForMail(true);
    await fetch(`${baseUrl}/api/resend-email`, {
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
        setLoadingForMail(false);
        if (res.success === true) {
          toast(res.message);
          AsyncStorage.setItem('emailForPassword', email);
        }
        console.log(res);
      })
      .catch(err => {
        setLoadingForMail(false);
        console.log(err);
      });
  };
  const handleDisableData = () => {
    toast('loading...');
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
              onPress={() => GoBack()}
            />
          </View>
          <View style={styles.ForgetTextView}>
            <Text style={styles.ForgetText}>{label}</Text>
          </View>
          <View style={styles.ParaTextView}>
            <Text style={styles.ParaText}>
              Verification code has been sent to your email
            </Text>
          </View>
          {/* inputs for Pin Code */}
          <View style={{width: '100%'}}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>
          <View style={styles.sendMailButton}>
            {loadingForMail ? (
              <Text navigation={navigation} style={styles.sendMailBtnText}>
                loading...
              </Text>
            ) : (
              <TouchableOpacity onPress={sendOtp}>
                <Text navigation={navigation} style={styles.sendMailBtnText}>
                  Resend otp
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.btnView}>
            <Button
              navigation={navigation}
              label={
                loading ? (
                  <ActivityIndicator size="small" color={Colors.WHITE} />
                ) : (
                  'Next'
                )
              }
              color={disabled ? Colors.DISABLEDCOLOR : Colors.RED}
              onPress={disabled ? handleDisableData : EnterVerificationCode}
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
    width: '90%',
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
  ForgetText: {
    fontWeight: 'bold',
    fontSize: RFValue(23, 700),
    color: Colors.BLACK,
  },
  ParaTextView: {
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  ParaText: {
    color: Colors.GREY,
    alignSelf: 'flex-start',
    fontSize: RFValue(16, 700),
  },
  inputView: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    marginVertical: 7,
  },
  sendMailButton: {
    width: '100%',
    marginVertical: 4,
  },
  sendMailBtnText: {
    color: Colors.GREY,
    alignSelf: 'flex-end',
  },
  cell: {
    width: 50,
    height: 40,
    lineHeight: 40,
    fontSize: RFValue(24, 580),
    marginVertical: hp(2),
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    borderBottomWidth: 1,
  },
  focusCell: {
    borderColor: '#000',
  },
  btnView: {
    marginVertical: 65,
    width: '100%',
    alignItems: 'center',
  },
});
export default VerifictaionCode;
