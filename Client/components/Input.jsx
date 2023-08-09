import React from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'

const Input = (props) => {
    const actualizar = text => {
        if (props.label === 'Username') props.setUsername(text)
        else if (props.label === 'Password') props.setPassword(text)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput secureTextEntry={props.secureTextEntry} style={styles.input} placeholder={props.placeholder} onChangeText={text => actualizar(text)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    label: {
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
})

export default Input