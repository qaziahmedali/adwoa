import React from 'react';
import {ScrollView, Text, View, Image, StyleSheet} from 'react-native';
import {Colors} from '../../components/constants';
import {RFValue} from 'react-native-responsive-fontsize';

const HomeDetail = props => {
  console.log(props);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainImgView}>
          <Image
            source={require('../../assets/house.jpeg')}
            style={styles.DetailImg}
            resizeMode="contain"
          />
        </View>
        <View style={styles.mainForBody}>
          <View style={styles.mainTextView}>
            <Text style={styles.mainText}>HOUSE FOR SALE</Text>
          </View>
          <View style={styles.mainPriceView}>
            <View style={styles.reviewView}>
              <Text style={styles.mainViewsText}>18 views</Text>
            </View>
            <View style={styles.priceView}>
              <Text style={styles.mainPriceText}>$497,346,000</Text>
            </View>
          </View>
          <View style={styles.mainDescriptionView}>
            <Text style={styles.mainDescriptionText}>About this Item</Text>
            <Text style={styles.paraTextDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            </Text>
          </View>
          <View style={styles.mainForOtherBoxes}>
            <View style={styles.mainForBox}>
              <Text style={styles.ForBoxBody}>
                {/* <Entypo name="location-pin" /> */}
                Location
              </Text>
              <Text style={styles.ForBoxBodyValue}>
                laborum numquam blanditiis
              </Text>
            </View>
            <View style={styles.mainForBox}>
              <Text style={styles.ForBoxBody}>Category Name</Text>
              <Text style={styles.ForBoxBodyValue}>Babies</Text>
            </View>
          </View>
          <View style={styles.sellerDetails}>
            <Image
              source={require('../../assets/user.jpg')}
              style={styles.DetailUserImg}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.ForName}>John</Text>
              <Text style={styles.ForMobile}>+925658753</Text>
            </View>
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
  DetailImg: {
    width: '100%',
    borderBottomRightRadius: 40,
    height: 250,
  },
  mainImgView: {
    width: '100%',
  },
  mainForBody: {
    width: '90%',
    alignSelf: 'center',
  },
  mainTextView: {
    width: '100%',
    alignItems: 'flex-start',
  },
  mainText: {
    marginVertical: 10,
    fontWeight: 'bold',
    color: Colors.BLACK,
    fontSize: RFValue(23, 700),
  },
  mainPriceView: {
    width: '100%',
    flexDirection: 'row',
  },
  priceView: {
    alignItems: 'flex-end',
    width: '70%',
  },
  mainPriceText: {
    color: Colors.LIGHTGREEN,
    fontSize: RFValue(18, 700),
  },
  reviewView: {
    width: '30%',
  },
  mainViewsText: {
    marginVertical: 2,
    fontWeight: '500',
    color: Colors.GREY,
  },
  mainDescriptionView: {
    width: '100%',
    alignItems: 'flex-start',
  },

  mainDescriptionText: {
    marginVertical: 10,
    fontWeight: 'bold',
    color: Colors.BLACK,
    fontSize: RFValue(20, 700),
  },
  paraTextDescription: {
    color: Colors.BLACK,
    textAlign: 'justify',
  },
  mainForOtherBoxes: {
    width: '100%',
    flexDirection: 'row',
  },
  mainForBox: {
    width: '49%',
    marginRight: 7,
    marginVertical: 35,
    backgroundColor: Colors.WHITE,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  ForBoxBody: {
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  ForBoxBodyValue: {
    color: Colors.BLACK,
  },
  DetailUserImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  sellerDetails: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
  },
  ForName: {
    color: Colors.BLACK,
    paddingTop: 5,
    paddingHorizontal: 15,
    fontWeight: '500',
  },
  ForMobile: {
    paddingHorizontal: 15,
    color: Colors.BLACK,
  },
});
export default HomeDetail;
