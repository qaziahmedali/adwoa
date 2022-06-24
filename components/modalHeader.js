import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from './constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const Header = ({navigation, label}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleData = () => {
    navigation.navigate('Contact');
  };
  const handleTerms = () => {
    navigation.navigate('Terms');
  };
  const handlePolicy = () => {
    navigation.navigate('PrivacyPolicy');
  };
  const handleFaqs = () => {
    navigation.navigate('Faq');
  };
  return (
    <>
      {/*Heder start*/}
      <View style={styles.mainForHeader}>
        <Pressable>
          <Feather
            name="menu"
            onPress={() => setModalVisible(!modalVisible)}
            size={wp(6)}
            color={Colors.WHITE}
            style={styles.icon}
          />
        </Pressable>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>{label}</Text>
        </View>
      </View>
      {/*Header end*/}

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/*Modal header start*/}
              <ScrollView>
                <View style={styles.mainModalBodyView}>
                  <View style={styles.logoImageView}>
                    <Image
                      source={require('../assets/Logo.png')}
                      style={styles.logo}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={{width: '10%'}}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                      <Icon
                        name="close-circle"
                        style={{right: 5}}
                        size={wp(8)}
                        color="black"
                      />
                    </Pressable>
                  </View>
                </View>
                {/*Menus start*/}
                <View style={styles.mainMenusView}>
                  <View style={styles.MenusView}>
                    <Icon
                      name="person"
                      style={{right: 5}}
                      size={wp(5)}
                      color={Colors.GREEN}
                    />
                  </View>
                  <View style={{width: '80%'}}>
                    <Text style={styles.MenuText}>Profile</Text>
                  </View>
                </View>
                {/*Menus start*/}
                <View style={styles.mainMenusView}>
                  <View style={styles.MenusView}>
                    <Icon
                      name="chatbox"
                      style={{right: 5}}
                      size={wp(5)}
                      color={Colors.GREEN}
                    />
                  </View>
                  <View style={{width: '80%'}}>
                    <Text style={styles.MenuText}>Chat</Text>
                  </View>
                </View>
                {/*Menus start*/}
                <View style={styles.mainMenusView}>
                  <View style={styles.MenusView}>
                    <MaterialIcons
                      name="privacy-tip"
                      style={{right: 5}}
                      size={wp(5)}
                      color={Colors.GREEN}
                    />
                  </View>
                  <View style={{width: '80%'}}>
                    <Text style={styles.MenuText} onPress={handlePolicy}>
                      Privacy Policy
                    </Text>
                  </View>
                </View>
                {/*Menus start*/}
                <View style={styles.mainMenusView}>
                  <View style={styles.MenusView}>
                    <AntDesign
                      name="exclamationcircle"
                      style={{right: 5}}
                      size={wp(5)}
                      color={Colors.GREEN}
                    />
                  </View>
                  <View style={{width: '80%'}}>
                    <Text style={styles.MenuText} onPress={handleTerms}>
                      Terms & Conditions
                    </Text>
                  </View>
                </View>
                {/*Menus start*/}
                <View style={styles.mainMenusView}>
                  <View style={styles.MenusView}>
                    <MaterialCommunityIcons
                      name="comment-question"
                      style={{right: 5}}
                      size={wp(5)}
                      color={Colors.GREEN}
                    />
                  </View>
                  <View style={{width: '80%'}}>
                    <Text
                      style={{color: Colors.BLACK, fontSize: RFValue(14, 580)}}
                      onPress={handleFaqs}>
                      FAQ's
                    </Text>
                  </View>
                </View>
                {/*Menus start*/}
                <View style={styles.mainMenusView}>
                  <View style={styles.MenusView}>
                    <MaterialIcons
                      name="contact-page"
                      style={{right: 5}}
                      size={wp(6)}
                      color={Colors.GREEN}
                    />
                  </View>
                  <View style={{width: '80%'}}>
                    <Text style={styles.MenuText} onPress={handleData}>
                      Contact Us
                    </Text>
                  </View>
                </View>
                {/*Menus start*/}
                <View style={styles.mainMenusView}>
                  <View style={styles.MenusView}>
                    <MaterialIcons
                      name="logout"
                      style={{right: 5}}
                      size={wp(6)}
                      color={Colors.GREEN}
                    />
                  </View>
                  <View style={{width: '80%'}}>
                    <Text style={styles.MenuText}>Log Out</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  mainForHeader: {
    width: '100%',
    backgroundColor: Colors.GREEN,
    flexDirection: 'row',
  },
  headerIconView: {
    width: '20%',
  },
  headerTextView: {
    width: '80%',
  },
  headerText: {
    color: Colors.WHITE,
    paddingVertical: 13,
    textAlign: 'center',
  },
  mainModalBodyView: {
    width: '100%',
    flexDirection: 'row',
  },
  logoImageView: {
    width: '90%',
    alignItems: 'center',
  },
  logo: {width: wp(50), height: 100},
  mainMenusView: {
    width: '100%',
    marginVertical: hp(2),
    flexDirection: 'row',
  },
  MenusView: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MenuText: {
    color: Colors.BLACK,
    fontSize: RFValue(14, 580),
  },
  mainForBody: {
    width: '95%',
    alignSelf: 'center',
  },
  mainForSearchBar: {
    width: '100%',
    marginVertical: 7,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.GREY,
  },
  inputView: {
    width: '90%',
  },
  iconView: {
    marginVertical: 12,
    width: '10%',
  },
  icon: {
    padding: 13,
  },
  centeredView: {
    flex: 1,
    alignItems: 'flex-start',
    // marginTop: ,
  },
  modalView: {
    height: '100%',
    width: '70%',
    backgroundColor: 'white',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
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
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default Header;
