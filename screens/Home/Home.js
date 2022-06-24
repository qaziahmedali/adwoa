import React, {useState} from 'react';
import {View, TextInput, StyleSheet, ScrollView} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Colors} from '../../components/constants';
import Products from './Products';
import Category from './category';
import {products, categories} from './Data';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../components/Header';
const Home = ({navigation}) => {
  const [productsFilterData, setproductsFilterData] = useState([]);
  const [selectedId, setSelectedId] = useState();

  const onClickCategory = cid => {
    setSelectedId(cid);
    console.log(cid);
    const newProduct = [...products];
    const newCategory = [...categories];

    let newMergeProduct = newProduct.map((item, index) => {
      newCategory.forEach(item2 => {
        if (item.id === cid) {
          item = Object.assign(item, item2);
        }
      });
      return item;
    });
    console.log('newMergeProduct', newMergeProduct);
    const newFilterProducts = newMergeProduct.filter(
      item => item.categoryId == cid,
    );
    console.log('newFilterProducts', newFilterProducts);
    setproductsFilterData(newFilterProducts);
  };

  return (
    <View style={styles.container}>
      <Header
        label={'Home'}
        navigation={navigation}
        color={Colors.GREEN}
        menuIcon={true}
        align={'center'}
      />
      <ScrollView>
        <View style={styles.mainForBody}>
          <View style={styles.mainForSearchBar}>
            <View style={styles.inputView}>
              <TextInput
                placeholder="search posts"
                placeholderTextColor={Colors.GREY}
                color={Colors.BLACK}
                style={styles.inputsearch}
              />
            </View>
            <View style={styles.iconView}>
              <EvilIcons name="search" size={wp(8)} color={Colors.GREY} />
            </View>
          </View>
          <View style={{width: '100%'}}>
            <Category
              navigation={navigation}
              categories={categories}
              onClickCategory={onClickCategory}
              selectedId={selectedId}
            />
          </View>
          <View style={{width: '100%'}}>
            <Products
              navigation={navigation}
              products={
                productsFilterData.length > 0 ? productsFilterData : products
              }
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
  mainForBody: {
    width: '95%',
    alignSelf: 'center',
  },
  mainForSearchBar: {
    width: '100%',
    marginVertical: 7,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.GREY,
  },
  inputView: {
    width: '90%',
  },
  iconView: {
    marginVertical: 12,
    width: '10%',
  },
  icon: {
    padding: 13,
  },
  centeredView: {
    flex: 1,
    alignItems: 'flex-start',
  },
});
export default Home;
