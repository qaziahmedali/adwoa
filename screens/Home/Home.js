import React, {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet, ScrollView, Text} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Colors} from '../../components/constants';
import Products from './Products';
import Category from './Category';
import {products, categories} from './Data';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../../components/Header';
import {baseUrl} from '../../Config/BaseUrl';
import {toast} from '../../components/Toast';
const Home = ({navigation}) => {
  const [productsFilterData, setproductsFilterData] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [loading, setLoading] = useState(false);
  const [defaultLoading, setDefaultLoading] = useState(false);
  const [defaultProducts, setDefaultProducts] = useState('');
  const [key, setKey] = useState(false);

  const onClickCategory = async cid => {
    setSelectedId(cid);
    setLoading(true);
    await fetch(`${baseUrl}/api/products/show/${cid}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        setLoading(false);
        setKey(false);
        if (res.success === true) {
          setproductsFilterData(res.data);
        }
      })
      .catch(err => {
        setKey(false);
        setLoading(false);
      });
  };
  const ShowAllProducts = async () => {
    console.log('hlo');
    setDefaultLoading(true);
    await fetch(`${baseUrl}/api/products`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        setDefaultLoading(false);
        setKey(true);
        setDefaultProducts(res);
      })
      .catch(err => {
        setDefaultLoading(false);
      });
  };
  useEffect(() => {
    ShowAllProducts();
  }, []);
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
              onClickCategory={onClickCategory}
              selectedId={selectedId}
            />
          </View>
          <View style={{width: '100%', alignItems: 'flex-end'}}>
            <Text style={styles.seeAllText} onPress={() => ShowAllProducts()}>
              See All
            </Text>
          </View>
          <View style={{width: '100%'}}>
            <Products
              navigation={navigation}
              products={
                key
                  ? defaultProducts.length > 0
                    ? defaultProducts
                    : []
                  : productsFilterData.length > 0
                  ? productsFilterData
                  : []
              }
              loading={loading}
              selectedId={selectedId}
              defaultProducts={defaultProducts}
              defaultLoading={defaultLoading}
              key={key}
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
  seeAllText: {
    color: '#4A73F3',
  },
  centeredView: {
    flex: 1,
    alignItems: 'flex-start',
  },
});
export default Home;
