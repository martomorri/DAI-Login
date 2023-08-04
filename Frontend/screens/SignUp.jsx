import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Input from '../components/Input'
import React from 'react'

export default function SignUp() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [message, setMessage] = React.useState('')

  const signUp = () => {
    const user = {
      username: username,
      pass: password
    }
    console.log(username, password)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    }
    fetch('http://localhost:5000/', options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response.message === 'authenticated') setMessage('Usuario autenticado correctamente')
        else setMessage('Los datos ingresados no son correctos')
      })
  }

  return (
      <View>
        <Text style={styles.text}>Sign Up</Text>
        <Input label='Username' placeholder='Ingrese su Nombre de Usuario' setUsername={setUsername} />
        <Input label='Password' placeholder='Ingrese su Contraseña' setPassword={setPassword} />
        <TouchableOpacity style={styles.boton} onPress={signUp}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <Text>Don't have an account? </Text>
        <Text style={styles.message}>{message}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
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
  message: {
    padding: 10,
    fontSize: 18,
    color: 'black'
  }
})
