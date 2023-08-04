import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff"
  }
})
