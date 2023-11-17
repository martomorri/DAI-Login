import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { commonStyles } from "../styles";
import { getAuth } from "firebase/auth";

function Logout() {
    const logout = () => {
        const auth = getAuth()
        auth.signOut()
            .then(
                navigation.navigate("Login")
            )
    }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, padding: 10, textAlign: "center" }}>
        ¿Está seguro de que quiere salir de la aplicación?
      </Text>
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.buttonYes} onPress={logout}>
          <Text style={commonStyles.buttonText}>Sí</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNo} onPress={() => navigation.navigate("Home")}>
          <Text style={commonStyles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginVertical: 10,
    marginHorizontal: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonYes: {
    backgroundColor: "blue",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: "45%",
  },
  buttonNo: {
    backgroundColor: "red",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: "45%",
  },
});

export default Logout;
