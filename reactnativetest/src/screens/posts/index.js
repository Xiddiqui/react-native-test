import React from 'react'
import {
    Text,
    View,
    StatusBar
} from 'react-native'
import { AppHeader } from '../../components/header'
import { styles } from './style'

const PostScreen = () => {
    return(
        <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'}/>
        <AppHeader text={'My App'}/>
            <Text>
                Posts
            </Text>
        </View>
    )
}
export default PostScreen