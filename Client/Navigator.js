import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useIsFocused } from '@react-navigation/native'
import Home from './screens/Home'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import FormPerfil from './screens/FormPerfil'
import Perfil from './screens/Perfil'


const Tab = createBottomTabNavigator()

const AuthStack = createNativeStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <AuthStack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator()

function ProfileStackScreen() {
  <ProfileStack.Navigator>
    <ProfileStack.Screen options={{ headerShown: false }} name="Perfil" component={Perfil} />
    <ProfileStack.Screen options={{ headerShown: false }} name="FormPerfil" component={FormPerfil} />
  </ProfileStack.Navigator>
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: () => {
          const isFocused = useIsFocused()
          const color = isFocused ? "primary" : ""
          if (route.name === 'Home') {
            return <HomeIcon color={color} />
          } else if (route.name === 'Login') {
            return <LoginIcon color={color} />
          } else if (route.name === 'Perfil') {
            return <AccountCircleIcon color={color} />
          }
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen options={{ headerShown: false }} name="Login" component={AuthStackScreen} />
        <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Tab.Screen options={{ headerShown: false }} name="Perfil" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}