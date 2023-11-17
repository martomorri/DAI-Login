import React from "react";
import { commonStyles } from "../styles";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Card = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image}></Image>
      <Text style={styles.cardTitle}>{product.title}</Text>
      <Text style={{ fontSize: 20, paddingLeft: 10, color: "#3b3a3a" }}>U$D{product.price}</Text>
      <Text style={{ fontSize: 16, padding: 10 }}>{product.description}</Text>
      <TouchableOpacity style={commonStyles.editButton}>
        <Text style={commonStyles.buttonText}>Ver mas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginVertical: 10,
    margin: 10,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: "100%",
    height: undefined,
    aspectRatio: 1.75,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 0,
    marginTop: 10,
  },
});

export default Card;
