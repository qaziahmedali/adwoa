import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../../components/constants';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../components/Header';
const ProfileMenu = ({navigation}) => {
  const handleOrders = () => {
    navigation.navigate('Orders');
  };
  const handleProfile = () => {
    navigation.navigate('ProfileUpdate');
  };
  const handleChat = () => {
    navigation.navigate('Chat');
  };
  return (
    <View style={styles.container}>
      <Header
        label={'Profile'}
        navigation={navigation}
        color={Colors.GREEN}
        menuIcon={false}
        align={'center'}
      />
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.mainBodyForModal}>
            <View style={styles.modalInnerCard}>
              <View style={styles.mainView}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="person" size={wp(5)} style={styles.IconLeft} />
                  <Text style={styles.menuText}>Profile Update</Text>
                </View>
              </View>
              <View style={styles.IconView}>
                <Pressable onPress={handleProfile}>
                  <Feather
                    name="arrow-right"
                    size={wp(5)}
                    style={styles.Icon}
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.modalInnerCard}>
              <View style={styles.mainView}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="chatbox" size={wp(5)} style={styles.IconLeft} />
                  <Text style={styles.menuText}>Chat</Text>
                </View>
              </View>
              <View style={styles.IconView}>
                <Pressable onPress={handleChat}>
                  <Feather
                    name="arrow-right"
                    size={wp(5)}
                    style={styles.Icon}
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.modalInnerCard}>
              <View style={styles.mainView}>
                <View style={{flexDirection: 'row'}}>
                  <Entypo
                    name="shopping-bag"
                    style={styles.IconLeft}
                    size={wp(5)}
                  />
                  <Text style={styles.menuText}>My Orders</Text>
                </View>
              </View>
              <View style={styles.IconView}>
                <Pressable onPress={handleOrders}>
                  <Feather
                    name="arrow-right"
                    size={wp(5)}
                    style={styles.Icon}
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.modalInnerCard}>
              <View style={styles.mainView}>
                <View style={{flexDirection: 'row'}}>
                  <MaterialIcons
                    name="attach-money"
                    size={wp(5)}
                    style={styles.IconLeft}
                  />
                  <Text style={styles.menuText}>Make Money</Text>
                </View>
              </View>
              <View style={styles.IconView}>
                <Pressable onPress={handleProfile}>
                  <Feather
                    name="arrow-right"
                    size={wp(5)}
                    style={styles.Icon}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
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
    width: '90%',
    alignSelf: 'center',
  },
  modalInnerCard: {
    backgroundColor: '#2CCB6C',
    // backgroundColor: Colors.GR  EEN,
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    height: 70,
  },
  IconLeft: {
    color: Colors.WHITE,
    fontWeight: '800',
    fontSize: RFValue(17, 700),
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 1,
  },
  valueView: {
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    width: '45%',
  },

  Icon: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: RFValue(17, 700),
    // padding: 10,
    paddingHorizontal: 5,
  },
  valueViewl: {
    width: '70%',
  },
  RightIconView: {
    alignSelf: 'flex-end',
  },
  mainView: {
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    width: '45%',
  },
  menuText: {
    color: Colors.WHITE,
    fontWeight: '800',
    fontSize: RFValue(15, 700),
  },
  IconView: {
    alignItems: 'flex-end',
    width: '45%',
    justifyContent: 'center',
    paddingVertical: 5,
  },
});
export default ProfileMenu;
