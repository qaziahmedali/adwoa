import React from 'react';
import {Text, View, TextInput, StyleSheet, ScrollView} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../../components/constants';
import HomeData from './HomeData';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.mainForHeader}>
          <Feather
            name="menu"
            size={wp(6)}
            color={Colors.WHITE}
            style={styles.icon}
          />
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Home</Text>
          </View>
        </View>
        <View style={styles.mainForBody}>
          <View style={styles.mainForSearchBar}>
            <View style={styles.inputView}>
              <TextInput
                placeholder="search posts"
                placeholderTextColor={Colors.GREY}
                color={Colors.GREY}
                style={styles.inputsearch}
              />
            </View>
            <View style={styles.iconView}>
              <EvilIcons name="search" size={wp(8)} color={Colors.GREY} />
            </View>
          </View>
          <HomeData />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  mainForHeader: {
    width: '100%',
    backgroundColor: Colors.GREEN,
    flexDirection: 'row',
  },
  headerIconView: {
    width: '20%',
  },
  headerTextView: {
    width: '80%',
  },
  headerText: {
    color: Colors.WHITE,
    paddingVertical: 13,
    textAlign: 'center',
    // fontWeight: c300,
  },
  mainForBody: {
    width: '95%',
    alignSelf: 'center',
  },
  mainForSearchBar: {
    width: '100%',
    marginVertical: 7,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.GREY,
  },
  inputView: {
    width: '90%',
  },
  iconView: {
    marginVertical: 12,
    width: '10%',
  },
  icon: {
    padding: 13,
  },
});
export default Home;
