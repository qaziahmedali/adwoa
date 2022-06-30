import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import {Colors} from '../../components/constants';
import {RFValue} from 'react-native-responsive-fontsize';
import ImagePicker from 'react-native-image-crop-picker';
import Header from '../../components/Header';

import Button from '../../components/Button';

const Profile = ({navigation}) => {
  const [image, setImage] = useState('');

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
      <Header
        label={'Profile'}
        navigation={navigation}
        color={Colors.GREEN}
        menuIcon={false}
        align={'center'}
      />
      <ScrollView>
        {/* upload image */}
        <View style={styles.mainBodyView}>
          <View style={styles.profilePic}>
            <Pressable
              onPress={() => {
                handleChoosePhoto();
              }}>
              {image === '' ? (
                <Image
                  style={styles.imagestyle}
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
            </Pressable>
            <Text style={styles.aboutText}>
              Click on the image above to update your profile pic
            </Text>
          </View>
          {/* profile inputs */}
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
          {/* profile buttons */}
          <View style={{width: '100%'}}>
            <Button
              label={'Update Account Information'}
              color={Colors.GREEN}
              onPress={() => console.log('account is updated')}
            />
            <Button
              label={'Delete Account Forever'}
              color={Colors.RED}
              onPress={() => console.log('account is deleted')}
            />
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
    borderWidth: 1,
    borderColor: Colors.GREY,
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
export default Profile;
