import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabbe from './screens/BottomTabbe';
import Menu from './screens/MainMenu/Menu';
import Register from './screens/Auth/Register';
import Login from './screens/Auth/Login';
import Contact from './screens/Contact/Contact';
import VerificationEmail from './screens/Auth/ForgetPassword/VerificationEmail';
import VerificationForEmail from './screens/Auth/ForgetPassword/VerificationForEmail';
import VerificationForPassword from './screens/Auth/ForgetPassword/VerificationForPassword';
import NewPassword from './screens/Auth/ForgetPassword/NewPassword';
import ChatBodyHeader from './screens/Chat/ChatBodyHeader';
import HomeDetail from './screens/Home/HomeDetail';
import Faq from './screens/Contact/Faq';
import Terms from './screens/Contact/Terms';
import PrivacyPolicy from './screens/Contact/PrivacyPolicy';
import Orders from './screens/Orders/Orders';
import ProfileUpdate from './screens/Profile/ProfileUpdate';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={Menu}
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
          name="VerificationEmail"
          component={VerificationEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerificationForEmail"
          component={VerificationForEmail}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
