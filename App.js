import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabbe from './screens/BottomTabbe';
import Menu from './screens/MainMenu/Menu';
import Register from './screens/Auth/Register';
import Login from './screens/Auth/Login';
import Contact from './screens/Contact/Contact';
import ForgetPasswordEmail from './screens/Auth/ForgetPassword/ForgetPasswordEmail';
import VerificationCode from './screens/Auth/ForgetPassword/VerificationCode';
import NewPassword from './screens/Auth/ForgetPassword/NewPassword';
import ChatBodyHeader from './screens/Chat/ChatBodyHeader';
import HomeDetail from './screens/Home/HomeDetail';
import Drawers from './components/Drawers';
import Faq from './screens/Contact/Faq';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
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
          name="ForgetPasswordEmail"
          component={ForgetPasswordEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerificationCode"
          component={VerificationCode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{headerShown: false}}
        /> */}

        {/* <Stack.Screen
          name="Drawer"
          component={Drawers}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="HomeDetail"
          component={HomeDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTabbe"
          component={BottomTabbe}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
