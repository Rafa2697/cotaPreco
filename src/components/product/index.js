import { View, StyleSheet } from "react-native"

export function Product() {
    return <View style={styles.container} /> //item que será renderizado
  }


const styles = StyleSheet.create({
    container: {
      backgroundColor: "#505059",
      height: 82,
      width: "100%",
      marginBottom: 16,
      borderRadius: 12,
    },
  })