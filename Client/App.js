import { StyleSheet, SafeAreaView } from 'react-native'
import Navigator from './Navigator'
import React, { useState } from 'react'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { dbContext } from './context/dbContext';
import { userContext } from './context/userContext';

const firebaseConfig = {
  apiKey: "AIzaSyD41FqYWlvl6ZT6Nc_yhq20lghkt-NXZC8",
  authDomain: "dai-login-9da28.firebaseapp.com",
  projectId: "dai-login-9da28",
  storageBucket: "dai-login-9da28.appspot.com",
  messagingSenderId: "77048114860",
  appId: "1:77048114860:web:8442f361f6839a7ba2b909",
  measurementId: "G-924QZS3D6L"
};

const app = initializeApp(firebaseConfig)

const database = getFirestore(app)

export default function App() {
  const [user, setUser] = useState()

  return (
    <dbContext.Provider value={database}>
      <userContext.Provider value={{user, setUser}}>
        <SafeAreaView style={styles.container}>
          <Navigator />
        </SafeAreaView>
      </userContext.Provider>
    </dbContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff"
  }
})
