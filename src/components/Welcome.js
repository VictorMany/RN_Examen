import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';
import Form from './Form';
import Footer from './Footer';
import ResultCalculation from './ResultCalculation';
import firebase from '../utils/firebase';
import Auth from './Auth';
import 'firebase/auth'

//LogBox.ignoreAllLogs();
export default function Welcome(props) {
    const { userName } = props;

    const [cantidad, setCantidad] = useState(0);
    const [interes, setInteres] = useState(0);
    const [meses, setMeses] = useState(0);
    const [iva, setIVA] = useState(0);
    const [total, setTotal] = useState(0);
    const [nombre, setNombre] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (cantidad && interes && meses) calculate();
        else reset();
    }, [cantidad, interes, meses]);

    const calculate = () => {
        reset();
        if (!cantidad) {
            setErrorMessage('No has ingresado ningun monto');
            console.log(errorMessage)
        } else if (!interes) {
            setErrorMessage('añade los interés');
            console.log(errorMessage)
        } else if (!meses) {
            setErrorMessage('añade los meses');
            console.log(errorMessage)
        }
        else {
            const i = interes / 100;
            let ivalocal = 0;
            ivalocal = cantidad * 0.16
            setIVA(ivalocal);

            const mensual = (cantidad * (1 + i)) / meses;
            console.log(mensual)
            setTotal(
                {
                    pmensual: mensual.toFixed(2),
                    ptotal: parseInt(mensual * meses).toFixed(2)
                }
            );
            setNombre(userName);
        }
    };

    const reset = () => {
        setErrorMessage('');
        setTotal(null)
    }

    return (
        <View style={{ height: '100%' }}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles2.safeArea}>
                <Text
                    style={styles.text }
                >Bienvenido: {userName}
                </Text>
                <View style={styles2.background} />
                <Text style={styles2.titleApp}>Préstamos</Text>
                <Form
                    setCantidad={setCantidad}
                    setInteres={setInteres}
                    setMeses={setMeses}
                />
            </SafeAreaView>

            <ResultCalculation
                nombre={nombre}
                cantidad={cantidad}
                interes={interes}
                iva={iva}
                total={total}
                errorMessage={errorMessage}
            />

            <Footer calculate={calculate} />

            <View style={styles2.login}>
                <Button color="#CC2121DC" title="Cerrar sesión" onPress={logout}></Button>
            </View>

        </View>
    );
}

const logout = () => {
    firebase.auth().signOut();
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
        margin: 20,
        paddingLeft: 20, 
    },
});

const styles2 = StyleSheet.create({
    safeArea: {
        height: 400,
        alignItems: "center",
    },

    background: {
        backgroundColor: '#185FCA',
        height: 200,
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position: 'absolute',
        zIndex: -1
    },

    titleApp: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15
    },

    login: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 0,
    },
});