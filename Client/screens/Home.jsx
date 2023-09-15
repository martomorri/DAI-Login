import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Home({ route, navigation }) {
    const { user } = route.params
    const [hasProfile, setHasProfile] = React.useState(false)
    const [profile, setProfile] = React.useState()
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const url = 'http://localhost:5000/getProfile/' + user.username
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setHasProfile(response.message === 'profile found')
                const hasProfileBoca = response.message === 'profile found'
                hasProfileBoca ? setProfile({ 'id': response.id, 'nombre': response.nombre, 'apellido': response.apellido }) : setProfile()
            })
            .finally(
                setIsLoading(false)
            )
    }, [])


    return isLoading ? (
        <View>
            <Text style={styles.text}>Cargando...</Text>
        </View>
    ) : hasProfile ? (
        <View>
            <Text style={styles.text}>Bienvenido {profile.nombre} {profile.apellido}</Text>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Perfil', { perfil: profile })}>
                <Text style={styles.buttonText}>Ver perfil</Text>
            </TouchableOpacity>
        </View>
    ) : (
        <View>
            <Text style={styles.text}>Bienvenido {user.username}</Text>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('FormPerfil', { hasProfile: hasProfile, prevProfile: null })}>
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