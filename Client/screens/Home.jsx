import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Home({ route, navigation }) {
    const { user } = route.params

    return (
        <View>
            <Text style={styles.text}>Bienvenido {user.username}</Text>
            <TouchableOpacity style={styles.boton} onPress={navigation.navigate('FormPerfil')}>
                <Text style={styles.buttonText}>Completa tu perfil</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 10,
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
        fontWeight: "bold",
    },
    boton: {
        backgroundColor: "blue",
        alignItems: "center",
        padding: 10,
        margin: 10,
    },
    buttonText: {
        color: "white",
    },
})