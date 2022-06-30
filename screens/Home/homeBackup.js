import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../components/constants';
import HomeData from './HomeData';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const menuName = [
    'Profile',
    'Chat',
    'privacy Policy',
    'Terms & Condition',
    'Faqs',
    'Contact Us',
    'Logout',
  ];
  const handleData = () => {
    navigation.navigate('Contact');
  };
  return (
    <View style={styles.container}>
      {/*Heder start*/}
      <View style={styles.mainForHeader}>
        <Pressable>
          <Feather
            name="menu"
            onPress={() => setModalVisible(!modalVisible)}
            size={wp(6)}
            color={Colors.WHITE}
            style={styles.icon}
          />
        </Pressable>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Home</Text>
        </View>
      </View>
      {/*Header end*/}
      <ScrollView>
        <View style={{width: '100%'}}>
          <View style={styles.mainForBody}>
            <View style={styles.mainForSearchBar}>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="search posts"
                  placeholderTextColor={Colors.GREY}
                  color={Colors.GREY}
                  style={styles.inputsearch}
                />
              </View>
              <View style={styles.iconView}>
                <EvilIcons name="search" size={wp(8)} color={Colors.GREY} />
              </View>
            </View>
            <HomeData />
          </View>
        </View>
      </ScrollView>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          {/* <View style={styles.centeredView}> */}
          <View style={styles.modalView}>
            {/*Modal header start*/}
            <ScrollView>
              <View style={styles.mainModalBodyView}>
                <View style={styles.logoImageView}>
                  <Image
                    source={require('../../assets/Logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                  />
                </View>
                <View style={{width: '10%'}}>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Icon
                      name="close-circle"
                      style={{right: 5}}
                      size={wp(8)}
                      color="black"
                    />
                  </Pressable>
                </View>
              </View>
              {/*Menus start*/}
              <View style={styles.mainMenusView}>
                <View style={styles.MenusView}>
                  <Icon
                    name="person"
                    style={{right: 5}}
                    size={wp(5)}
                    color={Colors.GREEN}
                  />
                </View>
                <View style={{width: '80%'}}>
                  <Text style={styles.MenuText}>Profile</Text>
                </View>
              </View>
              {/*Menus start*/}
              <View style={styles.mainMenusView}>
                <View style={styles.MenusView}>
                  <Icon
                    name="chatbox"
                    style={{right: 5}}
                    size={wp(5)}
                    color={Colors.GREEN}
                  />
                </View>
                <View style={{width: '80%'}}>
                  <Text style={styles.MenuText}>Chat</Text>
                </View>
              </View>
              {/*Menus start*/}
              <View style={styles.mainMenusView}>
                <View style={styles.MenusView}>
                  <MaterialIcons
                    name="privacy-tip"
                    style={{right: 5}}
                    size={wp(5)}
                    color={Colors.GREEN}
                  />
                </View>
                <View style={{width: '80%'}}>
                  <Text style={styles.MenuText}>Privacy Policy</Text>
                </View>
              </View>
              {/*Menus start*/}
              <View style={styles.mainMenusView}>
                <View style={styles.MenusView}>
                  <AntDesign
                    name="exclamationcircle"
                    style={{right: 5}}
                    size={wp(5)}
                    color={Colors.GREEN}
                  />
                </View>
                <View style={{width: '80%'}}>
                  <Text style={styles.MenuText}>Terms & Conditions</Text>
                </View>
              </View>
              {/*Menus start*/}
              <View style={styles.mainMenusView}>
                <View style={styles.MenusView}>
                  <MaterialCommunityIcons
                    name="comment-question"
                    style={{right: 5}}
                    size={wp(5)}
                    color={Colors.GREEN}
                  />
                </View>
                <View style={{width: '80%'}}>
                  <Text
                    style={{color: Colors.BLACK, fontSize: RFValue(14, 580)}}>
                    FAQ's
                  </Text>
                </View>
              </View>
              {/*Menus start*/}
              <View style={styles.mainMenusView}>
                <View style={styles.MenusView}>
                  <MaterialIcons
                    name="contact-page"
                    style={{right: 5}}
                    size={wp(6)}
                    color={Colors.GREEN}
                  />
                </View>
                <View style={{width: '80%'}}>
                  <Text style={styles.MenuText} onPress={handleData}>
                    Contact Us
                  </Text>
                </View>
              </View>
              {/*Menus start*/}
              <View style={styles.mainMenusView}>
                <View style={styles.MenusView}>
                  <MaterialIcons
                    name="logout"
                    style={{right: 5}}
                    size={wp(6)}
                    color={Colors.GREEN}
                  />
                </View>
                <View style={{width: '80%'}}>
                  <Text style={styles.MenuText}>Log Out</Text>
                </View>
              </View>
            </ScrollView>
          </View>

          {menuName.map(item => (
            <View style={styles.mainMenusView}>
              <View style={styles.MenusView}>
                <Icon
                  name="person"
                  style={{right: 5}}
                  size={wp(5)}
                  color={Colors.GREEN}
                />
              </View>
              <View style={{width: '80%'}}>
                <Text
                  style={styles.MenuText}
                  onPress={() => navigation.navigate(`${item.valueOf}`)}>
                  {item}
                </Text>
              </View>
            </View>
          ))}
          {/* </View> */}
        </Modal>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  mainForHeader: {
    width: '100%',
    backgroundColor: Colors.GREEN,
    flexDirection: 'row',
  },
  headerIconView: {
    width: '20%',
  },
  headerTextView: {
    width: '80%',
  },
  headerText: {
    color: Colors.WHITE,
    paddingVertical: 13,
    textAlign: 'center',
    // fontWeight: c300,
  },
  mainModalBodyView: {
    width: '100%',
    flexDirection: 'row',
  },
  logoImageView: {
    width: '90%',
    alignItems: 'center',
  },
  logo: {width: wp(50), height: 100},
  mainMenusView: {
    width: '100%',
    marginVertical: hp(2),
    flexDirection: 'row',
  },
  MenusView: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MenuText: {
    color: Colors.BLACK,
    fontSize: RFValue(14, 580),
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
    // marginTop: ,
  },
  modalView: {
    height: '100%',
    width: '70%',
    backgroundColor: 'white',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default Home;
// 
import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable, ScrollView} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HomeDetail from './HomeDetail';
import {Button, Card, Title, Paragraph} from 'react-native-paper';
const Home = ({navigation}) => {
  const [data, setData] = useState(false);
  const goDetailPage = () => {
    navigation.navigate('HomeDetail');
    setData(true);
  };

  const arrData = [
    {
      imagePath:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
      title: 'House for Sale',
      price: '$497,346,000',
      aboutProduct: 'Real Estate',
    },
    {
      imagePath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WaZeNBdknJuXPFA6zOo3GwT-RLebMbWcqw&usqp=CAU',
      title: 'Car for Sale',
      price: '$497,346,00',
      aboutProduct: 'Real Estate',
    },
    {
      imagePath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkI4xWrqp4BKx8aYWcpHICFPtpTYmEtmnySg&usqp=CAU',
      title: 'Car for Sale',
      price: '$497,346,00',
      aboutProduct: 'Real Estate',
    },
    {
      imagePath: 'https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg',
      title: 'Shoes for Sale',
      price: '$497,34',
      aboutProduct: 'Real Estate',
    },
    {
      imagePath:
        'https://i.pinimg.com/736x/9e/e3/77/9ee377451d6dd4239ba92571f4f1de40.jpg',
      title: 'Lounge set',
      price: '$497,346',
      aboutProduct: 'Real Estate',
    },
    {
      imagePath:
        'https://media.istockphoto.com/photos/clothes-shop-interior-picture-id901863672?k=20&m=901863672&s=612x612&w=0&h=0bpyh7rdYCy3Lod5pfK9oS72zFPNJSBv7T7l64xUE90=',
      title: 'House for Sale',
      price: '$497,346,000',
      aboutProduct: 'Real Estate',
    },
    {
      imagePath:
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
      title: 'House for Sale',
      price: '$497,346,000',
      aboutProduct: 'Real Estate',
    },
    {
      imagePath:
        'https://media.istockphoto.com/photos/clothes-shop-interior-picture-id901863672?k=20&m=901863672&s=612x612&w=0&h=0bpyh7rdYCy3Lod5pfK9oS72zFPNJSBv7T7l64xUE90=',
      title: 'House for Sale',
      price: '$497,346,000',
      aboutProduct: 'Real Estate',
    },
  ];
  {
    arrData.map(item => console.log(arrData?.title));
  }

  return (
    <>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.cardMainCategory}></View>
      </ScrollView>
      <View style={{width: '100%'}}>
        <View style={styles.mainForCard}>
          {arrData.map(item => (
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
                    <Paragraph style={styles.cardParaTxt}>
                      {item.title}
                    </Paragraph>
                    <Paragraph>{item.price}</Paragraph>
                    <View style={styles.cardDangerTxt}>
                      <Paragraph style={styles.cardEndTxt}>
                        {item.aboutProduct}
                      </Paragraph>
                    </View>
                  </View>
                </Card>
              </Pressable>
            </View>
          ))}
        </View>
      </View>
      {data === true ? (
        <HomeDetail
          imagePath={arrData.imagePath}
          title={arrData.title}
          price={arrData.price}
          aboutProduct={arrData.aboutProduct}
        />
      ) : null}
    </>
  );
};
const styles = StyleSheet.create({
  mainForCard: {flexDirection: 'row', width: '100%', flexWrap: 'wrap'},
  cardMain: {
    display: 'flex',
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
    // borderRadius: 13,
    borderTopRightRadius: 13,
    borderTopLefttRadius: 13,
    height: 100,
  },
  cardDangerTxt: {
    width: '100%',
    marginTop: 4,
  },
});
export default Home;
