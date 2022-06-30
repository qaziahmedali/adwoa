import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {Colors} from '../../components/constants';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const UploadImage = () => {
  const [image, setImage] = useState('');

  const handleChoosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      // cropping: true,
      compressImageQuality: 0.4,
      mediaType: 'any',
    })
      .then(file => {
        console.log('file===>', file);
        console.log(file.path);
        setImage(file.path);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
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
  );
};
const styles = StyleSheet.create({
  imagestyle: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
});
export default UploadImage;
