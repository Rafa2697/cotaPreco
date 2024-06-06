import { Text, Pressable, PressableProps, StyleSheet } from "react-native"



export function Category({
  title,
  isSelected = false,
  ...rest
}) {
  return (
    <Pressable
      style={[styles.container, isSelected && styles.selected]}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
      height: 42,
      paddingHorizontal: 16,
      borderRadius: 7,
      justifyContent: "center",
    },
    title: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold",
    },
    selected: {
      backgroundColor: "#505059",
    },
  })