import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        
        flex: 1,
        justifyContent: 'center',
        width: '100%', 

    },
    recipeContainer: {
        flex: 1,
        width: '100%',
         },
    bottomContainer: {
        
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,

    },
    input: {
         padding: 16,
         backgroundColor: '#eee',
         borderRadius: 8,
         flex: 1, // Input elindeki tüm alanı doldursun.
         marginRight: 8,

    },
    button: {
        padding: 16,
        backgroundColor: 'blue',
        borderRadius: 8,

    },
    buttonText: {
        color: 'white'

    }

})