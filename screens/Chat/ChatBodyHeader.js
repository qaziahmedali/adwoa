import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {Colors} from '../../components/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';
import ChatBody from './ChatBody';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Chats = ({navigation}) => {
  const GoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainForHeader}>
        <View style={styles.iconView}>
          <AntDesign
            name="arrowleft"
            size={wp(6)}
            color={Colors.WHITE}
            onPress={GoBack}
          />
        </View>
        <View style={styles.headerView}>
          <Image
            source={require('../../assets/user.jpg')}
            style={styles.UserImg}
            resizeMode="contain"
          />
          <View style={styles.userview}>
            <Text style={styles.userName}>M.zulqarnain</Text>
            <Text>online</Text>
          </View>
        </View>
      </View>
      <ChatBody />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  mainForHeader: {
    width: '100%',
    backgroundColor: Colors.GREEN,
    flexDirection: 'row',
  },
  headerIconView: {
    width: '20%',
  },
  headerView: {
    width: '85%',
    padding: 10,
    flexDirection: 'row',
  },
  headerText: {
    color: Colors.WHITE,
    paddingVertical: 13,
    alignSelf: 'flex-start',
    fontWeight: '600',
  },
  iconView: {
    marginVertical: 12,
    width: '15%',
    padding: 13,
  },
  UserImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userview: {
    paddingVertical: 6,
    paddingHorizontal: 9,
  },
  userName: {
    fontWeight: '500',
    color: Colors.WHITE,
    fontSize: RFValue(17, 700),
  },
});
export default Chats;
