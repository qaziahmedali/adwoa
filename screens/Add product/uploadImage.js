// import React, {useState} from 'react';
// import {RFValue} from 'react-native-responsive-fontsize';
// import Button from '../../components/Button';
// import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import {Colors} from '../../components/constants';

// const uploadImage = () => {
//   const [imageUri, setimageUri] = useState('');
//   const handleChoosePhoto = () => {
//     let options = {
//       storageOptions: {
//         path: 'images',
//         mediaType: 'photo',
//       },
//       includeBase64: true,
//     };
//     launchImageLibrary(options, response => {
//       console.log(response);
//       if (response.error) {
//         console.log(response.error);
//       } else if (response.customButton) {
//         console.log(response.customButton);
//       } else {
//         const source = {uri: response.uri};
//         setimageUri(source);
//       }
//     });
//   };
//   return (
//     <View style={styles.container}>
//       <View
//         style={{alignItems: 'center'}}
//         onPress={() => {
//           handleChoosePhoto();
//         }}>
//         <TouchableOpacity
//           onPress={() => {
//             handleChoosePhoto();
//           }}>
//           <Text style={{color: Colors.GREY}}>upload image</Text>
//         </TouchableOpacity>
//         <Image
//           source={imageUri}
//           style={{width: 100, height: 100, borderRadius: 40, borderWidth: 1}}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//   },
// });
// export default uploadImage;
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import Button from '../../components/Button';
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
