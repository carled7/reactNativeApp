import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    btn: {

        paddingVertical: 20,
        marginBottom: 7,
        borderRadius: 8,
        marginHorizontal: 14,
    },
    btnText: {
        color: '#f0f0f0',
        fontSize: 16,
        fontWeight: '700',
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingTop: 52,
        paddingBottom: 40,
        paddingHorizontal: 21,

    },
    elevation: {
        elevation: 20,
        shadowColor: '#858585',
    },
    h1: {
        color: '#2B3538',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 30
    }
})