import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';


export default function Feira(){
    return(
        <View style={styles.container}>
            <Text>
                Componente da Feira
            </Text>
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