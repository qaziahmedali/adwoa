import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../components/constants';
import {RFValue} from 'react-native-responsive-fontsize';

import Header from '../../components/Header';
const Chat = ({navigation}) => {
  const userMessages = () => {
    navigation.navigate('ChatBodyHeader');
  };
  return (
    <View style={styles.container}>
      <Header
        label={'Recent  Chat'}
        navigation={navigation}
        color={Colors.GREEN}
        menuIcon={false}
        align={'flex-start'}
      />
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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
