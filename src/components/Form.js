import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';


export default function Form(props) {

    const { setCantidad, setInteres, setMeses } = props;
    const [arr, setArr] = useState([])
    const [interes, setInt] = useState([])

    let changeArr = (cantidad) => {
        console.log("Hola", parseInt(cantidad))


        if (parseInt(cantidad) <= 10000) {
            setArr([
                { label: '3 meses', value: 3 },
                { label: '6 meses', value: 6 },
            ]);
            setInteres('2');
            setInt('2');
        }
        else if (parseInt(cantidad) > 10000 && parseInt(cantidad) <= 20000) {
            setArr([
                { label: '3 meses', value: 3 },
                { label: '6 meses', value: 6 },
                { label: '9 meses', value: 9 },
            ]);
            setInteres('4');
            setInt('4');

        }
        else if (parseInt(cantidad) > 20000) {
            setArr([
                { label: '3 meses', value: 3 },
                { label: '6 meses', value: 6 },
                { label: '9 meses', value: 9 },
                { label: '12 meses', value: 12 },
                { label: '24 meses', value: 24 },
            ]);
            setInteres('6');
            setInt('6');

        }
    }

    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Cantidad"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={(e) => {
                        setCantidad(e.nativeEvent.text);
                        changeArr(e.nativeEvent.text);
                    }
                    }
                />

                <Text placeholder="Interés" style={[styles.input, { fontSize: 18, alignContent: 'center', textAlign: 'center', textAlignVertical: 'center', paddingVertical: 17 }]}>Interés: {interes}</Text>
            </View>
            <RNPickerSelect
                style={pickerSelectStyles}
                onValueChange={(value) => setMeses(value)}
                placeholder={{
                    label: 'Seleccione plazos...',
                    value: '',
                }}
                items={arr}
            />
        </View>
    );


}




const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 230,
        justifyContent: 'center'
    },
    viewInputs: {
        flexDirection: 'row',
    },
    input: {
        height: 60,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
    inputP: {
        width: '40%',
        marginLeft: 5
    }

});

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff'
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft: -5,
        marginRight: -5,
    }
});