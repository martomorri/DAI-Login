import { ScrollView, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { commonStyles } from '../styles'
import { productsContext } from '../context/productsContext'
import Card from '../components/Card'

export default function Home({ navigation }) {
    const { products } = React.useContext(productsContext)

    return (
        <ScrollView style={commonStyles.container}>
            <Text style={commonStyles.header}>Productos</Text>
            {products.map(p => {
                if (p.id <= 6) return <Card product={p} />
            })}
        </ScrollView>
    )
}