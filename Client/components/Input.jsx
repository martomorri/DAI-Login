import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Input = (props) => {
    const [secureText, setSecureText] = React.useState(props.secureTextEntry)
    const [visibility, setVisibility] = React.useState({v: false, obj: <VisibilityIcon />})

    const actualizar = (text) => {
        if (props.label === 'Mail' || props.label === 'Nombre') props.setUsername(text)
        else if (props.label === 'Contraseña' || props.label === 'Apellido') props.setPassword(text)
    }

    const updateVisibility = () => {
        !visibility.v ? setVisibility({v: true, obj: <VisibilityOffIcon />}) : setVisibility({v: false, obj: <VisibilityIcon />})
        secureText ? setSecureText(false) : setSecureText(true)
    }

    const visibilityIcon = props.secureTextEntry ? visibility.obj : <></>

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                secureTextEntry={secureText}
                style={styles.input}
                placeholder={props.placeholder}
                onChangeText={(text) => actualizar(text)}
            />
            <TouchableOpacity style={styles.visibilityButton} onPress={updateVisibility}>
                {visibilityIcon}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        margin: 10
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10
    },
    visibilityButton: {
        padding: 5,
        borderRadius: 10,
        margin: 5,
        position: "absolute",
        right: 0,
        bottom: 10
    }
});

export default Input;
