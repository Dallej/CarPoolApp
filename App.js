import React from 'react';
import {Text, View , Image, Button,Link } from 'react-native';
import styles from './style/style';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View >
        <Image source={require("./img/OAMKlogo.png")} style={styles.logo} />
        </View>
        {/* <Link to="./Info" className="btn btn-primary">info</Link> */}
        <View>
          <Button style={styles.button} onPress={() => navigation.navigate('Rides')}>
            Rides
          </Button>
        </View>
        <Button style={styles.button} onPress={() => navigation.navigate('OfferARide')}>
          Offer a ride +
        </Button>
        <View>
          <Button style={styles.button} onPress={() => navigation.navigate('Info')}>
            Instructions
          </Button>
        </View>
      </View>
    </View>
  );
}

