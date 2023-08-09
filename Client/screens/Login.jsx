import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Input from '../components/Input'
import React from 'react'

export default function Login() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [message, setMessage] = React.useState('')

  const login = () => {
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
    fetch('http://localhost:5000/login', options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response.message === 'authenticated') setMessage('Usuario autenticado correctamente')
        else setMessage('Los datos ingresados no son correctos')
      })
  }

  return (
      <View>
        <Text style={styles.text}>Login</Text>
        <Input label='Username' placeholder='Ingrese su Nombre de Usuario' setUsername={setUsername} secureTextEntry={false} />
        <Input label='Password' placeholder='Ingrese su Contraseña' setPassword={setPassword} secureTextEntry={true} />
        <TouchableOpacity style={styles.boton} onPress={login}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <Text style={{padding: 10}}>Don't have an account? </Text>
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
