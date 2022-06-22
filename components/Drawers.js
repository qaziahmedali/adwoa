// import 'react-native-gesture-handler';

// import * as React from 'react';
// import {Button, View, Text, TouchableOpacity, Image} from 'react-native';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';

// import Contact from '../screens/Contact/Contact';
// import BottomTabbe from '../screens/BottomTabbe';
// import Home from '../screens/Home/HomeData';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const NavigationDrawerStructure = props => {
//   //Structure for the navigatin Drawer
//   const toggleDrawer = () => {
//     //Props to open/close the drawer
//     props.navigationProps.toggleDrawer();
//   };

//   return (
//     <View style={{flexDirection: 'row'}}>
//       <TouchableOpacity onPress={() => toggleDrawer()}>
//         {/*Donute Button Image */}
//         <Image
//           source={{
//             uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
//           }}
//           style={{
//             width: 25,
//             height: 25,
//             marginLeft: 5,
//           }}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// function HomeScreen({navigation}) {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen
//         name="BottomTabbe"
//         component={BottomTabbe}
//         options={{
//           title: 'First Page', //Set Header Title
//           headerLeft: () => (
//             <NavigationDrawerStructure navigationProps={navigation} />
//           ),
//           headerStyle: {
//             backgroundColor: '#f4511e', //Set Header color
//           },
//           headerTintColor: '#fff', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// // function secondScreenStack({navigation}) {
// //   return (
// //     <Stack.Navigator
// //       initialRouteName="SecondPage"
// //       screenOptions={{
// //         headerLeft: () => (
// //           <NavigationDrawerStructure navigationProps={navigation} />
// //         ),
// //         headerStyle: {
// //           backgroundColor: '#f4511e', //Set Header color
// //         },
// //         headerTintColor: '#fff', //Set Header text color
// //         headerTitleStyle: {
// //           fontWeight: 'bold', //Set Header text style
// //         },
// //       }}></Stack.Navigator>
// //   );
// // }

// function Drawers() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerContentOptions={{
//           activeTintColor: '#e91e63',
//           itemStyle: {marginVertical: 5},
//         }}>
//         <Drawer.Screen
//           name="HomeScreen"
//           options={{drawerLabel: 'First page Option'}}
//           component={HomeScreen}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default Drawers;
