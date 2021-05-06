import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import colors from '../utils/colors';

export default function Container(props) {
    const { ChangeColor, setColor1, setColor2, setColor3, setContador } = props;


    return (
        <View style={{ backgroundColor: 'white', width: '80%', height: 200, alignItems: 'center', alignContent: 'center', paddingVertical: 100, alignSelf: 'center' }}>
            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', alignContent: 'center', alignSelf: 'center', paddingHorizontal: 70 }}>
                <View style={{ flexDirection: 'column', width: '33%', alignItems: 'center', alignContent: 'center' }} >
                    <TouchableOpacity
                        style={{ backgroundColor: setColor1, width: '80%', height: 60 }}
                        onPress={ChangeColor}
                    />
                </View>
                <View style={{ flexDirection: 'column', width: '33%', alignItems: 'center', alignContent: 'center' }} >
                    <TouchableOpacity
                        style={{ backgroundColor: setColor2, width: '80%', height: 60 }}
                        onPress={ChangeColor}
                    />
                </View>
                <View style={{ flexDirection: 'column', width: '33%', alignItems: 'center', alignContent: 'center' }} >
                    <TouchableOpacity
                        style={{ backgroundColor: setColor3, width: '80%', height: 60 }}
                        onPress={ChangeColor}
                    />
                </View>
            </View>
        </View>
    );
}