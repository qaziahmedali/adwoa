import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../components/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';

// import ChatData from './HomeData';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {} from 'react-native-gesture-handler';
const Chat = ({navigation}) => {
  const GoBack = () => {
    navigation.goBack();
  };
  const userMessages = () => {
    navigation.navigate('ChatBodyHeader');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.mainForHeader}>
          <AntDesign
            name="arrowleft"
            size={wp(6)}
            color={Colors.WHITE}
            style={styles.icon}
            onPress={GoBack}
          />
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Recent Chat</Text>
          </View>
        </View>

        <View style={styles.chatsListView}>
          <Image
            source={require('../../assets/user.jpg')}
            style={styles.UserImg}
            resizeMode="contain"
          />
          <View style={styles.chatUser}>
            <TouchableOpacity onPress={userMessages}>
              <Text style={styles.chatUserName}>Room 1</Text>
              <Text style={styles.chatUserMsg}>Room1 is created</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.chatsListView}>
          <Image
            source={require('../../assets/user.jpg')}
            style={styles.UserImg}
            resizeMode="contain"
          />
          <View style={styles.chatUser}>
            <TouchableOpacity onPress={userMessages}>
              <Text style={styles.chatUserName}>Room 2</Text>
              <Text style={styles.chatUserMsg}>Room1 is created</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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
  headerTextView: {
    width: '80%',
  },
  headerText: {
    color: Colors.WHITE,
    paddingVertical: 13,
    alignSelf: 'flex-start',
    fontWeight: '600',
  },
  iconView: {
    marginVertical: 12,
    width: '10%',
  },
  icon: {
    padding: 13,
  },
  chatsListView: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  UserImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  chatUser: {
    width: '85%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREY,
    marginHorizontal: 7,
  },
  chatUserName: {
    fontWeight: '500',
    color: Colors.BLACK,
    fontSize: RFValue(17, 700),
  },
  chatUserMsg: {
    fontWeight: '500',
    color: Colors.GREY,
    fontSize: RFValue(13, 700),
    marginVertical: 5,
  },
});
export default Chat;
