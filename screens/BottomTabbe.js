import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Home from './Home/Home';
import Profile from './Profile/ProfileMenu';
import Chat from './Chat/Chat';
import AddProduct from './Add product/AddProduct';

const BottomTabbe = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'envelope' : 'envelope';
          } else if (route.name === 'AddProduct') {
            iconName = focused ? 'pluscircle' : 'pluscircle';
            return <AntDesign name={iconName} size={wp(6)} color={color} />;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }
          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={wp(6)} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        style: {backgroundColor: '#F2291A', height: 60},
        labelStyle: {
          fontSize: RFValue(10, 580),
          top: -5,
        },
      }}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Chat" component={Chat} options={{headerShown: false}} />
      <Tab.Screen
        name="AddProduct"
        component={AddProduct}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabbe;
