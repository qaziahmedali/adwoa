import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
} from 'react-native';
import {Colors} from '../../components/constants';
import Button from '../../components/Button';
import {RFValue} from 'react-native-responsive-fontsize';
import Header from '../../components/Header';

const Register = ({navigation}) => {
  const handleData = () => {
    navigation.navigate('Login');
  };
  const Login = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Header
        label={'Admin Register'}
        navigation={navigation}
        color={Colors.RED}
        menuIcon={false}
        align={'center'}
      />

      <ScrollView>
        <View style={styles.mainForBody}>
          <View style={styles.mainImg}>
            <Image
              source={require('../../assets/Logo.png')}
              style={styles.logoImg}
              resizeMode="contain"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Name"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.forgetButton}>
            <TouchableOpacity>
              <Text
                navigation={navigation}
                style={styles.forgetBtnText}
                onPress={Login}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
          <Button
            navigation={navigation}
            label={'Register'}
            onPress={handleData}
            color={Colors.RED}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    height: '100%',
  },
  mainForBody: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.9,
  },
  logoImg: {
    marginTop: 20,
    width: '70%',
    height: 100,
  },
  mainImg: {width: '90%', alignItems: 'center'},
  scrollView: {
    // height: calcSize(40),
  },
  // inputEmail: {
  //   borderRadius: 10,
  //   width: '100%',
  //   paddingLeft: 10,
  //   height: Platform.OS === 'ios' ? 40 : 40,
  //   borderColor: Colors.GREY,
  //   fontSize: RFValue(10, 580),
  //   fontFamily: 'Poppins-Regular',
  //   color: Colors.WHITE,
  // },
  inputView: {
    width: '90%',
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    marginVertical: 7,
  },
  forgetButton: {
    width: '90%',
    marginVertical: 4,
  },
  forgetBtnText: {
    color: Colors.GREY,
    alignSelf: 'flex-end',
  },
});
export default Register;
