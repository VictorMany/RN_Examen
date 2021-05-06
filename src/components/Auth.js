import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function Auth(props) {
    const [isLogin, setIsLogin] = useState(false);
    const changeForm = () => {
        setIsLogin(!isLogin);
    }

    return (
        <View style={styles.view}>
            <Image style={styles.logo} source={require('../assets/apple.png')} />
            {
                isLogin ? (
                    <LoginForm changeForm={changeForm} />
                ) : (
                    <RegisterForm changeForm={changeForm} />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    logo: {
        width: '70%',
        height: 240,
        marginTop: 50,
        marginBottom: 50
    }
})
