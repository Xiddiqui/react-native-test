import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {appColor, iconColor, textColor} from '../../constants/colors';
// import {fontFamily} from '../../constants/fonts';

export const AppHeader = props => {
  const navigation = useNavigation();
  const {text} = props;
  return (
    <View style={styles.header}>
      <Text style={styles.hedingtxt}>{text}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    backgroundColor: appColor.primary,
    paddingBottom:responsiveHeight(2),
    paddingTop: responsiveHeight(6),
    justifyContent:'center',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  hedingtxt: {
    fontSize: responsiveFontSize(2.7),
    color: textColor.red,
    // fontFamily: fontFamily.appTextBold,
  },
});
