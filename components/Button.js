import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Button = () => {
  return (
    <View style={styles.continer}>
      <Pressable>
        <Text>sai</Text>
      </Pressable>
    </View>
  );
};
export default Button;
const styles = StyleSheet.create({
  continer: {
    width: '100%',
  },
});
