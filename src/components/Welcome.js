import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

export default function Welcome(props) {
    const { userName } = props;
    return (
        <>
            <Text
                style={styles.text}
            >Bienvenido: {userName}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',

    },
    text: {
        color: "#E0DE38",
        width: "100%",
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 100
    },

});