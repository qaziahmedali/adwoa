import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import {Colors} from '../../components/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button, Card, Title, Paragraph} from 'react-native-paper';

const OrderData = ({navigation}) => {
  const goChat = () => {
    navigation.navigate('Chat');
  };
  return (
    <View style={styles.mainForBody}>
      <View style={styles.cardMain}>
        <Card style={styles.card}>
          <View style={styles.dataBorder}>
            <View style={styles.imgWithData}>
              <Card.Cover
                source={{
                  uri: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
                }}
                style={styles.cardImg}
              />
              <View style={styles.cardRightBody}>
                <View style={styles.upperView}>
                  <Paragraph style={styles.cardParaTxt}>
                    House for Sale
                  </Paragraph>
                  <View style={styles.statusView}>
                    <Paragraph style={styles.cardStatusText}>
                      Complete
                    </Paragraph>
                  </View>
                </View>

                <Paragraph style={styles.cardPriceTxt}>$497,346,000</Paragraph>
              </View>
            </View>
          </View>
          <View style={styles.cardRightBody}>
            <View style={{flexDirection: 'row'}}>
              <Paragraph style={styles.cardTxt}>Seller Name:</Paragraph>
              <Paragraph style={styles.cardTxtValue}>John</Paragraph>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Paragraph style={styles.cardTxt}>Seller Number:</Paragraph>
              <Paragraph style={styles.cardTxtValue}>+92345436</Paragraph>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerTextView}>
              <Text style={styles.ContactText} onPress={goChat}>
                Chat With Seller
              </Text>
            </View>
            <View style={styles.footerTextCancelView}>
              <Text style={styles.CancelText}>Cancel Order</Text>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainForBody: {
    width: '95%',
    alignSelf: 'center',
  },
  cardMain: {
    display: 'flex',
    width: '100%',
    borderRadius: '25',
    marginTop: 10,
  },
  card: {
    borderRadius: 13,
    overflow: 'hidden',
    elevation: 5,
  },
  cardImg: {
    overflow: 'hidden',
    borderRadius: 13,
    height: 100,
    width: '30%',
    marginBottom: 10,
  },
  dataBorder: {
    borderBottomWidth: 1,
    borderColor: Colors.GREY,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  imgWithData: {
    flexDirection: 'row',
  },
  cardRightBody: {
    width: '95%',
    marginHorizontal: 5,
  },
  upperView: {
    flexDirection: 'row',
    width: '100%',
  },
  statusView: {
    width: '33%',

    marginVertical: 2,
    alignItems: 'flex-end',
  },

  cardStatusText: {
    backgroundColor: Colors.LIGHTGREEN,
    textAlign: 'center',
    color: Colors.WHITE,
    paddingHorizontal: 3,
  },
  cardParaTxt: {
    fontWeight: 'bold',
    fontSize: RFValue(17, 700),
  },
  cardPriceTxt: {
    fontWeight: '600',
    fontSize: RFValue(16, 700),
  },
  cardTxt: {
    fontWeight: '300',
    fontSize: RFValue(15, 700),
  },
  cardTxtValue: {
    paddingHorizontal: 5,
    fontWeight: '300',
    fontSize: RFValue(15, 700),
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
  },
  footerTextView: {
    width: '50%',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  footerTextCancelView: {
    width: '50%',
    alignItems: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  ContactText: {
    color: Colors.GREEN,
    fontSize: RFValue(15, 700),
  },
  CancelText: {
    color: Colors.RED,
    fontSize: RFValue(15, 700),
  },
});
export default OrderData;
