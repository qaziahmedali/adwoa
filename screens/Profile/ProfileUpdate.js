import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../components/constants';
import {RFValue} from 'react-native-responsive-fontsize';
import ImagePicker from 'react-native-image-crop-picker';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from '../../Config/BaseUrl';
import {toast} from '../../components/Toast';

const Profile = ({navigation}) => {
  const [image, setImage] = useState('');
  const [user, setUser] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldPasswordVisibility, setOldPasswordVisibility] = useState(true);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(true);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [disabledForPassWord, setDisabledForPassWord] = useState(false);
  const changeIcon = passwordVisibility === true ? false : true;
  const changeIconOldPassword = oldPasswordVisibility === true ? false : true;
  const changeIconConfirmPassword =
    confirmPasswordVisibility === true ? false : true;

  // uploading image...
  const handleDisableData = () => {
    toast('loading...');
  };
  const handleChoosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 0.4,
    })
      .then(file => {
        console.log('file===>', file);
        setImage(file.path);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // fetching me api...
  const Me = async () => {
    const userData = await AsyncStorage.getItem('userData');
    let users = JSON.parse(userData);
    await fetch(`${baseUrl}/api/me`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${users.access_token}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        setUser(res);
      })
      .catch(err => {
        toast('something went wrong ');
      });
  };
  useEffect(() => {
    Me();
  }, []);
  useEffect(() => {
    setPhone(user.phone);
    setName(user.name);
  }, []);
  // update data...
  const updateProfile = async () => {
    const userData = await AsyncStorage.getItem('userData');
    let users = JSON.parse(userData);
    const userId = users.data._id;
    if (!name) {
      toast('enter your name');
      return;
    }
    if (!phone) {
      toast('enter your phone number');
      return;
    }
    setLoading(true);
    setDisabled(true);
    await fetch(`${baseUrl}/api/profile/edit/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${users.access_token}`,
      },
      body: JSON.stringify({
        name,
        phone,
      }),
    })
      .then(res => res.json())
      .then(res => {
        setLoading(false);
        if (res) {
          Me();
          toast('data updated successfully');
        }
        setDisabled(false);
      })
      .catch(err => {
        setLoading(false);
        setDisabled(false);
      });
  };

  const fulFill = () => {
    setConfirmPassword('');
    setPassword('');
    setOldPassword('');
  };
  // update Password...
  const updatePassword = async () => {
    const userData = await AsyncStorage.getItem('userData');
    let users = JSON.parse(userData);
    const userId = users.data._id;
    if (!oldPassword) {
      toast('please enter your old password');
      return;
    }
    if (!password) {
      toast('please enter your new password');
      return;
    }
    if (!confirmPassword) {
      toast('please enter confirm password');
      return;
    }
    if (password.length < 5) {
      toast('new password must be atleast 6 characters');
      return;
    }
    if (password === confirmPassword) {
      setDisabledForPassWord(true);
      setLoading(true);
      await fetch(`${baseUrl}/api/profile/edit/password/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${users.access_token}`,
        },
        body: JSON.stringify({
          oldPassword,
          password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          setLoading(false);
          if (res.message === 'wrong password') {
            toast('old password is unncorrect');
          }
          setDisabledForPassWord(false);
          if (res.success === true) {
            fulFill();
            toast(res.message);
          }
        })
        .catch(err => {
          setLoading(false);
          setDisabledForPassWord(true);
        });
    } else {
      toast('confirm password and old password are not same');
    }
  };

  // delete account forever
  const DeleteAccount = async () => {
    const userData = await AsyncStorage.getItem('userData');
    let users = JSON.parse(userData);
    const userId = users.data._id;
    setLoading(true);
    await fetch(`${baseUrl}/api/account/remove/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${users.access_token}`,
      },
    })
      .then(res => res.json())
      .then(res2 => {
        setLoading(false);
        if (res2.success === true) {
          toast(res2.message);
          LogOut();
        }

        console.log(res2);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };
  const LogOut = async () => {
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('userData');
    navigation.navigate('LogoutNow');
  };
  return (
    <View style={styles.container}>
      <Header
        label={'Update Profile'}
        navigation={navigation}
        color={Colors.GREEN}
        menuIcon={false}
        align={'center'}
      />
      <ScrollView>
        {/* upload image */}
        <View style={styles.mainBodyView}>
          <View style={styles.profilePic}>
            <Pressable
              onPress={() => {
                handleChoosePhoto();
              }}>
              {image === '' ? (
                <Image
                  style={styles.imagestyle}
                  source={require('../../assets/avatar.jpeg')}
                />
              ) : (
                <Image
                  style={styles.imagestyle}
                  source={{
                    uri: image,
                  }}
                />
              )}
            </Pressable>
            <Text style={styles.aboutText}>
              Click on the image above to update your profile pic
            </Text>
          </View>
          {/* profile inputs */}
          <View style={styles.inputView}>
            <TextInput
              placeholder={name ? 'Name' : 'Loading...'}
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
              value={name}
              onChangeText={e => setName(e)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder={phone ? 'Phone' : 'Loading...'}
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
              value={phone}
              onChangeText={e => setPhone(e)}
            />
          </View>
          {/* profile buttons */}
          <Button
            label={
              loading ? (
                <ActivityIndicator size="large" color={Colors.WHITE} />
              ) : (
                'Update Account Information'
              )
            }
            color={disabled ? Colors.DISABLEDCOLORGREEN : Colors.GREEN}
            onPress={disabled ? handleDisableData : updateProfile}
          />
          <Button
            label={'Update Password'}
            color={Colors.GREEN}
            onPress={() => setShowModal(!showModal)}
          />

          <Button
            label={'Delete Account Forever'}
            color={Colors.RED}
            onPress={() => setModalShow(!modalShow)}
          />
        </View>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{width: '100%'}}>
                <ScrollView>
                  <View style={{alignItems: 'center'}}>
                    <Pressable onPress={() => setShowModal(!showModal)}>
                      <Icon name="chevron-down" size={wp(8)} color="black" />
                    </Pressable>
                  </View>

                  <View style={styles.mainBodyForModal}>
                    <Text style={styles.updatePasswordText}>
                      Update your Password
                    </Text>
                    <View style={styles.inputViewOfModal}>
                      <TextInput
                        placeholder="Old Password"
                        placeholderTextColor={Colors.GREY}
                        color={Colors.GREY}
                        style={styles.inputForPassword}
                        secureTextEntry={oldPasswordVisibility ? true : false}
                        value={oldPassword}
                        onChangeText={e => setOldPassword(e)}
                      />
                      <Pressable
                        onPress={() => {
                          setOldPasswordVisibility(changeIconOldPassword);
                        }}
                        style={styles.eyeView}>
                        <Ionicons
                          name={changeIconOldPassword ? 'eye' : 'eye-off'}
                          size={22}
                          color={Colors.BLACK}
                        />
                      </Pressable>
                    </View>
                    <View style={styles.inputViewOfModal}>
                      <TextInput
                        placeholder="New Password"
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
                        <Ionicons
                          name={changeIcon ? 'eye' : 'eye-off'}
                          size={22}
                          color={Colors.BLACK}
                        />
                      </Pressable>
                    </View>
                    <View style={styles.inputViewOfModal}>
                      <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor={Colors.GREY}
                        color={Colors.GREY}
                        style={styles.inputForPassword}
                        secureTextEntry={
                          confirmPasswordVisibility ? true : false
                        }
                        value={confirmPassword}
                        onChangeText={e => setConfirmPassword(e)}
                      />
                      <Pressable
                        onPress={() => {
                          setConfirmPasswordVisibility(
                            changeIconConfirmPassword,
                          );
                        }}
                        style={styles.eyeView}>
                        <Ionicons
                          name={changeIconConfirmPassword ? 'eye' : 'eye-off'}
                          size={22}
                          color={Colors.BLACK}
                        />
                      </Pressable>
                    </View>
                    <View style={styles.FooterBtn}>
                      <Button
                        label={
                          loading ? (
                            <ActivityIndicator
                              size="large"
                              color={Colors.WHITE}
                            />
                          ) : (
                            'Update Password'
                          )
                        }
                        color={
                          disabledForPassWord
                            ? Colors.DISABLEDCOLOR
                            : Colors.RED
                        }
                        onPress={
                          disabledForPassWord
                            ? handleDisableData
                            : updatePassword
                        }
                      />
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={modalShow}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.mainBodyForModal}>
                <Text style={styles.modalHeaderText}>
                  Are you sure you want to delete this account?
                </Text>
                <Text style={styles.modalHeaderParaText}>
                  This account will be deleted immediately. You can't undo this
                  account
                </Text>
                <View style={styles.ModalFooter}>
                  <View style={styles.CancelBtn}>
                    <Button
                      label={'cancel'}
                      color={Colors.GREEN}
                      onPress={() => setModalShow(!modalShow)}
                    />
                  </View>
                  <View style={styles.DeleteBtn}>
                    <Button
                      label={
                        loading ? (
                          <ActivityIndicator
                            size="large"
                            color={Colors.WHITE}
                          />
                        ) : (
                          'Yes, delete it'
                        )
                      }
                      color={Colors.RED}
                      onPress={DeleteAccount}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  mainBodyView: {
    width: '93%',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },

  profilePic: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 25,
  },
  imagestyle: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.GREY,
  },
  UserImg: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 1,
  },
  aboutText: {
    color: Colors.BLACK,
    marginVertical: 2,
  },
  inputs: {
    paddingHorizontal: 10,
    color: Colors.BLACK,
  },
  inputView: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    marginVertical: 7,
  },
  inputForPassword: {
    paddingHorizontal: 10,
    color: Colors.BLACK,
    width: '90%',
  },

  eyeView: {
    alignSelf: 'center',
  },
  inputViewOfModal: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    marginVertical: 17,
    flexDirection: 'row',
  },
  SelectView: {
    width: '100%',
    borderBottomWidth: 2,
    borderColor: Colors.GREEN,
    borderRadius: 10,
    marginVertical: 7,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    marginVertical: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  mainBodyForModal: {
    width: '93%',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  updatePasswordText: {
    fontWeight: '500',
    fontSize: RFValue(17, 700),
    color: Colors.BLACK,
  },
  modalHeaderText: {
    fontWeight: '600',
    fontSize: RFValue(15, 700),
    color: Colors.BLACK,
  },
  modalHeaderParaText: {
    fontWeight: '300',
    fontSize: RFValue(14, 700),
    color: Colors.BLACK,
  },
  FooterBtn: {
    margin: 15,
    width: '100%',
  },
  DeleteBtn: {
    width: '40%',
    marginLeft: 5,
  },
  CancelBtn: {width: '30%'},
  ModalFooter: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
});
export default Profile;
