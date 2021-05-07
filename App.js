import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Welcome from './src/components/Welcome';
import firebase from './src/utils/firebase';
import Auth from './src/components/Auth';
import 'firebase/auth'

export default function App() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => { setUser(response) });
  }, []);

  if (user === undefined) return null;

  return (
    <>
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={styles.background}>
        {user ? <Logout userName={user.email} /> : <Auth />}
      </SafeAreaView>
    </>
  );
}

function Logout(props) {
  const { userName } = props;

  return (
    <View style={{ height: '100%', width: '100%' }}>
      <Welcome userName={userName}></Welcome>
    </View>)
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#15212B',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
});
