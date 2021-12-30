import React, { useEffect } from 'react'
import {
    Text,
    View,
    StatusBar,
    FlatList
} from 'react-native'
import { AppHeader } from '../../components/header'
import { styles } from './style'
import { fetchposts } from '../../redux/Actions'
import { connect } from 'react-redux'
import { Card, Title, Paragraph } from 'react-native-paper';


const PostScreen = (props) => {

    useEffect(() => {
        props.fetchposts()
        console.log('data',props.AllPosts.postArr)
        return () => {

        }
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
            <AppHeader text={'My App'} />
        
            <View>
           
                {/* <Card style={styles.card}>
                    <Card.Content>
                        <Title>{props.AllPosts.people.title}</Title>
                        <Paragraph>{props.AllPosts.people.body}</Paragraph>
                    </Card.Content>
                </Card> */}
            </View>
        </View>
    )
}
const mapStateToProps = state => {
    return {
        AllPosts: state
    };
}

export default connect(mapStateToProps, { fetchposts })(PostScreen)