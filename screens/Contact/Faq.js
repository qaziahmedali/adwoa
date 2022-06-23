import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../components/constants';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../components/modalHeader';

const Faq = ({navigation}) => {
  const [faqQuestion1, setFaqQuestion1] = React.useState(false);
  const [faqQuestion2, setFaqQuestion2] = React.useState(false);
  const [faqQuestion3, setFaqQuestion3] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header label={'Faq'} navigation={navigation} />
      </View>
      <View style={styles.mainView}>
        <View style={styles.termsView}>
          <Text style={styles.termsMainText}>FAQ</Text>
          <View style={styles.faqMain}>
            <View style={styles.faqBody}>
              <TouchableOpacity onPress={() => setFaqQuestion1(!faqQuestion1)}>
                <Text style={styles.faqQuestion}>
                  Lorem ipsum dolor sit amet consectetur
                </Text>
              </TouchableOpacity>
              {faqQuestion1 ? (
                <Feather
                  name="chevron-up"
                  size={wp(6)}
                  style={styles.DownIcons}
                />
              ) : (
                <Feather
                  name="chevron-down"
                  size={wp(6)}
                  style={styles.DownIcons}
                />
              )}
            </View>
            {faqQuestion1 ? (
              <Text style={styles.faqAnswer}>
                Lorem ipsum dolor sit amet dolor sit amet consectetur
              </Text>
            ) : null}
          </View>
          <View style={styles.faqMain}>
            <View style={styles.faqBody}>
              <TouchableOpacity onPress={() => setFaqQuestion2(!faqQuestion2)}>
                <Text style={styles.faqQuestion}>
                  Lorem ipsum dolor sit amet consectetur
                </Text>
              </TouchableOpacity>
              {faqQuestion2 ? (
                <Feather
                  name="chevron-up"
                  size={wp(6)}
                  style={styles.DownIcons}
                />
              ) : (
                <Feather
                  name="chevron-down"
                  size={wp(6)}
                  style={styles.DownIcons}
                />
              )}
            </View>
            {faqQuestion2 ? (
              <Text style={styles.faqAnswer}>
                Lorem ipsum dolor sit amet dolor sit amet consectetur
              </Text>
            ) : null}
          </View>
        </View>
      </View>
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
  },
  termsView: {
    width: '100%',
    marginVertical: 15,
  },
  termsMainText: {
    color: Colors.BLACK,
    fontWeight: '500',
    fontSize: RFValue(23, 700),
    alignItems: 'flex-start',
  },
  termsParaText: {
    color: Colors.BLACK,
    textAlign: 'justify',
  },
  faqQuestion: {
    marginTop: 10,
    color: Colors.GREEN,
    paddingVertical: 7,
  },
  faqAnswer: {
    // textAlign: 'center',
    color: Colors.BLACK,
    maxWidth: '90%',
  },
  faqMain: {
    backgroundColor: Colors.GREENSHADE,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    marginVertical: 3,
  },

  DownIcons: {
    color: Colors.BLACK,
    paddingTop: 17,
    paddingHorizontal: 10,
  },
  faqBody: {
    flexDirection: 'row',
  },
});
export default Faq;
