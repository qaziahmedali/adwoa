import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../components/constants';
import {RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {baseUrl} from '../../Config/BaseUrl';
import {useAnimatedProps} from 'react-native-reanimated';

const Category = ({navigation, onClickCategory, selectedId}) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const Categories = async () => {
    const userData = await AsyncStorage.getItem('userData');
    let userDatax = JSON.parse(userData);
    setLoading(true);
    await fetch(`${baseUrl}/api/categories`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userDatax.access_token}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        setCategories(res);
        setLoading(false);
        console.log(res);
      })
      .catch(err => {
        setLoading(false);
        // toast('something went wrong ');
        console.log(err);
      });
  };
  useEffect(() => {
    Categories();
  }, []);

  return (
    <View style={styles.WrapContainer}>
      {!loading ? (
        categories.length > 0 ? (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map((item, i) => (
              <Pressable key={i} onPress={() => onClickCategory(item._id)}>
                <View
                  style={
                    item._id === selectedId
                      ? styles.selectedCategory
                      : styles.CategoryCard
                  }>
                  <Image
                    style={styles.ServicesImage}
                    source={{
                      uri: `${item.categoryImage}`,
                    }}
                  />
                  <Text style={styles.ServicesText}>{item.name}</Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        ) : (
          <Text style={{textAlign: 'center', color: Colors.GREY}}>
            No Items found!
          </Text>
        )
      ) : (
        <Text style={{textAlign: 'center', color: Colors.GREY}}>
          Loading...
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  WrapContainer: {
    paddingVertical: hp(1),
  },
  selectedCategory: {
    backgroundColor: Colors.LIGHTSKIN,
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
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    borderRadius: 10,
  },
  CategoryCard: {
    backgroundColor: Colors.WHITE,
    width: 100,
    marginRight: wp(3),
    borderRadius: 10,
  },
});

export default Category;
