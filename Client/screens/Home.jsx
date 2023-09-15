import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Home({ route, navigation }) {
    const { user } = route.params

    let profile

    const createProfile = () => {
        navigation.navigate('FormPerfil', {user})
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }

    fetch('http://localhost:5000/getProfile', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            profile = response.message === 'profile not found' ? <TouchableOpacity style={styles.boton} onPress={createProfile}>
                <Text style={styles.buttonText}>Completa tu perfil</Text>
            </TouchableOpacity> : <Text style={styles.text}>{response.nombre} {response.apellido}</Text>
        })

    return (
        <View>
            <Text style={styles.text}>Bienvenido {user.username}</Text>
            {profile}
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