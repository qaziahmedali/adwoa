import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {Colors} from '../../components/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextInput} from 'react-native-gesture-handler';
const ChatBody = ({navigation}) => {
  const GoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.RowCont}>
            <View style={styles.senderMainCol1}>
              <View style={styles.Sender}>
                <Image
                  source={require('../../assets/user.jpg')}
                  style={styles.UserImg}
                  resizeMode="contain"
                />
                <View style={styles.SenderCol1}>
                  <View style={styles.SenderMesaageBubble}>
                    <Text style={styles.SenderMessage}>
                      Helloo Bro how are you hey guiys here is zulki. What about
                      you. ia ma fine hey guiys here is zulki. What about you.
                      ia ma fine hey guiys here is zulki. What about you. ia ma
                      fine finefine
                    </Text>
                  </View>
                  <Text style={styles.time}>12PM</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.RowCont}>
          <View style={styles.receiverMainCol1}>
            <View style={styles.ReciverCol1}>
              <View style={styles.ReciverMessageBubble}>
                <Text style={styles.ReciverMessage}>
                  hey guiys here is zulki. What about you. ia ma fine hey guiys
                  here is zulki. What about you. ia ma fine hey guiys here is
                  zulki. What about you. ia ma fine fine fine
                </Text>
              </View>
              <Text style={styles.time}>12PM</Text>
            </View>
          </View>
          {/* <View style={{width: '20%'}} /> */}
        </View>
      </ScrollView>
      <View style={styles.Footer}>
        <View style={styles.RowCont}>
          <View style={{width: '85%'}}>
            <View style={styles.MessageTypeBubble}>
              <TextInput
                style={styles.Input}
                placeholder="Type a Message"
                placeholderTextColor={Colors.GREY}
              />
            </View>
          </View>
          <View style={styles.FooterCol1}>
            <Pressable>
              <View style={styles.SendBubble}>
                <Ionicons name="send-sharp" size={wp(6)} color={Colors.WHITE} />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  RowCont: {
    width: '100%',
    flexDirection: 'row',
    marginTop: hp(2),
  },

  UserImg: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginHorizontal: 5,
  },
  Sender: {
    flexDirection: 'row',
    paddingHorizontal: wp(4),
  },
  time: {
    fontSize: RFValue(9, 580),
    fontFamily: 'Poppins-Regular',
    color: Colors.BLACK,
    alignSelf: 'flex-end',
  },
  senderMainCol1: {width: '100%', alignItems: 'flex-start'},
  receiverMainCol1: {width: '100%', alignItems: 'flex-end'},
  SenderMessage: {
    fontSize: RFValue(10, 580),
    fontFamily: 'Poppins-Regular',
    color: Colors.WHITE,
    textAlign: 'justify',
  },
  SenderMesaageBubble: {
    backgroundColor: Colors.DARKGREY,
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  SenderCol1: {
    maxWidth: '70%',
    // paddingHorizontal: wp(4),
  },
  ReciverMessageBubble: {
    backgroundColor: Colors.LIGHTGREEN,
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  ReciverMessage: {
    fontSize: RFValue(10, 580),
    fontFamily: 'Poppins-Regular',
    color: Colors.WHITE,
    textAlign: 'justify',
  },
  ReciverCol1: {
    maxWidth: '70%',
    paddingHorizontal: wp(4),
  },
  Footer: {
    marginBottom: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: Colors.bodyColor,
  },
  FooterCol1: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Input: {
    width: '100%',
    paddingHorizontal: 15,
    color: Colors.BLACK,
    fontSize: RFValue(12, 580),
    fontFamily: 'Poppins-Regular',
  },
  MessageTypeBubble: {
    width: '97%',
    backgroundColor: Colors.WHITE,
    borderRadius: 30,
    shadowColor: Colors.GREY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: 50,
    marginVertical: hp(1),
    alignSelf: 'flex-end',
  },
  SendBubble: {
    width: 50,
    height: 50,
    backgroundColor: Colors.GREEN,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
  },
});
export default ChatBody;
