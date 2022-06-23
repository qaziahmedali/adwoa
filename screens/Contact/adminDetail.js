import {RFValue} from 'react-native-responsive-fontsize';
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../components/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const adminDetail = () => {
  return (
    <>
      <View style={styles.TextView}>
        <Ionicons name="person-add" size={wp(6)} style={styles.icons} />
        <Text style={styles.TextKey}>Business Name:</Text>
        <Text style={styles.TextValue}>Adwoa</Text>
      </View>
      <View style={styles.TextView}>
        <Entypo name="mail" size={wp(6)} style={styles.icons} />
        <Text style={styles.TextKey}>Email:</Text>
        <Text style={styles.TextValue}>ahmed@gmail.com</Text>
      </View>
      <View style={styles.TextView}>
        <Ionicons name="location" size={wp(6)} style={styles.icons} />
        <Text style={styles.TextKey}>Address:</Text>
        <Text style={styles.TextValue}>here</Text>
      </View>
      <View style={styles.TextView}>
        <FontAwesome name="phone" size={wp(6)} style={styles.icons} />
        <Text style={styles.TextKey}>Phone:</Text>
        <Text style={styles.TextValue}>+925757865</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  TextView: {
    width: '100%',
    alignItems: 'flex-start',
    // marginVertical: 2,
    // borderBottomWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  TextKey: {
    fontSize: RFValue(15, 700),
    color: Colors.GREY,
    fontWeight: 'bold',
  },
  TextValue: {
    fontSize: RFValue(15, 700),
    color: Colors.BLACK,
    paddingHorizontal: 10,
    // fontWeight: 'bold',
  },
  icons: {
    color: Colors.BLACK,
    paddingRight: 10,
  },
});
export default adminDetail;
