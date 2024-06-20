import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';



export default function CategoriaMercado() {
    const [valueCidade, setValueCidade] = useState(null);
    const [valueProduto, setValueProduto] = useState(null);
    const [valueEstab, setValueEstab] = useState(null);
    
    const [isFocusProduto, setIsFocusProduto] = useState(false);
    const [isFocusCidade, setIsFocusCidade] = useState(false);
    const [isFocusEstab, setIsFocusEstab] = useState(false);
    const [dadosProdutos, setDadosProdutos] = useState([]);
    const [dadosCidades, setDadosCidades] = useState([]);
    const [dadosEstab, setDadosEstab] = useState([]);


    if(valueEstab && valueCidade){
            console.log("true")
        const cityprimaryKey = valueCidade.valueIdCidade
        const foreignCityKey = valueEstab.ValueId2Cidade
        console.log("chave primaria cidade: " + cityprimaryKey)
        console.log("chave segundaria cidade: " + foreignCityKey)

        const condicao = cityprimaryKey === foreignCityKey

        console.log(condicao)
    }
        


    useEffect(() => {
        //busca de produtos
        fetch('http://10.0.8.67:3000/product')
            .then(response => response.json())
            .then(data => {
                // Mapeia os dados para o formato esperado pelo Dropdown
                const formattedData = data.map(item => ({
                    label: `${item.nome} - R$${item.preco.toFixed(2)}`, // Formata o nome e preço como label
                    valueIdProduto: item._id // Usa o _id como valueCidade
                }));
                setDadosProdutos(formattedData);
            })
            .catch(error => console.error(error));

        fetch('http://10.0.8.67:3000/establishments')
            .then(response => response.json())
            .then(data => {
                // Mapeia os dados para o formato esperado pelo Dropdown
                const formattedData = data.map(item => ({
                    label: item.nome,
                    ValueId2Cidade: item.cidade
                }));
                setDadosEstab(formattedData)
                
            })
            .catch(error => console.error(error));

        // Busca as cidades
        fetch('http://10.0.8.67:3000/cities')
            .then(response => response.json())
            .then(data => {
                const formattedData = data.map(item => ({
                    label: item.nome, // campo 'nome' de cada cidade
                    valueIdCidade: item._id // '_id' de cada cidade
                }));
                setDadosCidades(formattedData);
            })
            .catch(error => console.error(error));
    }, []);

    
        
        

    const renderLabelProduto = () => {
        if (valueProduto || isFocusProduto) {
            return (
                <Text style={[styles.label, isFocusProduto && { color: 'blue' }]}>
                    Selecione o Produto
                </Text>

            );
        }
        return null;
    };
    const renderLabelCidade = () => {
        if (valueCidade || isFocusCidade) {
            return (
                <Text style={[styles.label, isFocusCidade && { color: 'blue' }]}>
                    Selecione a Cidade
                </Text>

            );
        }
        return null;
    };
    const renderLabelestabelecimento = () => {
        if (valueEstab || isFocusEstab) {
            return (
                <Text style={[styles.label, isFocusEstab && { color: 'blue' }]}>
                    Selecione o estabelecimento
                </Text>

            );
        }
        return null;
    };

    return (

        <View>
            <Text style={styles.title}>Selecione as opções abaixo</Text>
            <View style={styles.container}>
            {renderLabelCidade()}
                <Dropdown
                    style={[styles.dropdown, isFocusCidade && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={dadosCidades}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocusCidade ? 'Selecionar Cidade' : '...'}
                    searchPlaceholder="Search..."
                    valueIdCidade={setValueCidade}
                    onFocus={() => setIsFocusCidade(true)}
                    onBlur={() => setIsFocusCidade(false)}
                    onChange={item => {
                        setValueCidade(item);
                        setIsFocusCidade(false);
                    }}

                    renderLeftIcon={() => (
                        <AntDesign
                            style={styles.icon}
                            color={isFocusCidade ? 'blue' : 'black'}
                            name="Safety"
                            size={20}
                        />
                    )}
                />
            </View>

            <View style={styles.container}>
            {renderLabelestabelecimento()}
                <Dropdown
                    style={[styles.dropdown, isFocusEstab && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={dadosEstab}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocusCidade ? 'Selecionar Cidade' : '...'}
                    searchPlaceholder="Search..."
                    ValueId2Cidade={setValueEstab}
                    onFocus={() => setIsFocusEstab(true)}
                    onBlur={() => setIsFocusEstab(false)}
                    onChange={item => {
                        setValueEstab(item);
                        setIsFocusEstab(false);
                    }}

                    renderLeftIcon={() => (
                        <AntDesign
                            style={styles.icon}
                            color={isFocusEstab ? 'blue' : 'black'}
                            name="Safety"
                            size={20}
                        />
                    )}
                />
            </View>

            <View style={styles.container}>
                {renderLabelProduto()}
                <Dropdown
                    style={[styles.dropdown, isFocusProduto && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={dadosProdutos}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocusProduto ? 'Selecionar Produto' : '...'}
                    searchPlaceholder="Search..."
                    valueIdProduto={setValueProduto}
                    onFocus={() => setIsFocusProduto(true)}
                    onBlur={() => setIsFocusProduto(false)}
                    onChange={item => {
                        setValueProduto(item);
                        setIsFocusProduto(false);
                    }}

                    renderLeftIcon={() => (
                        <AntDesign
                            style={styles.icon}
                            color={isFocusProduto ? 'blue' : 'black'}
                            name="Safety"
                            size={20}
                        />
                    )}
                />
            </View>
        </View>



    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    title:{
        color:'blue',
        padding:24,
        textAlign:'center',
        backgroundColor:'white',
        fontSize: 18
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});