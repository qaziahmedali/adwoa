import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  Text,
} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import {Colors} from '../../components/constants';

const Products = ({
  navigation,
  products,
  loading,
  selectedId,
  defaultLoading,
}) => {
  const [data, setData] = useState(false);
  const goDetailPage = () => {
    navigation.navigate('HomeDetail', {
      products: products,
    });
    setData(true);
  };

  return (
    <View style={{width: '100%'}}>
      {!defaultLoading ? (
        !loading ? (
          products.length > 0 ? (
            <View style={styles.mainForCard}>
              {products.map((item, i) => (
                <View key={i} style={styles.cardMain}>
                  <Pressable onPress={goDetailPage}>
                    <Card style={styles.card}>
                      <Card.Cover
                        source={{
                          uri: `${item.image}`,
                        }}
                        style={styles.cardImg}
                      />
                      <View style={styles.cardBody}>
                        <Paragraph style={styles.cardParaTxt}>
                          {item.name}
                        </Paragraph>
                        <Paragraph>
                          $&nbsp;
                          {item.price}
                        </Paragraph>
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
          ) : selectedId ? (
            <Text
              style={{
                textAlign: 'center',
                color: Colors.GREY,
                marginVertical: 70,
              }}>
              No Items found!
            </Text>
          ) : null
        ) : (
          <ActivityIndicator size="large" color={Colors.BLACK} />
        )
      ) : (
        <ActivityIndicator size="large" color={Colors.BLACK} />
      )}
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
    paddingHorizontal: 3,
  },
  card: {
    borderRadius: 13,
    overflow: 'hidden',
    elevation: 5,
  },
  cardImg: {
    overflow: 'hidden',
    borderRadius: 13,
    height: 100,
  },
  cardDangerTxt: {
    width: '100%',
    marginTop: 3,
  },
  seeAllText: {
    color: '#4A73F3',
  },
});
export default Products;
