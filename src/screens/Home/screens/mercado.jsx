import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native'
import React, { useState, useEffect, useRef } from 'react';
import api from "../../../services/api"

import {CATEGORIES, PRODUCTS} from "../../../services/utils/products"
import {Product} from '../../../components/product'
import {Category} from '../../../components/category'

// console.log(dados[0])
export default function Mercado() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(CATEGORIES[0])
  const sectionListRef = useRef<SectionList>(null)

  function handleCategorySelect(selectedCategory) {
    setCategory(selectedCategory)

    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === selectedCategory
    )

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      })
    }
  }

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await api.get('/mercados');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
      
    }
    fetchData();
  }, []);
  const renderItem = ({ item }) => (
    <View style={styles.item} key={item}>
      <Text>{item.nome}</Text>
      <Text>{item.email}</Text>
    </View>
  );

  // console.log(text)
  return (
    // <View style={styles.container}>
    //   <FlatList
    //     data={data}
    //     renderItem={renderItem}
    //     keyExtractor={(item) => item.id}
    //   />
     
    // </View>
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Category
            title={item}
            onPress={() => handleCategorySelect(item)}
            isSelected={item === category}
          />
        )}
        style={styles.categories}
        contentContainerStyle={{
          gap: 12,
          paddingHorizontal: 32,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
      />

      <SectionList
        ref={sectionListRef}
        sections={PRODUCTS}
        keyExtractor={(item) => item}
        stickySectionHeadersEnabled={false}
        renderItem={() => <Product />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.sectionContainer}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: "#09090A",
  //   paddingTop: 52,
  // },
  header: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 18,
    marginTop: 32,
  },
  categories: {
    height: 46,
  },
  sectionContainer: {
    paddingBottom: 100,
    paddingHorizontal: 32,
  },
})