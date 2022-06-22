import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import {Colors} from '../../../components/constants';
import Button from '../../../components/Button';
import {RFValue} from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ForgetPasswordEmail = ({navigation}) => {
  const verificationCode = () => {
    navigation.navigate('VerificationCode');
  };
  const GoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainForBody}>
          {/* <TouchableOpacity> */}
          <TouchableOpacity style={styles.ForgetTextView}>
            <AntDesign
              name="arrowleft"
              size={wp(6)}
              color={Colors.WHITE}
              style={styles.iconBack}
              onPress={GoBack}
            />
          </TouchableOpacity>
          {/* </TouchableOpacity> */}
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
            />
          </View>
          <View style={styles.btnView}>
            <Button
              navigation={navigation}
              label={'Send'}
              onPress={verificationCode}
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
    width: '97%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    flex: 0.9,
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
  ParaTextView: {
    marginVertical: 5,
    width: '90%',
    alignItems: 'center',
  },
  ParaText: {
    color: Colors.GREY,
    alignSelf: 'flex-start',
    fontSize: RFValue(16, 700),
  },
  inputView: {
    width: '90%',
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    marginVertical: 7,
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
export default ForgetPasswordEmail;
