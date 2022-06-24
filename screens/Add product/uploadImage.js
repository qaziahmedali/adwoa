import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {Colors} from '../../components/constants';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const uploadImage = () => {
  const [image, setImage] = useState('');

  // const handleChoosePhoto = () => {
  //   ImagePicker.openPicker({
  //     multiple: true,
  //   }).then(images => {
  //     console.log(images);
  //     setUploadImages({image: images.path});
  //     console.log(uploadImages);
  //   });
  // };
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
export default uploadImage;
