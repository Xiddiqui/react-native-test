import React from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import AddIcon from 'react-native-vector-icons/FontAwesome';
import { buttonColor, iconColor, textColor } from "../../constants/colors";

export const AddPostButton = (props) => {
    const {ButtonTitle ,onPress} = props
    return(
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <AddIcon name={'plus'} color={iconColor.secondary} size={responsiveFontSize(2.5)}/>
            <Text style={styles.btnTxt}>{'Add Posts'}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn:{
        backgroundColor:buttonColor.primary,
        height:responsiveWidth(10),
        width:responsiveWidth(35),
        borderRadius:responsiveWidth(2),
        flexDirection:'row',
        alignItems:'center',
        marginTop:responsiveHeight(2),
        alignSelf:'flex-end',
        marginRight:responsiveWidth(5),
        paddingLeft:responsiveWidth(2),
        marginBottom:responsiveHeight(2),
    },
    btnTxt:{
        fontSize:responsiveFontSize(2),
        color:textColor.secondary,
        marginLeft:responsiveWidth(2)
    }
})