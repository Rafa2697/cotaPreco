import { StyleSheet, View, Text } from 'react-native';



export default function Home() {
    return (

        <View style={styles.container}>
            <Text>
                tela com os produtos
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});