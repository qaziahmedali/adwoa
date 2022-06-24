import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Colors} from '../../components/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';
import ImagePicker from 'react-native-image-crop-picker';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ButtonGreen from '../../components/ButtonGreen';
import Button from '../../components/Button';

// import {RFValue} from 'react-native-responsive-fontsize';

const AddProduct = ({navigation}) => {
  const [image, setImage] = useState('');

  const GoBack = () => {
    navigation.goBack();
  };
  const handleChoosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 0.4,
    })
      .then(file => {
        console.log('file===>', file);
        setImage(file.path);
      })
      .catch(err => {
        console.log(err);
      });
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
          <Text style={styles.headerText}>Edit Profile</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.mainBodyView}>
          <View style={styles.profilePic}>
            <Pressable
              onPress={() => {
                handleChoosePhoto();
              }}>
              {image === '' ? (
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 200 / 2,
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: 'grey',
                  }}
                  source={image.Profile}
                />
              ) : (
                <Image
                  style={styles.imagestyle}
                  source={{
                    uri: image,
                  }}
                />
              )}
            </Pressable>
            <Text style={styles.aboutText}>
              Click on the image above to update your profile pic
            </Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Name"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Phone"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="New Password(optional)"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Confirm Password(optional)"
              placeholderTextColor={Colors.GREY}
              color={Colors.GREY}
              style={styles.inputs}
            />
          </View>
        </View>
      </ScrollView>
      <ButtonGreen label={'Update Account Information'} />
      <Button label={'Delete Account Forever'} />
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
    alignSelf: 'center',
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
  profilePic: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 25,
  },
  imagestyle: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },
  UserImg: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 1,
  },
  aboutText: {
    color: Colors.BLACK,
    marginVertical: 2,
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
export default AddProduct;
