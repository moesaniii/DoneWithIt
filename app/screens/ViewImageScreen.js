import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container} >
      <View style={styles.iconContainer} >
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
      </View>
      <Image resizeMode='contain' style={styles.image} source={require("../assets/chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30
  },
  container: {
    backgroundColor: colors.black,
    flex: 1
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30
  },
  iconContainer: {
    flex: 1
  },
  image: {
    flex:9,
    width: "100%",
    height: "100%"
  }
})

export default ViewImageScreen;