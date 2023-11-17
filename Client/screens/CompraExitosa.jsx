import { View, Text, TouchableOpacity } from "react-native";
import { commonStyles } from "../styles";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function CompraExitosa({ navigation }) {
    return (
        <View style={commonStyles.container}>
            <View style={{alignItems: "center"}}>
                <Text style={commonStyles.header}>Compra exitosa</Text>
                <Text style={commonStyles.text}>Su compra ha sido realizada con éxito</Text>
                <TaskAltIcon style={{padding: 10}} color="success" sx={{fontSize: 100}} />
                <TouchableOpacity style={commonStyles.editButton} onPress={() => navigation.navigate('HomePage')}>
                    <Text style={commonStyles.buttonText}>Seguir comprando</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CompraExitosa