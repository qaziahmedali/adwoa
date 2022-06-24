import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../components/constants';
import OrderData from './OrderData';
import Header from '../../components/Header';
const Orders = ({navigation}) => {
  const [type, setType] = useState('Buying');
  return (
    <View style={styles.container}>
      <View style={styles.mainForHeader}>
        <Header
          label={'My Orders'}
          navigation={navigation}
          color={Colors.GREEN}
          menuIcon={false}
          align={'flex-start'}
        />
        <View style={styles.ForHeader}>
          <View style={styles.headerBuyerView}>
            <Text
              style={
                type === 'Buying' ? styles.activeTab : styles.headerOrderText
              }
              onPress={() => setType('Buying')}>
              Buying
            </Text>
          </View>
          <View style={styles.headerSellerView}>
            <Text
              style={
                type === 'Selling' ? styles.activeTab : styles.headerOrderText
              }
              onPress={() => setType('Selling')}>
              Selling
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <OrderData navigation={navigation} />
        <OrderData navigation={navigation} />
        <OrderData navigation={navigation} />
        <OrderData navigation={navigation} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  // header
  mainForHeader: {
    width: '100%',
    backgroundColor: Colors.GREEN,
  },
  ForHeader: {
    width: '73%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  activeTab: {
    fontWeight: '600',
    color: Colors.WHITE,
    paddingVertical: 13,
  },
  headerBuyerView: {
    width: '45%',
    alignItems: 'flex-start',
  },
  headerSellerView: {
    width: '45%',
    alignItems: 'flex-end',
  },
  headerOrderText: {
    color: Colors.GREY,
    paddingVertical: 13,
  },
});
export default Orders;
