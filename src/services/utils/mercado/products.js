
// const PRODUCTS = [
//     {
//       title: "Ofertas",
//       data: Array.from({ length: 3 }, (_, index) => String(index)),
//     },
//     {
//       title: "Alimentos",
//       data: Array.from({ length: 10 }, (_, index) => String(index)),
//     },
//     {
//       title: "Mercearia",
//       data: Array.from({ length: 10 }, (_, index) => String(index)),
//     },
//     {
//       title: "Sobremesas",
//       data: Array.from({ length: 7 }, (_, index) => String(index)),
//     },
//     {
//       title: "Bebidas",
//       data: Array.from({ length: 5 }, (_, index) => String(index)),
//     },
//   ]
const PRODUCTS = [
  {
    title: "Ofertas",
    data: [
      { nome: "Camiseta", preco: 19.90 },
      { nome: "Calça Jeans", preco: 49.90 },
      { nome: "Tênis", preco: 79.90 },
      (_, index) => String(index)
    ],
    
  },
  {
    title: "Alimentos",
    data: [
      { nome: "Leite", preco: 3.50 },
      { nome: "Ovos", preco: 5.90 },
      { nome: "Pão", preco: 2.80 },
      { nome: "Frango", preco: 9.90 },
      { nome: "Carne Moída", preco: 7.50 },
      { nome: "Arroz", preco: 4.90 },
      { nome: "Feijão", preco: 3.80 },
      { nome: "Macarrão", preco: 2.50 },
      { nome: "Batata", preco: 3.00 },
      { nome: "Tomate", preco: 2.20 }
    ]
  },
  {
    title: "Mercearia",
    data: [
      { nome: "Shampoo", preco: 8.90 },
      { nome: "Sabonete", preco: 3.50 },
      { nome: "Creme Dental", preco: 4.20 },
      { nome: "Papel Higiênico", preco: 5.80 },
      { nome: "Limpador Multiuso", preco: 9.50 },
      { nome: "Detergente", preco: 7.90 },
      { nome: "Alvejante", preco: 4.50 },
      { nome: "Desodorante", preco: 6.30 },
      { nome: "Maquiagem", preco: 22.50 },
      { nome: "Perfume", preco: 55.00 }
    ]
  },
  {
    title: "Sobremesas",
    data: [
      { nome: "Sorvete", preco: 5.00 },
      { nome: "Bolo", preco: 18.00 },
      { nome: "Torta", preco: 25.00 },
      { nome: "Pudim", preco: 12.00 },
      { nome: "Mousse", preco: 15.00 },
      { nome: "Doce", preco: 3.00 },
      { nome: "Chocolate", preco: 10.00 }
    ]
  },
  {
    title: "Bebidas",
    data: [
      { nome: "Água", preco: 2.00 },
      { nome: "Suco", preco: 3.50 },
      { nome: "Refrigerante", preco: 4.00 },
      { nome: "Cerveja", preco: 5.50 },
      { nome: "Vinho", preco: 25.00 }
    ]
  }
];

  
  const CATEGORIES = PRODUCTS.map((item) => item.title)
  
  export { PRODUCTS, CATEGORIES }