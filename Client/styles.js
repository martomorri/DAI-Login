import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 10
    },
    profileInfo: {
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    field: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    fieldLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    fieldValue: {
        fontSize: 18,
    },
    editButton: {
        backgroundColor: 'blue',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        margin: 10
    },
    logoutButton: {
        backgroundColor: 'red',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        margin: 10
    },
    volverButton: {
        backgroundColor: 'gray',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        margin: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        width: "100%",
        height: undefined,
        aspectRatio: 1.75,
    },
    price: {
        fontSize: 20,
        paddingLeft: 10,
        color: "#3b3a3a"
    },
    text: {
        fontSize: 16,
        padding: 10
    }
});
