import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    boxTop:{
        width: '100%',
        height: Dimensions.get('window').height/3,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    boxMiddle:{
        width: '100%',
        height: Dimensions.get('window').height/4,
        backgroundColor: 'blue',
        paddingHorizontal: 37
    },
    boxBottom:{
        width: '100%',
        height: Dimensions.get('window').height/3,
        backgroundColor: 'green'
    },

    logo:{
        width: 80,
        height: 80
    },

    titulo:{
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18
    },
    inputTitle:{
        marginLeft:5,
        color: themes.colors.gray,
        marginTop: 20
    }
}
    
)