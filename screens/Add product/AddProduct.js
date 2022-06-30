import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Colors} from '../../components/constants';
import {RFValue} from 'react-native-responsive-fontsize';
import UploadImage from './UploadImage';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const AddProduct = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const handlePublishItem = () => {
    console.log('account is published');
  };
  return (
    <View style={styles.container}>
      <Header
        label={'Add a new Product'}
        navigation={navigation}
        color={Colors.GREEN}
        menuIcon={false}
        align={'flex-start'}
      />
      <ScrollView>
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
          <View style={styles.inputView}>
            <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder="Item Description"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.DesInput}
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
          <View style={styles.subscriptionView}>
            <Pressable onPress={() => setShowModal(!showModal)}>
              <Text style={styles.subscriptionText}>
                Choose Subscription Plan
              </Text>
            </Pressable>
          </View>
          <UploadImage />
          <Button
            label={'Publish Item Now'}
            color={Colors.RED}
            onPress={handlePublishItem}
          />
        </View>
      </ScrollView>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <ScrollView></ScrollView>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable onPress={() => setShowModal(!showModal)}>
              <Icon name="chevron-down" size={wp(8)} color="black" />
            </Pressable>
            <View style={styles.mainBodyForModal}>
              <View style={styles.modalFirst}>
                <View style={styles.keyView}>
                  <Text style={styles.keyText}>Free</Text>
                  <Text style={styles.keyTextDull}>Only Image</Text>
                </View>
                <View style={styles.ValueView}>
                  <Text style={styles.ValueText}>$15</Text>
                  <Text style={styles.keyTextDull}>7 days</Text>
                </View>
              </View>
              <View style={styles.modalSecond}>
                <View style={styles.keyView}>
                  <Text style={styles.keyText}>Special</Text>
                  <Text style={styles.keyTextDull}>Unlimited Posting</Text>
                </View>
                <View style={styles.ValueView}>
                  <Text style={styles.ValueText}>$15</Text>
                  <Text style={styles.keyTextDull}>1 Month</Text>
                </View>
              </View>
              <View style={styles.modalThird}>
                <View style={styles.keyView}>
                  <Text style={styles.keyText}>Premium</Text>
                  <Text style={styles.keyTextDull}>Image and Video</Text>
                </View>
                <View style={styles.ValueView}>
                  <Text style={styles.ValueText}>$15 </Text>
                  <Text style={styles.keyTextDull}>2 Weeks</Text>
                </View>
              </View>
              <View style={styles.modalFourth}>
                <View style={styles.keyView}>
                  <Text style={styles.keyText}>Premium</Text>
                  <Text style={styles.keyTextDull}>Image and Video</Text>
                </View>
                <View style={styles.ValueView}>
                  <Text style={styles.ValueText}>$25 </Text>
                  <Text style={styles.keyTextDull}>1 month</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  // body
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
  DesInput: {
    textAlignVertical: 'top',
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
  subscriptionView: {
    width: '100%',
    alignItems: 'flex-end',
  },
  subscriptionText: {
    color: Colors.GREEN,
    marginVertical: 7,
  },
  // modal
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '100%',
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
  mainBodyForModal: {
    width: '90%',
    alignSelf: 'center',
  },
  modalFirst: {
    backgroundColor: '#0A95FA',
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    height: 70,
  },
  modalSecond: {
    backgroundColor: '#F66C22',
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    height: 70,
  },
  modalThird: {
    backgroundColor: '#FF4B76',
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    height: 70,
  },
  modalFourth: {
    backgroundColor: '#2CCB6C',
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    height: 70,
  },
  keyView: {
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    width: '45%',
  },
  keyText: {
    color: Colors.WHITE,
    fontWeight: '800',
    fontSize: RFValue(15, 700),
  },
  keyTextDull: {
    fontSize: RFValue(10, 700),
  },
  ValueView: {
    alignItems: 'flex-end',
    width: '45%',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  ValueText: {
    color: Colors.WHITE,
    fontWeight: '800',
    fontSize: RFValue(15, 700),
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
