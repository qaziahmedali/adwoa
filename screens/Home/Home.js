import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, ScrollView} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Colors} from '../../components/constants';
import HomeData from './HomeData';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import Header from '../../components/modalHeader';
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header label={'Home'} navigation={navigation} />
      <ScrollView>
        <View style={{width: '100%'}}>
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
            <HomeData navigation={navigation} />
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
  centeredView: {
    flex: 1,
    alignItems: 'flex-start',
    // marginTop: ,
  },
  modalView: {
    height: '100%',
    width: '70%',
    backgroundColor: 'white',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default Home;
