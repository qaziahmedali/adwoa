import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Colors} from '../../components/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';
import UploadImage from './uploadImage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/ButtonGreen';
// import {RFValue} from 'react-native-responsive-fontsize';

const AddProduct = ({navigation}) => {
  const GoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainForHeader}>
        <AntDesign
          name="arrowleft"
          size={wp(6)}
          color={Colors.WHITE}
          style={styles.icon}
          onPress={GoBack}
        />
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Add a new Product</Text>
        </View>
      </View>
      <View style={styles.mainBodyView}>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Item Name"
            placeholderTextColor={Colors.GREY}
            color={Colors.GREY}
            style={styles.inputs}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Item Description"
            placeholderTextColor={Colors.GREY}
            color={Colors.GREY}
            style={styles.inputs}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Location"
            placeholderTextColor={Colors.GREY}
            color={Colors.GREY}
            style={styles.inputs}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Item Price"
            placeholderTextColor={Colors.GREY}
            color={Colors.GREY}
            style={styles.inputs}
          />
        </View>
        <View style={styles.SelectView}>
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            items={[
              {label: 'Jobs', value: 'Jobs'},
              {label: 'Services', value: 'Services'},
              {label: 'Vehicles', value: 'Vehicles'},
              {label: 'Property', value: 'Property'},
              {label: 'Home Furniture', value: 'Home Furniture'},
              {label: 'Sports', value: 'Sports'},
              {label: 'Babies', value: 'Babies'},
            ]}
            style={pickerSelectStyles}
          />
        </View>
        <UploadImage />
      </View>
      <Button label={'Publish Item Now'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
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
    alignSelf: 'flex-start',
    fontWeight: '600',
    fontSize: RFValue(17, 700),
  },
  icon: {
    padding: 13,
  },
  mainBodyView: {
    width: '93%',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  inputs: {
    paddingHorizontal: 10,
    color: Colors.BLACK,
  },
  inputView: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    marginVertical: 7,
  },
  SelectView: {
    width: '100%',
    borderBottomWidth: 2,
    borderColor: Colors.GREEN,
    borderRadius: 10,
    marginVertical: 7,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    color: 'black', // to ensure the text is never behind the icon
  },
  inputAndroid: {
    color: 'black', // to ensure the text is never behind the icon
  },
});
export default AddProduct;
