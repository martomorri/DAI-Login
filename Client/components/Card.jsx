import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = ({ product }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{product.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        margin: 10
    },
});

export default Card;
