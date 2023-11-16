import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useIsFocused } from '@react-navigation/native'
import Home from './screens/Home'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import FormPerfil from './screens/FormPerfil'
import Perfil from './screens/Perfil'


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

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: () => {
        const isFocused = useIsFocused()
        const color = isFocused ? "primary" : ""
        if (route.name === 'Home') {
          return <HomeIcon color={color} />
        } else if (route.name === 'Perfil') {
          return <AccountCircleIcon color={color} />
        } else if (route.name === 'Logout') {
          return <LogoutIcon />
        }
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Tab.Screen options={{ headerShown: false }} name="Perfil" component={ProfileStackScreen} />
      <Tab.Screen options={{ headerShown: false }} name="Logout" component={Logout} />
    </Tab.Navigator>
  )
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Inicio" component={HomeTabs} />
        <Stack.Screen options={{ headerShown: false }} name="Authentication" component={AuthStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}