import React from 'react';
import {Text, View , Image, Button,Link, Menu, Navigator } from 'react-native';
import styles from './style/style';
import Sidebar from './Components/Sidebar';

export default function App() {

      
  return (

    <View style={styles.container}>

      <View style={styles.main}>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </View>
    </View>
  );
}

