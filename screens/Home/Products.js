import React, {useState} from 'react';
import {View, StyleSheet, Pressable, ScrollView} from 'react-native';
import ProductData from './Data';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Card, Paragraph} from 'react-native-paper';

const Products = ({navigation, products}) => {
  const [data, setData] = useState(false);
  const goDetailPage = () => {
    navigation.navigate('HomeDetail');
    setData(true);
  };

  return (
    <View style={{width: '100%'}}>
      <View style={styles.mainForCard}>
        {products.map(item => (
          <View style={styles.cardMain}>
            <Pressable onPress={goDetailPage}>
              <Card style={styles.card}>
                <Card.Cover
                  source={{
                    uri: `${item.imagePath}`,
                  }}
                  style={styles.cardImg}
                />
                <View style={styles.cardBody}>
                  <Paragraph style={styles.cardParaTxt}>{item.title}</Paragraph>
                  <Paragraph>{item.price}</Paragraph>
                  <View style={styles.cardDangerTxt}>
                    <Paragraph style={styles.cardEndTxt}>
                      {item.categoryName && item.categoryName}
                    </Paragraph>
                  </View>
                </View>
              </Card>
            </Pressable>
          </View>
        ))}
      </View>
      {/* {data === true ? (
        <HomeDetail
          imagePath={arrData.imagePath}
          title={arrData.title}
          price={arrData.price}
          aboutProduct={arrData.aboutProduct}
        />
      ) : null} */}
    </View>
  );
};
const styles = StyleSheet.create({
  mainForCard: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    paddingBottom: 10,
  },
  cardMain: {
    marginHorizontal: 3,
    width: '48%',
    borderRadius: '25',
    marginTop: 10,
  },
  cardBody: {
    width: '95%',
    alignSelf: 'center',
    height: 75,
  },
  cardParaTxt: {
    fontWeight: 'bold',
    marginBottom: 0,
  },
  cardEndTxt: {
    color: 'red',
    alignSelf: 'flex-end',
    fontSize: wp(3),
  },
  card: {
    borderRadius: 13,
    overflow: 'hidden',
    elevation: 5,
  },
  cardImg: {
    overflow: 'hidden',
    borderRadius: 13,
    // borderTopRightRadius: 13,
    // borderTopLefttRadius: 13,
    height: 100,
  },
  cardDangerTxt: {
    width: '100%',
    marginTop: 4,
  },
});
export default Products;
