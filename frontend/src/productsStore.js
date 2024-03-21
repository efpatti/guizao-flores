const productsArray = [
  {
    id: "price_1OQaYNKEH2NVkDD3R3HcMJDt",
    title: "Conjunto Churrasco Tábua + Faca + Garfo (g 44x30)",
    price: 146.0,
    category: "Churrasco",
  },
  {
    id: "price_1OQb7eKEH2NVkDD3T8LGy2iy",
    title: "10x Caixa Faca + Garfo Personalizada - Brinde Empresarial",
    price: 700.0,
    category: "Churrasco",
  },
  {
    id: "price_1OQb8SKEH2NVkDD3u4UfUm0R",
    title: "Tábua Média (35x24)",
    price: 80.0,
    category: "Churrasco",
  },
  {
    id: "price_1OQb8zKEH2NVkDD3kKTqW6Hv",
    title: "10x Caixa Faca + Garfo (pintado)",
    price: 990.0,
    category: "Churrasco",
  },
  {
    id: "price_1OQb9BKEH2NVkDD3PXUvgxPe",
    title: "Tábua Grande (g 44x30)",
    price: 100.0,
    category: "Churrasco",
  },
  {
    id: "price_1OQbAuKEH2NVkDD3FgIdSPu6",
    title: "Conjunto Churrasco Tábua + Faca + Garfo (p 30x20)",
    price: 126.0,
    category: "Churrasco",
  },
  {
    id: "price_1OQbBQKEH2NVkDD3pXLv7z0B",
    title: "Conjunto Churrasco Tábua + Faca + Garfo (m 35x24)",
    price: 136.0,
    category: "Churrasco",
  },
  {
    id: "price_1OQbBjKEH2NVkDD3VisRrcJk",
    title: "Kit Completo Churrasco (p 30x20) Tábua, Caixa para Faca",
    price: 139.0,
    category: "Churrasco",
  },
  {
    id: "price_1OQbC2KEH2NVkDD3Kf4IPz6S",
    title: "Kit Completo Churrasco (m 35x24) Tábua, Caixa para Faca",
    price: 150.0,
    category: "Churrasco",
  },
  {
    id: "price_1OQbCDKEH2NVkDD3l1EORXGT",
    title: "Kit Completo Churrasco (g 44x30) Tábua, Caixa para Faca",
    price: 160.0,
    category: "Churrasco",
  },
  {
    id: "price_1OQbCQKEH2NVkDD3etRT4Eol",
    title: "Tábua Pequena (30x20)",
    price: 66.0,
    category: "Churrasco",
  },
  {
    id: "price_1OQbCcKEH2NVkDD3GMuymGRN",
    title: "Kit Petisco de Vinho",
    price: 300.0,
    category: "Petisqueiras",
  },
  {
    id: "price_1OQbCvKEH2NVkDD3e4YwfJM1",
    title: "Porta Retrato em mdf com Aplique em Acrílico",
    price: 25.0,
    category: "Presentes",
  },
  {
    id: "price_1OQbDAKEH2NVkDD3kUKWEMbN",
    title: "Cabide - Personalizado mdf (natural)",
    price: 60.0,
    category: "Cabides",
  },
  {
    id: "price_1OQbDOKEH2NVkDD3b7Zd0Zjp",
    title: "Cabide - Personalizado mdf (pintado)",
    price: 99.0,
    category: "Cabides",
  },
  {
    id: "price_1OQbDiKEH2NVkDD3diecVRB4",
    title: "Anel Porta Guardanapo em mdf - Modelo Costela de Adão",
    price: 2.5,
    category: "Anel Porta Guardanapo",
  },
  {
    id: "price_1OQbDwKEH2NVkDD3H40XzzgS",
    title: "Anel Porta Guardanapo em mdf - Modelo Debutante ou Noiva",
    price: 3.0,
    category: "Anel Porta Guardanapo",
  },
  {
    id: "price_1OQbEEKEH2NVkDD3QcWap7du",
    title: "Anel Porta Guardanapo em mdf Pintado - Modelo Debutante ou Noiva",
    price: 4.9,
    category: "Anel Porta Guardanapo",
  },
  {
    id: "price_1OQbEPKEH2NVkDD3mXG7r5lQ",
    title: "Anel Porta Guardanapo em mdf - Modelo Borboleta",
    price: 2.5,
    category: "Anel Porta Guardanapo",
  },
  {
    id: "price_1OQbEaKEH2NVkDD37DBU9AQK",
    title: "Anel Porta Guardanapo em mdf - Modelo Anjinho",
    price: 2.5,
    category: "Anel Porta Guardanapo",
  },
  {
    id: "price_1OQbEpKEH2NVkDD3tvdMHBnU",
    title: "Anel Porta Guardanapo em mdf - Modelo Talheres",
    price: 2.5,
    category: "Anel Porta Guardanapo",
  },
  {
    id: "price_1OQbEzKEH2NVkDD335vZSStn",
    title: "Topo de Bolo em mdf (25x21) Pintado",
    price: 120.0,
    category: "Topo de Bolo",
  },
  {
    id: "price_1OQbFDKEH2NVkDD3xEWBLg60",
    title: "Topo de Bolo em mdf (25x21) Natural",
    price: 45.0,
    category: "Topo de Bolo",
  },
  {
    id: "price_1OQbFUKEH2NVkDD3dLMpeNE2",
    title: "Topo de Bolo em Acrílico (25x21) Uma Face",
    price: 99.2,
    category: "Topo de Bolo",
  },
  {
    id: "price_1OQbFgKEH2NVkDD37UF698ZD",
    title: "Topo de Bolo em Acrílico (25x21) Duas Faces",
    price: 200.0,
    category: "Topo de Bolo",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
