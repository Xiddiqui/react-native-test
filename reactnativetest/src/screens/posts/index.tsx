import React, { useEffect, useState } from 'react'
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
import { showdeletemodal, showcreatepostmodal,extrastatefalse } from '../../redux/Actions'
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
        dispatch(fetchposts())
        return () => {
        }
    }, [])


    const fetchpost = useSelector(state => state?.postReducer?.postArr);
    const extra = useSelector(state => state?.postReducer?.extra);

console.log('\n]\n sttt',extra);



    const dispatch = useDispatch();

    const [dummt, setdummt] = useState([
        {
            body: "dummy",
            title: 'dumnmr tt',
            id: 46567
        }
    ])
    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
            <AppHeader text={'My App'} />

            <AddPostButton onPress={() => {
  
                dispatch(showcreatepostmodal())
                // dispatch(extrastatefalse())
            }} />


            <FlatList
                data={fetchpost}
                extraData={extra}
                renderItem={({ item, index }) => (
                    <View>
                        <Card style={styles.card}>
                            <Card.Content>
                                <Title>{item.title}</Title>
                                <Paragraph>{item.body}</Paragraph>
                                <View style={styles.iconView}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            dispatch(showdeletemodal())
                                        }}
                                    >
                                        <Icon name={'delete'} color={iconColor.primary} size={responsiveFontSize(4)} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon name={'file-edit-outline'} color={iconColor.primary} size={responsiveFontSize(4)} />
                                    </TouchableOpacity>
                                </View>
                            </Card.Content>
                        </Card>
                    </View>
                )}
            />

            {/* <DeleteModal/> */}
            <CreatePostModal />
        </View>
    )
}
// const mapStateToProps = state => {
//     return {
//         AllPosts: state
//     };
// }

// export default connect(mapStateToProps, { fetchposts,showcreatepostmodal})(PostScreen)
export default PostScreen;