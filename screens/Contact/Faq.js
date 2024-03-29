import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../components/constants';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../components/Header';

const Faq = ({navigation}) => {
  const [faqQuestion1, setFaqQuestion1] = React.useState(false);
  const [faqQuestion2, setFaqQuestion2] = React.useState(false);
  const [faqQuestion3, setFaqQuestion3] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header
          label={'Faq'}
          navigation={navigation}
          color={Colors.GREEN}
          menuIcon={false}
          align={'center'}
        />
      </View>
      <View style={styles.mainView}>
        <View style={styles.termsView}>
          <Text style={styles.mainText}>FAQ</Text>
          <View style={styles.faqMain}>
            <TouchableOpacity onPress={() => setFaqQuestion1(!faqQuestion1)}>
              <View style={styles.faqBody}>
                <Text style={styles.faqQuestion}>
                  Lorem ipsum dolor sit amet consectetur
                </Text>
                <Feather
                  name={faqQuestion1 ? 'chevron-up' : 'chevron-down'}
                  size={wp(6)}
                  style={styles.DownIcons}
                />
              </View>
            </TouchableOpacity>

            {faqQuestion1 ? (
              <Text style={styles.faqAnswer}>
                Lorem ipsum dolor sit amet dolor sit amet consectetur
              </Text>
            ) : null}
          </View>
          <View style={styles.faqMain}>
            <TouchableOpacity onPress={() => setFaqQuestion2(!faqQuestion2)}>
              <View style={styles.faqBody}>
                <Text style={styles.faqQuestion}>
                  Lorem ipsum dolor sit amet consectetur
                </Text>
                <Feather
                  name={faqQuestion2 ? 'chevron-up' : 'chevron-down'}
                  size={wp(6)}
                  style={styles.DownIcons}
                />
              </View>
            </TouchableOpacity>

            {faqQuestion2 ? (
              <Text style={styles.faqAnswer}>
                Lorem ipsum dolor sit amet dolor sit amet consectetur
              </Text>
            ) : null}
          </View>
          <View style={styles.faqMain}>
            <TouchableOpacity onPress={() => setFaqQuestion3(!faqQuestion3)}>
              <View style={styles.faqBody}>
                <Text style={styles.faqQuestion}>
                  Lorem ipsum dolor sit amet consectetur
                </Text>
                <Feather
                  name={faqQuestion3 ? 'chevron-up' : 'chevron-down'}
                  size={wp(6)}
                  style={styles.DownIcons}
                />
              </View>
            </TouchableOpacity>
            {faqQuestion3 ? (
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
    width: '93%',
    alignSelf: 'center',
  },
  termsView: {
    width: '100%',
    marginVertical: 15,
  },

  mainText: {
    color: Colors.BLACK,
    fontWeight: '500',
    fontSize: RFValue(23, 700),
    alignItems: 'flex-start',
  },

  faqQuestion: {
    marginVertical: 5,
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
    marginVertical: 8,
  },

  DownIcons: {
    color: Colors.BLACK,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 11,
  },
  faqBody: {
    flexDirection: 'row',
    width: '100%',
  },
});
export default Faq;
