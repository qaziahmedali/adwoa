import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Colors} from '../../components/constants';
import {RFValue} from 'react-native-responsive-fontsize';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-crop-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from '../../Config/BaseUrl';
import {toast} from '../../components/Toast';

const AddProduct = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [des, setDes] = useState('');
  const [price, setPrice] = useState(0);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [image, setImage] = useState('');
  const [imageType, setImageType] = useState('');
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleDisableData = () => {
    toast('loading...');
  };
  // upload image...

  const handleChoosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      // cropping: true,
      compressImageQuality: 0.4,
      mediaType: 'any',
    })
      .then(file => {
        setImage(file.path);
        setImageType(file.mime);
      })
      .catch(err => {});
  };

  // fetching api using form-data

  const handlePublishItem = async () => {
    const userData = await AsyncStorage.getItem('userData');
    let user = JSON.parse(userData);

    // validations
    if (!name) {
      toast('please enter name');
      return;
    }
    if (!location) {
      toast('please enter location');
      return;
    }
    if (!price) {
      toast('please enter price');
      return;
    }
    if (!des) {
      toast('please enter des');
      return;
    }

    if (!image) {
      toast('please upload image');
      return;
    }
    // send data by form method
    const data = new FormData();
    data.append('name', name);
    data.append('image', {
      type: imageType === 'video/mp4' ? 'video/mp4' : 'image/*',
      uri: image,
      name: imageType === 'video/mp4' ? 'video.mp4' : 'image.jpeg',
    });
    data.append('des', des);
    data.append('location', location);
    data.append('price', price);
    data.append('category', categoryId);
    data.append('user', user.data._id);
    data.append('payment', 'NA');
    // data.append('category', category);
    setDisabled(true);
    setLoading(true);
    await fetch(`${baseUrl}/api/products`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${user.access_token}`,
        'Content-Type': 'multipart/form-data',
      },
      body: data,
    })
      .then(res => res.json())
      .then(res2 => {
        if (res2.message === 'created') {
          fulfill();
        }
        setDisabled(false);

        console.log(res2);
      })
      .catch(err => {
        setLoading(false);
        setDisabled(false);
      });
  };
  const fulfill = () => {
    setName('');
    setDes('');
    setImage('');
    setLocation('');
    setPrice('');
    setLoading(false);
    toast('product saved successfully');
  };
  // fetching data for category_name

  const Categories = async () => {
    const userData = await AsyncStorage.getItem('userData');
    let user = JSON.parse(userData);

    await fetch(`${baseUrl}/api/categories`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${user.access_token}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        setCategories(res);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    Categories();
  }, []);

  const getCategory = () => {
    return categories.map(item => {
      return {
        label: item.name,
        value: item._id,
        key: item._id,
      };
    });
  };

  // const data = for

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
              value={name}
              onChangeText={e => setName(e)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              placeholder="Location"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
              value={location}
              onChangeText={e => setLocation(e)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Item Price"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
              value={price}
              onChangeText={e => setPrice(e)}
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
              value={des}
              onChangeText={e => setDes(e)}
            />
          </View>
          <View style={styles.SelectView}>
            <RNPickerSelect
              placeholder={{
                label: 'Choose Category',
                value: null,
              }}
              items={getCategory()}
              onValueChange={value => setCategoryId(value)}
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
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                handleChoosePhoto();
              }}>
              <Text style={{color: Colors.GREY}}>upload image</Text>
            </TouchableOpacity>
            {image === '' ? (
              <Image
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: Colors.GREY,
                }}
                source={require('../../assets/avatar.jpeg')}
              />
            ) : (
              <Image
                style={styles.imagestyle}
                source={{
                  uri: image,
                }}
              />
            )}
          </View>
          <Button
            label={
              loading ? (
                <ActivityIndicator size="small" color={Colors.WHITE} />
              ) : (
                'Publish Item Now'
              )
            }
            color={disabled ? Colors.DISABLEDCOLOR : Colors.RED}
            onPress={disabled ? handleDisableData : handlePublishItem}
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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{width: '100%'}}>
              <ScrollView>
                <View style={{alignItems: 'center'}}>
                  <Pressable onPress={() => setShowModal(!showModal)}>
                    <Icon name="chevron-down" size={wp(8)} color="black" />
                  </Pressable>
                </View>
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
              </ScrollView>
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
  imagestyle: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  // modal
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 30,
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
