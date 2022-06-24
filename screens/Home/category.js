import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {Colors} from '../../components/constants';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Category = ({navigation, categories, onClickCategory, selectedId}) => {
  console.log('selectedId', selectedId);
  return (
    <View style={styles.WrapContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((item, i) => (
          <Pressable key={i} onPress={() => onClickCategory(item.id)}>
            <View
              style={
                item.id === selectedId
                  ? styles.selectedCategory
                  : styles.CategoryCard
              }>
              <Image
                style={styles.ServicesImage}
                source={{
                  uri: `${item.imagePath}`,
                }}
              />
              <Text style={styles.ServicesText}>{item.categoryName}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  WrapContainer: {
    paddingVertical: hp(1),
  },
  selectedCategory: {
    backgroundColor: Colors.WHITE,
    width: 100,
    marginRight: wp(3),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.GREEN,
  },
  ServiceName: {
    color: Colors.BLACK,
    fontSize: RFValue(9, 580),
    paddingVertical: hp(1),
    textAlign: 'center',
  },
  ServicesText: {
    color: Colors.BLACK,
    fontSize: RFValue(10, 580),
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    paddingVertical: hp(1),
  },
  ServicesImage: {
    height: 70,
    width: '100%',
    resizeMode: 'contain',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  CategoryCard: {
    backgroundColor: Colors.WHITE,
    width: 100,
    marginRight: wp(3),
    borderRadius: 10,
  },
});

export default Category;
