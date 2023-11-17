import * as React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/MaterialIcons'
// import HomeIcon from '@mui/icons-material/Home'
// import LogoutIcon from '@mui/icons-material/Logout'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useIsFocused } from '@react-navigation/native'
import Home from './screens/Home'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import FormPerfil from './screens/FormPerfil'
import Perfil from './screens/Perfil'
import Logout from './screens/Logout'
import Producto from './screens/Producto'
import Comprar from './screens/Comprar'
import CompraExitosa from './screens/CompraExitosa'
import Carrito from './screens/Carrito'


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function AuthStackScreen() {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <AuthStack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
}


function ProfileStackScreen() {
  const ProfileStack = createNativeStackNavigator()

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen options={{ headerShown: false }} name="VerPerfil" component={Perfil} />
      <ProfileStack.Screen options={{ headerShown: false }} name="FormPerfil" component={FormPerfil} />
    </ProfileStack.Navigator>
  )
}

function HomeStackScreen() {
  const HomeStack = createNativeStackNavigator()

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen options={{ headerShown: false }} name="HomePage" component={Home}></HomeStack.Screen>
      <HomeStack.Screen options={{ headerShown: false }} name="Producto" component={Producto}></HomeStack.Screen>
      <HomeStack.Screen options={{ headerShown: false }} name="Comprar" component={Comprar}></HomeStack.Screen>
      <HomeStack.Screen options={{ headerShown: false }} name="CompraExitosa" component={CompraExitosa}></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: () => {
        const isFocused = useIsFocused()
        const color = isFocused ? "#3483fa" : "black"
        if (route.name === 'Home') {
          return <Icon name="home" size={20} color={color} />
        } else if (route.name === 'Perfil') {
          return <Icon name="account-circle" size={20} color={color} />
        } else if (route.name === 'Carrito') {
          return <Icon name="shopping-cart" size={20} color={color} />
        } else if (route.name === 'Salir') {
          return <Icon name="logout" size={20} color={color} />
        }
      },
      tabBarActiveTintColor: '#3483fa',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeStackScreen} />
      <Tab.Screen options={{ headerShown: false }} name="Perfil" component={ProfileStackScreen} />
      <Tab.Screen options={{ headerShown: false }} name="Carrito" component={Carrito} />
      <Tab.Screen options={{ headerShown: false }} name="Salir" component={Logout} />
    </Tab.Navigator>
  )
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 100, height: undefined, aspectRatio: 1.6 }}
      source={{ uri: "https://edicomgroup.es/dam/jcr:713680c7-7c2e-4145-bd94-2f7b5de20bd6/mercadolibre_integration.png" }}
    />
  )
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#e0e00d',
          },
          headerTitleAlign: 'center',
          headerBackVisible: false,
          headerLeft: null,
          headerTitle: () => <LogoTitle />
        }}
      >
        <Stack.Screen name="Authentication" component={AuthStackScreen} />
        <Stack.Screen name="Inicio" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}