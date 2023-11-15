import { StyleSheet, SafeAreaView } from 'react-native'
import Navigator from './Navigator'
import React, { useState } from 'react'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { dbContext } from './context/dbContext';
import { userContext } from './context/userContext';
import { productsContext } from './context/productsContext'

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
  const [products, setProducts] = React.useState([])

  const limit = 100
  const url = `https://dummyjson.com/products?limit=${limit}&skip=0`

  React.useEffect(() => {
    fetch(url)
      .then(res => {
        setProducts((prevProductos) => [
          ...prevProductos,
          ...res.data.products.map((p) => ({
            id: p.id,
            title: p.title,
            description: p.description,
            price: p.price,
            rating: p.rating,
            thumbnail: p.thumbnail,
            images: p.images,
          })),
        ]);
      })
  }, [])

  return (
    <dbContext.Provider value={database}>
      <userContext.Provider value={{ user, setUser }}>
        <productsContext.Provider value={{ products, setProducts }}>
          <SafeAreaView style={styles.container}>
            <Navigator />
          </SafeAreaView>
        </productsContext.Provider>
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
