import React,{useEffect} from "react";
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { connect ,useDispatch} from 'react-redux'
import { buttonColor } from "../../constants/colors";
import {hidedeletemodal} from '../../redux/Actions'

const DeleteModal = (props) => {
useEffect(()=>{
    // console.log('@@',props.AllPosts.visible)
},[])
    const dispatch = useDispatch()
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.AllPosts.visible}
                onRequestClose={() => {
                    // dispatch(hidedeletemodal)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Are You sure you want to delete this item ?</Text>
                       <View style={styles.buttonRowView}>
                       <TouchableOpacity
                            style={[styles.button]}
                            // onPress={() => props.hidedeletemodal()}
                        >
                            <Text style={styles.textStyle}>YES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button]}
                            // onPress={() =>  props.hidedeletemodal()}
                        >
                            <Text style={styles.textStyle}>NO</Text>
                        </TouchableOpacity>
                       </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
       width:responsiveWidth(30),
       height:responsiveHeight(5),
       borderRadius:responsiveWidth(3),
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:buttonColor.primary
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      buttonRowView:{
          flexDirection:'row',
          width:responsiveWidth(65),
          justifyContent:'space-between'
      }
})
const mapStateToProps = state => {
    return {
        AllPosts: state
    };
}

export default connect(mapStateToProps,{hidedeletemodal})(DeleteModal)