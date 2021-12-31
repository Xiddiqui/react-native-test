import React, { useEffect } from 'react'
import {
    Text,
    View,
    StatusBar,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { AppHeader } from '../../components/header'
import { styles } from './style'
import { fetchposts } from '../../redux/Actions'
import {showdeletemodal , showcreatepostmodal} from '../../redux/Actions'
import { connect } from 'react-redux'
import { Card, Title, Paragraph } from 'react-native-paper';
import { AddPostButton } from '../../components/addButton'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { iconColor } from '../../constants/colors'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import DeleteModal from '../../components/deletePostModal'
import { useDispatch, useSelector } from "react-redux";
import CreatePostModal from '../../components/createPostModal'

const PostScreen = (props) => {
    useEffect(() => {
        props.fetchposts()
        return () => {

        }
    }, [])
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
            <AppHeader text={'My App'} />
            <View>
                <AddPostButton onPress={()=>{
                    props.showcreatepostmodal()
                }}/>
            </View>
            <View>
                <FlatList
                    data={props.AllPosts.postArr}
                    renderItem={({ item, index }) => (
                        <View>
                            <Card style={styles.card}>
                                <Card.Content>
                                    <Title>{item.title}</Title>
                                    <Paragraph>{item.body}</Paragraph>
                                    <View style={styles.iconView}>
                                        <TouchableOpacity
                                        onPress={()=>{
                                           props.showdeletemodal()
                                        }}
                                        >
                                        <Icon name={'delete'} color={iconColor.primary} size={responsiveFontSize(4)}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                        <Icon name={'file-edit-outline'} color={iconColor.primary} size={responsiveFontSize(4)}/>
                                        </TouchableOpacity>
                                    </View>
                                </Card.Content>
                            </Card>
                        </View>
                    )}
                />
            </View>
            {/* <DeleteModal/> */}
            <CreatePostModal/>
        </View>
    )
}
const mapStateToProps = state => {
    return {
        AllPosts: state
    };
}

export default connect(mapStateToProps, { fetchposts,showcreatepostmodal})(PostScreen)