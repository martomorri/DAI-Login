import { ScrollView, Image, Text, TouchableOpacity } from "react-native"
import Rating from "../components/Rating"
import { commonStyles } from "../styles"

function Producto({ route, navigation }) {
    const { producto } = route.params

    return (
        <ScrollView style={commonStyles.container}>
            <Text style={commonStyles.header}>{producto.title}</Text>
            <Image source={{uri: producto.thumbnail}} style={commonStyles.image} />
            <Rating rating={producto.rating} />
            <Text style={commonStyles.price}>U$D{producto.price}</Text>
            <Text style={commonStyles.text}>{producto.description}</Text>
            <TouchableOpacity style={commonStyles.editButton} onPress={() => navigation.navigate("Comprar")}>
                <Text style={commonStyles.buttonText}>Comprar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Producto