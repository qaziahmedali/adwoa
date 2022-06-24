import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import {Colors} from '../../../components/constants';
import Button from '../../../components/Button';
import {RFValue} from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const VerifictaionCode = ({navigation}) => {
  const EnterVerificationCode = () => {
    navigation.navigate('NewPassword');
  };
  const GoBack = () => {
    navigation.goBack();
  };
  const CELL_COUNT = 4;
  const [value, setValue] = React.useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainForBody}>
          <View style={styles.ForgetTextView}>
            <AntDesign
              name="arrowleft"
              size={wp(6)}
              color={Colors.WHITE}
              style={styles.iconBack}
              onPress={GoBack}
            />
          </View>
          <View style={styles.ForgetTextView}>
            <Text style={styles.ForgetText}>Forget Password</Text>
          </View>
          <View style={styles.ParaTextView}>
            <Text style={styles.ParaText}>
              Verification code has been sent to your email
            </Text>
          </View>
          {/* verifying Pin Code */}
          <View style={{width: '100%'}}>
            <View style={{width: '90%', alignSelf: 'center'}}>
              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
            </View>
          </View>
          <View style={styles.btnView}>
            <Button
              navigation={navigation}
              label={'Next'}
              onPress={EnterVerificationCode}
              color={Colors.RED}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  mainForBody: {
    width: '97%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    flex: 0.9,
  },
  iconBack: {
    color: Colors.BLACK,
  },
  ForgetTextView: {
    marginVertical: 10,
    marginHorizontal: 10,
    width: '90%',
  },
  ForgetText: {
    fontWeight: 'bold',
    fontSize: RFValue(23, 700),
    color: Colors.BLACK,
  },
  ParaTextView: {
    marginVertical: 5,
    width: '90%',
    alignItems: 'center',
  },
  ParaText: {
    color: Colors.GREY,
    alignSelf: 'flex-start',
    fontSize: RFValue(16, 700),
  },
  inputView: {
    width: '90%',
    borderBottomWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 10,
    marginVertical: 7,
  },
  cell: {
    width: 65,
    height: 40,
    lineHeight: 40,
    fontSize: RFValue(24, 580),
    marginVertical: hp(2),
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    borderBottomWidth: 1,
  },
  focusCell: {
    borderColor: '#000',
  },
  btnView: {
    marginVertical: 65,
    width: '100%',
    alignItems: 'center',
  },
});
export default VerifictaionCode;
