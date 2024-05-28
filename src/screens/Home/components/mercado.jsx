import { StyleSheet, Text, View} from 'react-native'



export default function Mercado(){

    return(
        <View style={styles.container}>
          <Text>mercado</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})