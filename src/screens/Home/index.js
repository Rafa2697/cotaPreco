import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import React from 'react';



export default function Home({navigation}) {
    return (

            <SafeAreaView style={styles.container}>
            <ScrollView >
                <View style={{flex: 1, justifyContent:'space-evenly', alignItems:'center', gap: 30}}>
                <TouchableOpacity style={styles.wraperComponents} onPress={() => navigation.navigate('Mercado')}>
                    <ImageBackground source={require('../../../assets/images/mercado.jpg')} style={styles.imgBackground}>
                        <Text style={styles.texto}>Mercado</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.wraperComponents} onPress={() => navigation.navigate('Padaria')}>
                    <ImageBackground source={require('../../../assets/images/padaria.jpeg')} style={styles.imgBackground}>
                        <Text style={styles.texto}>Padaria</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.wraperComponents} onPress={() => navigation.navigate('Acougue')}>
                    <ImageBackground source={require('../../../assets/images/acogue.jpeg')} style={styles.imgBackground}>
                        <Text style={styles.texto}>Açougue</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.wraperComponents} onPress={() => navigation.navigate('Feira')}>
                    <ImageBackground source={require('../../../assets/images/feira.jpeg')} style={styles.imgBackground}>
                        <Text style={styles.texto}>Feira</Text>
                    </ImageBackground>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.wraperComponents} onPress={() => navigation.navigate('Gas')}>
                    <ImageBackground source={require('../../../assets/images/gas.jpeg')} style={styles.imgBackground}>
                        <Text style={styles.texto}>Gás de cozinha</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.wraperComponents} onPress={() => navigation.navigate('Combustivel')}>
                    <ImageBackground source={require('../../../assets/images/combustivel.jpeg')} style={styles.imgBackground}>
                        <Text style={styles.texto}>Combustivel</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wraperComponents} onPress={() => navigation.navigate('Escola')}>
                    <ImageBackground source={require('../../../assets/images/escola.jpeg')} style={styles.imgBackground}>
                        <Text style={styles.texto}>Escola</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wraperComponents} onPress={() => navigation.navigate('Construcao')}>
                    <ImageBackground source={require('../../../assets/images/construcao.jpeg')} style={styles.imgBackground}>
                        <Text style={styles.texto}>Construção</Text>
                    </ImageBackground>
                </TouchableOpacity>
               
                </View>
                
            </ScrollView>
        </SafeAreaView>
        
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        paddingTop: StatusBar.currentHeight,
        
    },
    wraperComponents: {
        alignItems:'center',
        borderRadius: 16,
        elevation: 5,
        width: '90%',
        height: 120
    },
    imgBackground: {
        width: "100%",
        height: '100%',
        resizeMode:'cover',
        alignItems:"center",
        justifyContent:'center',
        borderRadius: 16,
    },
    texto: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000a0',
        padding: 5

    }

});