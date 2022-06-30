import {RFValue} from 'react-native-responsive-fontsize';
import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../components/constants';
import Header from '../../components/Header';
const PrivacyPolicy = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header
          label={'Privacy Policy'}
          navigation={navigation}
          color={Colors.GREEN}
          menuIcon={false}
          align={'center'}
        />
      </View>
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.policyView}>
            <Text style={styles.mainText}>Privacy Policy</Text>
            <Text style={styles.policyParaText}>
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

  mainParaText: {
    color: Colors.GREY,
  },
  icon: {
    padding: 13,
  },
  policyView: {
    width: '100%',
    marginVertical: 10,
  },
  mainText: {
    color: Colors.BLACK,
    fontWeight: '500',
    fontSize: RFValue(23, 700),
    alignItems: 'flex-start',
  },
  policyParaText: {
    backgroundColor: '#EDE8E9',
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
export default PrivacyPolicy;
