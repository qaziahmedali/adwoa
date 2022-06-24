import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import {Colors} from '../../components/constants';
import Feather from 'react-native-vector-icons/Feather';
import Faq from './Faq';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AdminDetail from './adminDetail';
import Header from '../../components/modalHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RFValue} from 'react-native-responsive-fontsize';

const Contact = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Header label={'Contact Us'} navigation={navigation} />
      </View>

      <View style={styles.mainView}>
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
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainView: {
    width: '90%',
    alignSelf: 'center',
  },
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
  termsText: {
    color: Colors.GREY,
    paddingRight: 35,
  },
});
export default Contact;
