import React from 'react';
import { commonStyles } from '../styles'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Card = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.thumbnail }} style={styles.image}></Image>
            <Text style={styles.cardTitle}>{product.title}</Text>
            <Text style={{ fontSize: 16, padding: 10 }}>{product.description}</Text>
            <TouchableOpacity style={commonStyles.editButton}>
                <Text style={commonStyles.buttonText}>Ver mas</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        border: "1px solid black",
        borderRadius: "10px",
        marginVertical: 10,
        margin: 10,
    },
    image: {
        width: 352,
        height: 300,
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 0,
        marginTop: 10
    }
});

export default Card;
