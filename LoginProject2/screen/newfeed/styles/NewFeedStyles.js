import {StyleSheet, Platform} from 'react-native'

export default styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor: '#E9EBBE'
    },
    header:{
        
        flexDirection:'row',
        justifyContent: 'space-between',
        height: Platform.OS == 'ios' ?100:56
    },
    container_header:{
        backgroundColor:'#FFF',
        paddingTop: Platform.OS == 'ios' ? 64 : 0,
        paddingLeft:20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC'
    },
    header__text:{
        fontSize: 16,
        fontWeight: '900',
    },
    container_avatar:{
        height: 90,
        backgroundColor: '#FFF',
        margintop: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC'
    },
    avatar:{
        height: 56,
        width: 56,
        borderRadius: 28,
    },
    container_avatar_sub:{
        alignItems: 'center',
        margin: 10,
    },

    container_feed:{
        backgroundColor: '#FFF',
    },

    container_feed_head:{
        marginBottom: 10,
        flexDirection: 'row',
        
    },
    font:{
        fontWeight: '600',
        fontSize: 16,
    },
     container_feed_head_next:{
         flexDirection: 'column',
         marginLeft:10, 
     },
    container_feed_head_next_2:{
        flexDirection: 'row',
        justifyContent:'space-between', 
    },
    container_feed_head_next_2__text:{

    },
    margin10:{
        margin:10,
    },
    container_feed_react:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC'
    },
    container_feed_react__image:{
        height: 25,
        width: 25,
    },
    container_feed_react__image2:{
        height: 25,
        width: 25,
        marginLeft: 10,
    },
})