
import{StyleSheet} from "react-native";
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387'
    },
    container_header:{
        flex:1,
        justifyContent:'flex-end',
        paddingBottom: 30,
        paddingLeft: 30,
    },

    container_header__text:{
        color: '#FFF',
        fontSize: 30,
        fontWeight: '500',
    },

    container_form_login:{
        flex:2,
        backgroundColor:'#FFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30,
    },

    container_form_login_input_container:{
        flexDirection:'column',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC'
    },
    container_form_login_input_container_textinput:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    container_form_login_input_container_textinput__input:{
        flex:1,
        padding:10,
    },
    margin_top_20:{
        marginTop:20
    },
    btn:{
        height:42,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    },
    btn__primary:{
        backgroundColor: '#009387'
    },
    btn__second:{
        borderWidth:1,
        borderColor:'#009387'   
    },
    btn__primaryText:{
        color:'#FFF'
    },
    btn__primaryText2:{
        color:'#009387'
    }
  })