import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './style/style'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
          <image src="./img/OAMKlogo"></image>
        </View>

        <View>
          <button onPress={() => navigation.navigate('Rides')}>
            Rides
          </button>
        </View>
        <button onPress={() => navigation.navigate('OfferARide')}>
          Offer a ride +
        </button>
        <View>
          <button onPress={() => navigation.navigate('Info')}>
            Instructions
          </button>
        </View>
      </View>
    </View>
  );
}

