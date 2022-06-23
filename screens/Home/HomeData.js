import React from 'react';
import {Text, View, TextInput, StyleSheet, Pressable} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Button, Card, Title, Paragraph} from 'react-native-paper';
const Home = ({navigation}) => {
  const goDetailPage = () => {
    navigation.navigate('HomeDetail');
  };
  return (
    <>
      <View style={styles.mainForCard}>
        <View style={styles.cardMain}>
          <Pressable onPress={goDetailPage}>
            <Card style={styles.card}>
              <Card.Cover
                source={{
                  uri: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
                }}
                style={styles.cardImg}
              />
              <View style={styles.cardBody}>
                <Paragraph style={styles.cardParaTxt}>House for Sale</Paragraph>
                <Paragraph>$497,346,000</Paragraph>
                <View style={styles.cardDangerTxt}>
                  <Paragraph style={styles.cardEndTxt}>Real Estate</Paragraph>
                </View>
              </View>
            </Card>
          </Pressable>
        </View>
        <View style={styles.cardMain}>
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WaZeNBdknJuXPFA6zOo3GwT-RLebMbWcqw&usqp=CAU',
              }}
              style={styles.cardImg}
            />
            <View style={styles.cardBody}>
              <Paragraph style={styles.cardParaTxt}>House for Sale</Paragraph>
              <Paragraph>$497,346,000</Paragraph>
              <View style={styles.cardDangerTxt}>
                <Paragraph style={styles.cardEndTxt}>Real Estate</Paragraph>
              </View>
            </View>
          </Card>
        </View>
      </View>
      <View style={styles.mainForCard}>
        <View style={styles.cardMain}>
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkI4xWrqp4BKx8aYWcpHICFPtpTYmEtmnySg&usqp=CAU',
              }}
              style={styles.cardImg}
            />
            <View style={styles.cardBody}>
              <Paragraph style={styles.cardParaTxt}>Car for Sale</Paragraph>
              <Paragraph>$497,346,000</Paragraph>
              <View style={styles.cardDangerTxt}>
                <Paragraph style={styles.cardEndTxt}>Real Estate</Paragraph>
              </View>
            </View>
          </Card>
        </View>
        <View style={styles.cardMain}>
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg',
              }}
              style={styles.cardImg}
            />
            <View style={styles.cardBody}>
              <Paragraph style={styles.cardParaTxt}>House for Sale</Paragraph>
              <Paragraph>$497,346,000</Paragraph>
              <View style={styles.cardDangerTxt}>
                <Paragraph style={styles.cardEndTxt}>Real Estate</Paragraph>
              </View>
            </View>
          </Card>
        </View>
      </View>
      <View style={styles.mainForCard}>
        <View style={styles.cardMain}>
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://i.pinimg.com/736x/9e/e3/77/9ee377451d6dd4239ba92571f4f1de40.jpg',
              }}
              style={styles.cardImg}
            />
            <View style={styles.cardBody}>
              <Paragraph style={styles.cardParaTxt}>House for Sale</Paragraph>
              <Paragraph>$497,346,000</Paragraph>
              <View style={styles.cardDangerTxt}>
                <Paragraph style={styles.cardEndTxt}>Real Estate</Paragraph>
              </View>
            </View>
          </Card>
        </View>
        <View style={styles.cardMain}>
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://media.istockphoto.com/photos/clothes-shop-interior-picture-id901863672?k=20&m=901863672&s=612x612&w=0&h=0bpyh7rdYCy3Lod5pfK9oS72zFPNJSBv7T7l64xUE90=',
              }}
              style={styles.cardImg}
            />
            <View style={styles.cardBody}>
              <Paragraph style={styles.cardParaTxt}>House for Sale</Paragraph>
              <Paragraph>$497,346,000</Paragraph>
              <View style={styles.cardDangerTxt}>
                <Paragraph style={styles.cardEndTxt}>Real Estate</Paragraph>
              </View>
            </View>
          </Card>
        </View>
      </View>
      <View style={styles.mainForCard}>
        <View style={styles.cardMain}>
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://media.istockphoto.com/photos/turquoise-arm-chair-isolated-on-white-background-front-view-of-picture-id1199428736?k=20&m=1199428736&s=612x612&w=0&h=vRS-zg2d6tF7jqQ8lI3oYFs_JC3fXdPCZhkvlEhHJkc=',
              }}
              style={styles.cardImg}
            />
            <View style={styles.cardBody}>
              <Paragraph style={styles.cardParaTxt}>House for Sale</Paragraph>
              <Paragraph>$497,346,000</Paragraph>
              <View style={styles.cardDangerTxt}>
                <Paragraph style={styles.cardEndTxt}>Real Estate</Paragraph>
              </View>
            </View>
          </Card>
        </View>
        <View style={styles.cardMain}>
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
              }}
              style={styles.cardImg}
            />
            <View style={styles.cardBody}>
              <Paragraph style={styles.cardParaTxt}>House for Sale</Paragraph>
              <Paragraph>$497,346,000</Paragraph>
              <View style={styles.cardDangerTxt}>
                <Paragraph style={styles.cardEndTxt}>Real Estate</Paragraph>
              </View>
            </View>
          </Card>
        </View>
      </View>
      <View style={styles.mainForCard}>
        <View style={styles.cardMain}>
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
              }}
              style={styles.cardImg}
            />
            <View style={styles.cardBody}>
              <Paragraph style={styles.cardParaTxt}>House for Sale</Paragraph>
              <Paragraph>$497,346,000</Paragraph>
              <View style={styles.cardDangerTxt}>
                <Paragraph style={styles.cardEndTxt}>Real Estate</Paragraph>
              </View>
            </View>
          </Card>
        </View>
        <View style={styles.cardMain}>
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
              }}
              style={styles.cardImg}
            />
            <View style={styles.cardBody}>
              <Paragraph style={styles.cardParaTxt}>House for Sale</Paragraph>
              <Paragraph>$497,346,000</Paragraph>
              <View style={styles.cardDangerTxt}>
                <Paragraph style={styles.cardEndTxt}>Real Estate</Paragraph>
              </View>
            </View>
          </Card>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  mainForCard: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },
  cardMain: {
    marginHorizontal: 3,
    width: '48%',
    borderRadius: '25',
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
    height: 100,
  },
  cardDangerTxt: {
    width: '100%',
    marginTop: 4,
  },
});
export default Home;
