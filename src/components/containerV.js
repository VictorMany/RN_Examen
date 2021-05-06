import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import colors from '../utils/colors';

export default function ContainerV(props) {
    const { ChangeColor, setColor1, setColor2, setColor3, setContador } = props;

    return (
        <View style={{ backgroundColor: 'white', width: '50%', height: 390, alignItems: 'center', alignContent: 'center', paddingVertical: 100, alignSelf: 'center' }}>
            <View style={{ flexDirection: 'column', width: '100%', alignItems: 'center', alignContent: 'center', paddingHorizontal: 60 }}>
                <View style={{ flexDirection: 'column', width: '100%', alignItems: 'center', alignContent: 'center', padding: 5 }} >
                    <TouchableOpacity
                        style={{ backgroundColor: setColor1, width: '70%', height: 60 }}
                        onPress={ChangeColor}

                    />
                </View>
                <View style={{ flexDirection: 'column', width: '100%', alignItems: 'center', alignContent: 'center', padding: 5 }} >
                    <TouchableOpacity
                        style={{ backgroundColor: setColor2, width: '70%', height: 60 }}
                        onPress={ChangeColor}

                    />
                </View>
                <View style={{ flexDirection: 'column', width: '100%', alignItems: 'center', alignContent: 'center', padding: 5 }} >
                    <TouchableOpacity
                        style={{ backgroundColor: setColor3, width: '70%', height: 60, padding: 10 }}
                        onPress={ChangeColor}

                    />
                </View>
            </View>
        </View>
    );
}