import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native'
import Input from '../components/Input'
import React from 'react'
import { commonStyles } from '../styles'
import auth from '@react-native-firebase/auth'

function Login({ navigation }) {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [message, setMessage] = React.useState('')

  const loginFirebase = () => {

    auth()
      .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

  const logoutFirebase = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

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
        if (response.message === 'authenticated') {
          setMessage('Usuario autenticado correctamente')
          navigation.navigate('Home', { user })
        }
        else setMessage('Los datos ingresados no son correctos')
      })
  }

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>Login</Text>
      <Input label='Username' placeholder='Ingrese su Nombre de Usuario' setUsername={setUsername} secureTextEntry={false} />
      <Input label='Password' placeholder='Ingrese su Contraseña' setPassword={setPassword} secureTextEntry={true} />
      <TouchableOpacity style={commonStyles.editButton} onPress={login}>
        <Text style={commonStyles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <Text style={{ padding: 10 }}>Don't have an account? <Link style={styles.link} to={{ screen: 'SignUp' }}>Sign Up</Link></Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  message: {
    padding: 10,
    fontSize: 18,
    color: 'black'
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
})

export default Login
