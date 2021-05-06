import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
  const logout = () => {
    firebase.auth().signOut();
  }
  return (
    <View>
      <Welcome userName={userName}></Welcome>
      <Button title="Cerrar sesión" onPress={logout}></Button>
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
