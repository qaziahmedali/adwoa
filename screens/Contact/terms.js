import {RFValue} from 'react-native-responsive-fontsize';
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

import Header from '../../components/Header';
const Terms = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header
          label={'Term and Condition'}
          navigation={navigation}
          color={Colors.GREEN}
          menuIcon={false}
          align={'center'}
        />
      </View>
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.termsView}>
            <Text style={styles.termsMainText}>Terms and Condition</Text>
            <Text style={styles.termsParaText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainView: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    flex: 0.9,
    marginTop: 20,
  },
  mainTextView: {
    width: '100%',
    alignItems: 'flex-start',
  },
  mainText: {
    fontWeight: '600',
    fontSize: RFValue(33, 700),
    color: Colors.BLACK,
  },
  mainParaText: {
    color: Colors.GREY,
  },
  icon: {
    padding: 13,
  },
  termsView: {
    width: '100%',
    marginVertical: 10,
  },
  termsMainText: {
    color: Colors.BLACK,
    fontWeight: '500',
    fontSize: RFValue(23, 700),
    alignItems: 'flex-start',
  },
  termsParaText: {
    backgroundColor: '#EDE8E9',
    // backgroundColor: Colors.GREENSHADE,
    color: Colors.BLACK,
    textAlign: 'justify',
    padding: 15,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  DotsIcons: {
    color: Colors.BLACK,
    paddingTop: 17,
  },
  DotsIconsTerms: {
    color: Colors.BLACK,
  },
});
export default Terms;
