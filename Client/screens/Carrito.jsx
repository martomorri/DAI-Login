import { ScrollView, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { commonStyles } from '../styles'
import { carritoContext } from '../context/carritoContext'
import Card from '../components/Card'

export default function Carrito({ navigation }) {
    const { carrito, setCarrito } = React.useContext(carritoContext)

    return carrito.length > 0 ? (
        <ScrollView style={commonStyles.container}>
            <Text style={commonStyles.header}>Carrito</Text>
            {carrito.map(p => <Card product={p} />)}
            <TouchableOpacity
                style={commonStyles.editButton}
                onPress={() => {
                    setCarrito([])
                    navigation.navigate('Comprar')
                }
                }
            >
                <Text style={commonStyles.buttonText}>Comprar todo</Text>
            </TouchableOpacity>
        </ScrollView>
    ) : (
        <ScrollView style={commonStyles.container}>
            <Text style={commonStyles.header}>Carrito</Text>
            <Text style={{fontSize: 16, padding: 10, textAlign: "center"}}>Aun no hay productos en el carrito</Text>
            <TouchableOpacity
                style={commonStyles.editButton}
                onPress={() => {
                    navigation.navigate('HomePage')
                }
                }
            >
                <Text style={commonStyles.buttonText}>Seguir comprando</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}