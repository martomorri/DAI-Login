import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { commonStyles } from '../styles'
import { userContext } from '../context/userContext'
import { getAuth } from 'firebase/auth';

export default function Perfil({ navigation }) {
  const [hasProfile, setHasProfile] = React.useState(false)
  const [profile, setProfile] = React.useState()
  const { user } = React.useContext(userContext)

  const perfilRef = collection(db, "perfil")
  const q = query(perfilRef, where("user_uid", "==", user.uid));

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        console.log(data[0])
        setProfile(data[0])
        if (data.length > 0) setHasProfile(true)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const logout = () => {
    const auth = getAuth()
    auth.signOut()
      .then(
        navigation.replace("Login")
      )
  }

  return hasProfile ? (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>Perfil de Usuario</Text>
      <View style={commonStyles.profileInfo}>
        <View style={commonStyles.field}>
          <Text style={commonStyles.fieldLabel}>Nombre:</Text>
          <Text style={commonStyles.fieldValue}>{profile.nombre}</Text>
        </View>
        <View style={commonStyles.field}>
          <Text style={commonStyles.fieldLabel}>Apellido:</Text>
          <Text style={commonStyles.fieldValue}>{profile.apellido}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={commonStyles.editButton}
        onPress={() =>
          navigation.replace('FormPerfil', { hasProfile: true, prevProfile: profile, user_uid: profile.user_uid })
        }
      >
        <Text style={commonStyles.buttonText}>Editar perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={commonStyles.volverButton}
        onPress={() =>
          navigation.replace('Home')
        }
      >
        <Text style={commonStyles.buttonText}>Volver a la Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={commonStyles.logoutButton}
        onPress={logout}
      >
        <Text style={commonStyles.buttonText}>Cerrar sesion</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>Bienvenido {user.username}</Text>
      <TouchableOpacity
        style={commonStyles.editButton}
        onPress={() => navigation.replace('FormPerfil', { hasProfile: hasProfile, prevProfile: null, user_uid: user.uid })}
      >
        <Text style={commonStyles.buttonText}>Completa tu perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={commonStyles.volverButton}
        onPress={() =>
          navigation.replace('Home')
        }
      >
        <Text style={commonStyles.buttonText}>Volver a la Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={commonStyles.logoutButton}
        onPress={logout}
      >
        <Text style={commonStyles.buttonText}>Cerrar sesion</Text>
      </TouchableOpacity>
    </View>
  )
}