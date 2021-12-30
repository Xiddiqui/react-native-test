import {StyleSheet} from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

export const styles = StyleSheet.create({
    container:{
        flex:1
    },
    card:{
        width:responsiveWidth(90),
        alignSelf:'center',
        marginTop:responsiveHeight(2)
    },
})