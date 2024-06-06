import { View } from "react-native"

export function Product() {
    return <View style={styles.container} />
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