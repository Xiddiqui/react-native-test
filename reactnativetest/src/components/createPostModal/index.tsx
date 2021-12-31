import React, { useEffect, useState } from "react";
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { connect, useDispatch } from 'react-redux'
import { buttonColor } from "../../constants/colors";
import { hidecreatepostmodal } from '../../redux/Actions'
import { TextInput } from 'react-native-paper';
import Toast from 'react-native-simple-toast'

const CreatePostModal = (props) => {
    useEffect(() => {
    }, [])
    const dispatch = useDispatch()
    const [text, setText] = useState('');
    const [discription, setDiscription] = useState('');
    const createPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: text,
                body: discription,
                userId: Math.random(),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
            Toast.show('Post Created')
            });
    }
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.AllPosts.createpostModal}
                onRequestClose={() => {
                    // dispatch(hidedeletemodal)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Create Post</Text>
                        <View>
                            <TextInput
                                label="Title"
                                value={text}
                                style={styles.txtInput}
                                onChangeText={text => setText(text)}
                            />
                        </View>
                        <View>
                            <TextInput
                                label="Discription"
                                value={discription}
                                style={styles.txtInput}
                                onChangeText={text => setDiscription(text)}
                            />
                        </View>
                        <View style={styles.buttonRowView}>
                            <TouchableOpacity
                                style={[styles.button]}
                                onPress={() => {
                                    createPost()
                                    props.hidecreatepostmodal()

                                }}
                            >
                                <Text style={styles.textStyle}>POST</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button]}
                                onPress={() => {
                                    
                                    props.hidecreatepostmodal()
                                }}
                            >
                                <Text style={styles.textStyle}>CANCEL</Text>
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
        width: responsiveWidth(30),
        height: responsiveHeight(5),
        borderRadius: responsiveWidth(3),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: buttonColor.primary
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
    buttonRowView: {
        flexDirection: 'row',
        width: responsiveWidth(65),
        justifyContent: 'space-between',
        marginTop: responsiveHeight(1)
    },
    txtInput: {
        width: responsiveWidth(70),
        marginTop: responsiveHeight(1)

    }
})
const mapStateToProps = state => {
    return {
        AllPosts: state
    };
}

export default connect(mapStateToProps, { hidecreatepostmodal })(CreatePostModal)