import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Perfil({ route, navigation }) {
    const { perfil } = route.params

    return (
        <View>
            <Text style={styles.text}>{perfil.nombre}</Text>
            <Text style={styles.text}>{perfil.apellido}</Text>
            <TouchableOpacity style={styles.boton}>
                <Text style={styles.buttonText}>Editar perfil</Text>
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