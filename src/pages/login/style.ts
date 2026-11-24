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
        alignItems: 'center',
        justifyContent: 'center'
    },

    boxMiddle:{
        width: '100%',
        height: Dimensions.get('window').height/4,
        paddingHorizontal: 37
    },
    boxBottom:{
        width: '100%',
        height: Dimensions.get('window').height/3,
        alignItems: 'center',
        justifyContent: 'center'    },

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
    },
    boxInput:{
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop:10,
        flexDirection: 'row',
        alignContent: 'center',
        paddingTop: 5,
        paddingHorizontal: 10,
        backgroundColor:themes.colors.lightGray,
        borderColor: themes.colors.lightGray
    },
    input:{
        height: '100%',
        borderRadius: 40,
        width: '90%'
    },
    button:{
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.primary,
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    },
    textBotton:{
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    textoConta:{
        
    }
}
    
)