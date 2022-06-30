import {Alert, Platform, ToastAndroid} from 'react-native';

export const toast = label => {
  if (Platform.OS === 'ios') {
    Alert.alert('Alert', label);
  } else {
    ToastAndroid.show(label, ToastAndroid.SHORT);
  }
};
