import React, {useState, useEffect, createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabbe from './screens/BottomTabbe';
import Menu from './screens/MainMenu/Menu';
import Register from './screens/Auth/Register';
import Login from './screens/Auth/Login';
import Contact from './screens/Contact/Contact';
import SendEmail from './screens/Auth/ForgetPassword/SendEmail';
import VerificationForAccount from './screens/Auth/ForgetPassword/VerificationForAccount';
import VerificationForPassword from './screens/Auth/ForgetPassword/VerificationForPassword';
import NewPassword from './screens/Auth/ForgetPassword/NewPassword';
import ChatBodyHeader from './screens/Chat/ChatBodyHeader';
import HomeDetail from './screens/Home/HomeDetail';
import Faq from './screens/Contact/Faq';
import Terms from './screens/Contact/Terms';
import PrivacyPolicy from './screens/Contact/PrivacyPolicy';
import Orders from './screens/Orders/Orders';
import ProfileUpdate from './screens/Profile/ProfileUpdate';
import SplashScreen from './screens/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';
const Stack = createStackNavigator();

export const MainContext = createContext();

const AuthContext = React.createContext();

function LogoutNow({navigation}) {
  const {signOut} = React.useContext(AuthContext);
  return <View>{signOut()}</View>;
}

function LoginNow({navigation}) {
  console.log('hlo bro');
  const {Loginx} = React.useContext(AuthContext);
  return <View>{Loginx()}</View>;
}

function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      Loginx: () => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
    <>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {state.isLoading ? (
            <Stack.Navigator>
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          ) : state.userToken == null ? (
            <Stack.Navigator>
              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="LoginNow"
                component={LoginNow}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SendEmail"
                component={SendEmail}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="VerificationForAccount"
                component={VerificationForAccount}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="VerificationForPassword"
                component={VerificationForPassword}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="NewPassword"
                component={NewPassword}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen
                name="BottomTabbe"
                component={BottomTabbe}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Orders"
                component={Orders}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ProfileUpdate"
                component={ProfileUpdate}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Contact"
                component={Contact}
                options={{headerShown: false}}
              />

              <Stack.Screen
                name="ChatBodyHeader"
                component={ChatBodyHeader}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Faq"
                component={Faq}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Terms"
                component={Terms}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="PrivacyPolicy"
                component={PrivacyPolicy}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="HomeDetail"
                component={HomeDetail}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="LogoutNow"
                component={LogoutNow}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
}

export default App;
