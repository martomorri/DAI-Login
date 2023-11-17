import { View, Text, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import { commonStyles } from "../styles";

function Comprar({ navigation }) {
    return (
        <View style={commonStyles.container}>
            <Text style={commonStyles.header}>Comprar</Text>
            <Input label='Numero de tarjeta' placeholder='XXXX XXXX XXXX XXXX' secureTextEntry={false} />
            <Input label='Nombre y apellido' placeholder='' secureTextEntry={false} />
            <Input label='Num. de DNI' placeholder='46873102' secureTextEntry={false} />
            <Input label='Código de seguridad' placeholder='***' secureTextEntry={false} />
            <TouchableOpacity style={commonStyles.editButton} onPress={() => navigation.navigate('CompraExitosa')}>
                <Text style={commonStyles.buttonText}>Comprar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={commonStyles.volverButton}
                onPress={() =>
                    navigation.goBack()
                }
            >
                <Text style={commonStyles.buttonText}>Volver atrás</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Comprar