import { vh } from '../../constants/dimentation';
import { colors } from '../../constants/styles/colors';
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    welcome: {
        justifyContent: 'center', 
        alignItems: 'center',
        marginVertical:vh(50)
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.color_white,
    },
    commanText:{
        fontSize:15,
        fontWeight:'bold',
        color:colors.color_black,
        marginLeft:vh(10),
        marginBottom:10
    },   
    buttonCommanText:{
        fontSize:15,
        fontWeight:'bold',
        color:colors.color_black,
        marginLeft:vh(10),
    }
})
export default styles;