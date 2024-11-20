import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
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
    // const [estabFiltrados, setEstabFiltrados] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        preco: '',
        descricao: ''
    });


    useEffect(() => {

        // Busca as cidades
        fetch('https://api-cotapreco.onrender.com/cities')
            .then(response => response.json())
            .then(data => {
                const formattedData = data.map(item => ({
                    label: item.nome, // campo 'nome' de cada cidade
                    valueIdCidade: item._id // '_id' de cada cidade
                }));
                setDadosCidades(formattedData);

            })
            .catch(error => console.error(error));

        fetch('https://api-cotapreco.onrender.com/establishments')
            .then(response => response.json())
            .then(data => {
                const formattedData = data.map(item => ({
                    label: item.nome,
                    value: item._id,
                    ValueId2Cidade: item.cidade
                }));
                setDadosEstab(formattedData)
            })
            .catch(error => console.error(error));

        //busca de produtos
        fetch('https://api-cotapreco.onrender.com/product')
            .then(response => response.json())
            .then(data => {
                // Mapeia os dados para o formato esperado pelo Dropdown
                const formattedData = data.map(item => ({
                    label: `${item.nome} - R$${item.preco ? item.preco.toFixed(2) : '0.00'}`, // Formata o nome e preço como label
                    value: item._id,
                    ValueId2Estab: item.estabelecimento
                }));
                setDadosProdutos(formattedData);
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

    const getFilteredEstablishments = () => {
        if (!valueCidade) return [];
        const filtered = dadosEstab.filter(estab => estab.ValueId2Cidade === valueCidade);
        return filtered;
    };
    const getFilteredProducts = () => {
        if (!valueEstab) return [];
        const filtered = dadosProdutos.filter(produto => {
            return produto.ValueId2Estab === valueEstab;
        });
        return filtered;
    };

    //função para abrir o formulário de atualização
    const handleUpdateProduct = async () => {
        try {
            const response = await fetch(`https://api-cotapreco.onrender.com/product/${valueProduto}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Produto atualizado com sucesso!');
                setShowForm(false);
            } else {
                alert('Erro ao atualizar produto');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao atualizar produto');
        }
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
                        setValueCidade(item.valueIdCidade);
                        setIsFocusCidade(true);
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

                    data={getFilteredEstablishments()}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    value={valueEstab}
                    disabled={!valueCidade}
                    placeholder={!valueCidade ? 'Selecione uma cidade primeiro' : 'Selecionar Estabelecimento'}
                    searchPlaceholder="Search..."

                    onFocus={() => setIsFocusEstab(true)}
                    onBlur={() => setIsFocusEstab(false)}
                    onChange={item => {
                        console.log('Selected establishment:', item);
                        setValueEstab(item.value);
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
                    data={getFilteredProducts()}
                    search
                    maxHeight={300}
                    labelField="label"
                    value={valueProduto}
                    valueField="value"
                    disabled={!valueEstab}
                    placeholder={!valueProduto ? 'Selecione um estabelecimento primeiro' : 'Selecionar Produto'}
                    searchPlaceholder="Search..."
                    onFocus={() => setIsFocusProduto(true)}
                    onBlur={() => setIsFocusProduto(false)}
                    onChange={item => {
                        console.log('Selected product:', item);
                        setValueProduto(item.value);
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

            {valueProduto && ( // Renderiza o formulário apenas se houver um produto selecionado
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do produto"
                        value={formData.nome}
                        onChangeText={(text) => setFormData({ ...formData, nome: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Preço"
                        value={formData.preco}
                        keyboardType="numeric"
                        onChangeText={(text) => setFormData({ ...formData, preco: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Descrição"
                        value={formData.descricao}
                        multiline
                        onChangeText={(text) => setFormData({ ...formData, descricao: text })}
                    />
                    <Button
                        title="Atualizar Produto"
                        onPress={handleUpdateProduct}
                    />
                </View>
            )}
        </View>



    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    title: {
        color: 'blue',
        padding: 24,
        textAlign: 'center',
        backgroundColor: 'white',
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
    formContainer: {
        backgroundColor: 'white',
        padding: 16,
        marginTop: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        paddingHorizontal: 10,
    }
});