const products = [
  {
    id: 1,
    name: "Mega Buquê Supremo Laranja",
    old_price: "849,00",
    price: "722,42",
    category_item: [
      {
        name: "Astromélias",
      },
    ],
    img: require("../../img/mega-buque-supremo-laranja-removebg-preview.png"),
  },
  {
    id: 2,
    name: "Buquê Império com Astromélias Roxas",
    old_price: "179,90",
    price: "109,90",
    desc: "É como um pedaço do céu noturno. Cada flor seca preserva a beleza efêmera da natureza",
    category_item: [
      {
        name: "Astromélias",
      },
      {
        name: "Home",
      },
    ],
    img: require("../../img/buque-imperio-com-astromelias-roxas-removebg-preview.png"),
  },
  {
    id: 3,
    name: "Mega Buquê Supremo Vermelho",
    old_price: "839,90",
    price: "713,92",
    category_item: [
      {
        name: "Astromélias",
      },
    ],
    img: require("../../img/mega-buque-supremo-vermelho-removebg-preview.png"),
  },
  {
    id: 4,
    name: "Buquê de Astromélias Laranja com 10 unidades",
    old_price: "109,90",
    price: "89,90",
    category_item: [
      {
        name: "Astromélias",
      },
    ],
    img: require("../../img/buque-de-astromelias-laranjas-com-10-unidades-removebg-preview.png"),
  },
  {
    id: 5,
    name: "Buquê Império com Astromélias Vermelhas",
    old_price: "149,90",
    price: "79,90",
    category_item: [
      {
        name: "Astromélias",
      },
    ],
    img: require("../../img/buque-imperio-com-astromelias-vermelhas-removebg-preview.png"),
  },
  {
    id: 6,
    name: "Buquê Império com Astromélias Brancas",
    old_price: "149,90",
    price: "79,90",
    category_item: [
      {
        name: "Astromélias",
      },
    ],
    img: require("../../img/buque-imperio-com-astromelias-brancas-removebg-preview.png"),
  },
  {
    id: 7,
    name: "Buquê Império com Astromélias Cor de Rosa",
    old_price: "149,90",
    price: "79,90",
    category_item: [
      {
        name: "Astromélias",
      },
    ],
    img: require("../../img/buque-imperio-com-astromelias-cor-de-rosa-removebg-preview.png"),
  },
  {
    id: 8,
    name: "Buquê Império com Astromélias Laranjas",
    old_price: "149,90",
    price: "79,90",
    category_item: [
      {
        name: "Astromélias",
      },
    ],
    img: require("../../img/buque-imperio-com-astromelias-laranjas-removebg-preview.png"),
  },
  {
    id: 9,
    name: "Buquê de Flores Secas e Angel",
    old_price: "239,90",
    price: "229,90",
    category_item: [
      {
        name: "Flores Secas",
      },
      {
        name: "Pelúcias",
      },
    ],
    img: require("../../img/flores-secas-angel-removebg-preview.png"),
  },
  {
    id: 10,
    name: "Buquê Criativo de Flores Secas Sortidas",
    old_price: "89,90",
    price: "69,90",
    category_item: [
      {
        name: "Flores Secas",
      },
    ],
    img: require("../../img/criativo-flores-secas-sortidas-removebg-preview.png"),
  },
  {
    id: 11,
    name: "Buquê Flores Secas Campestre Laranja",
    old_price: "149,90",
    price: "129,90",
    category_item: [
      {
        name: "Flores Secas",
      },
    ],
    img: require("../../img/flores-secas-campestre-laranja-removebg-preview.png"),
  },
  {
    id: 12,
    name: "Buquê de Flores Secas e Stitch",
    old_price: "239,90",
    price: "229,90",
    category_item: [
      {
        name: "Flores Secas",
      },
      {
        name: "Pelúcias",
      },
    ],
    img: require("../../img/flores-secas-stitch-removebg-preview.png"),
  },
  {
    id: 13,
    name: "Buquê Poesia de Flores Secas Azuis",
    old_price: "129,90",
    price: "89,90",
    category_item: [
      {
        name: "Flores Secas",
      },
    ],
    img: require("../../img/flores-secas-azuis-removebg-preview.png"),
  },
  {
    id: 14,
    name: "Buquê Poesia de Flores Secas Amarelo",
    old_price: "129,90",
    price: "89,90",
    category_item: [
      {
        name: "Flores Secas",
      },
    ],
    img: require("../../img/poeisa-de-flores-secas-amarelas-removebg-preview.png"),
  },
  {
    id: 15,
    name: "Mega Buquê de Flores Secas Coloridas",
    old_price: "319,90",
    price: "259,90",
    category_item: [
      {
        name: "Flores Secas",
      },
    ],
    img: require("../../img/mega-secas-coloridas-removebg-preview.png"),
  },
  {
    id: 16,
    name: "Buquê Poesia de Flores Secas Roxas",
    old_price: "129,90",
    price: "89.90",
    category_item: [
      {
        name: "Flores Secas",
      },
    ],
    img: require("../../img/flores-secas-roxas-removebg-preview.png"),
  },
  {
    id: 17,
    name: "Buquê Poesia de Flores Secas Azul Claro",
    old_price: "129,90",
    price: "89.90",
    category_item: [
      {
        name: "Flores Secas",
      },
    ],
    img: require("../../img/flores-secas-azul-claro-removebg-preview.png"),
  },
  {
    id: 18,
    name: "Buquê Mix de Flores Secas",
    old_price: "179,90",
    price: "149,90",
    category_item: [
      {
        name: "Flores Secas",
      },
    ],
    img: require("../../img/mix-flores-secas-removebg-preview.png"),
  },
  {
    id: 19,
    name: "Buquê Poesia de Flores Secas Coloridas",
    old_price: "129,90",
    price: "89.90",
    category_item: [
      {
        name: "Flores Secas",
      },
    ],
    img: require("../../img/poesia-flores-secas-coloridas-removebg-preview.png"),
  },
  {
    id: 20,
    name: "Buquê Partitura de Flores Secas Roxo",
    old_price: "69,90",
    price: "49,90",
    category_item: [
      {
        name: "Flores Secas",
      },
    ],
    img: require("../../img/partitura-secas-roxa-removebg-preview.png"),
  },
  {
    id: 21,
    name: "Buquê Partitura de Flores Secas Vermelho",
    old_price: "69,90",
    price: "49,90",
    category_item: [
      {
        name: "Flores Secas",
      },
    ],
    img: require("../../img/partitura-secas-vermelhas-removebg-preview.png"),
  },
  {
    id: 22,
    name: "Buquê Partitura de Flores Secas Amarelas",
    old_price: "69,90",
    price: "49,90",
    category_item: [
      {
        name: "Flores Secas",
      },
      {
        name: "Cestas para Mulheres",
      },
    ],
    img: require("../../img/paritura-secas-amarelas-removebg-preview.png"),
  },
  {
    id: 23,
    name: "Buquê Poesia de Flores Secas Vermelhas",
    old_price: "129,90",
    price: "89,90",
    category_item: [
      {
        name: "Flores Secas",
      },
    ],
    img: require("../../img/poesia-flores-secas-vermelhas-removebg-preview.png"),
  },
  {
    id: 24,
    name: "Buquê Poesia de Flores Laranjas",
    old_price: "129,90",
    price: "89,90",
    category_item: [
      {
        name: "Flores Secas",
      },
    ],
    img: require("../../img/poeisa-flores-laranjas-removebg-preview.png"),
  },
  {
    id: 25,
    name: "Buquê Poesia de Flores Secas Pink",
    old_price: "129,90",
    price: "89,90",
    category_item: [
      {
        name: "Flores Secas",
      },
    ],
    img: require("../../img/poesia-flores-pink-removebg-preview.png"),
  },
  {
    id: 26,
    name: "Bag com Flores Secas Pink",
    old_price: "189,90",
    price: "159,90",
    category_item: [
      {
        name: "Flores Secas",
      },
      {
        name: "Cestas de Flores",
      },
      {
        name: "Cestas de Aniversário",
      },
    ],
    img: require("../../img/bag-secas-pink-removebg-preview.png"),
  },
  {
    id: 27,
    name: "Buquê Partitura de Flores Secas Pink",
    old_price: "69,90",
    price: "49,90",
    category_item: [
      {
        name: "Flores Secas",
      },
      {
        name: "Cestas para Mulheres",
      },
    ],
    img: require("../../img/partitura-secas-pink-removebg-preview.png"),
  },
  {
    id: 28,
    name: "Buquê Partitura de Flores Secas Azul",
    old_price: "69,90",
    price: "49,90",
    category_item: [
      {
        name: "Flores Secas",
      },
    ],
    img: require("../../img/secas-azul-removebg-preview.png"),
  },
  {
    id: 29,
    name: "Buquê de Flores Secas Campestre Branco",
    old_price: "149,90",
    price: "129,90",
    category_item: [
      {
        name: "Flores Secas",
      },
    ],
    img: require("../../img/secas-campestre-removebg-preview.png"),
  },
  {
    id: 30,
    name: "Buquê Partitura Girassol",
    old_price: "69,90",
    price: "49,90",
    category_item: [
      {
        name: "Girassóis",
      },
      {
        name: "Maternidade",
      },
      {
        name: "Boa Sorte",
      },
      {
        name: "Amizade",
      },
    ],
    img: require("../../img/buque-partitura-girassol-removebg-preview.png"),
  },
  {
    id: 31,
    name: "Buquê 4 Estações Amarelo",
    old_price: "199,90",
    price: "179,90",
    category_item: [
      {
        name: "Girassóis",
      },
      {
        name: "Maternidade",
      },
    ],
    img: require("../../img/buque-04-estacoes-amarelo-removebg-preview.png"),
  },
  {
    id: 32,
    name: "Buquê de 4 Girassóis Te Adoro",
    old_price: "138,90",
    price: "116,90",
    category_item: [
      {
        name: "Girassóis",
      },
      {
        name: "Maternidade",
      },
      {
        name: "Boa Sorte",
      },
    ],
    img: require("../../img/buque-de-4-girassois-te-adoro-removebg-preview.png"),
  },
  {
    id: 33,
    name: "Buquê Partitura Girassol e Amandita",
    old_price: "99,90",
    price: "70,80",
    category_item: [
      {
        name: "Girassóis",
      },
      {
        name: "Boa Sorte",
      },
      {
        name: "Aniversário",
      },
      {
        name: "Chocolates",
      },
    ],
    img: require("../../img/buque-partitura-girassol-e-amandita-removebg-preview.png"),
  },
  {
    id: 34,
    name: "Buquê de 7 Girassóis Te Adoro",
    old_price: "189,90",
    price: "159,90",
    category_item: [
      {
        name: "Girassóis",
      },
      {
        name: "Maternidade",
      },
      {
        name: "Boa Sorte",
      },
      {
        name: "Cestas para Homens",
      },
    ],
    img: require("../../img/buque-de-7-girassois-te-adoro-removebg-preview.png"),
  },
  {
    id: 35,
    name: "Buquê de Girassol Noite Estrelada Van Gogh",
    old_price: "298,90",
    price: "275,90",
    category_item: [
      {
        name: "Girassóis",
      },
      {
        name: "Amizade",
      },
    ],
    img: require("../../img/buque-de-girassol-noite-estrelada-van-gogh-removebg-preview.png"),
  },
  {
    id: 36,
    name: "Girassol no Vaso com Rosas Amarelas",
    old_price: "359,90",
    price: "299,90",
    category_item: [
      {
        name: "Girassóis",
      },
      {
        name: "Agradecimento",
      },
    ],
    img: require("../../img/girassol-no-vaso-com-rosas-amarelas-removebg-preview.png"),
  },
  {
    id: 37,
    name: "Mega Buquês de Girassóis",
    old_price: "289,90",
    price: "259,90",
    desc: "Os girassóis são como pequenos artistas do sol, Suas flores gigantes e brilhantes parecem sorrir para o mundo",
    category_item: [
      {
        name: "Girassóis",
      },
      {
        name: "Desculpas",
      },
      {
        name: "Boa Sorte",
      },
      {
        name: "Amizade",
      },
      {
        name: "Home",
      },
    ],
    img: require("../../img/mega-buques-de-girassois-removebg-preview.png"),
  },
  {
    id: 38,
    name: "Buquê Mix de Flores Te Amo",
    old_price: "229,90",
    price: "198,90",
    category_item: [
      {
        name: "Girassóis",
      },
      {
        name: "Aniversário",
      },
    ],
    img: require("../../img/buque-mix-de-flores-te-amo-removebg-preview.png"),
  },
  {
    id: 39,
    name: "Buquê de Girassol e Rosas",
    old_price: "252,90",
    price: "238,90",
    category_item: [
      {
        name: "Girassóis",
      },
      {
        name: "Desculpas",
      },
      {
        name: "Boa Sorte",
      },
    ],
    img: require("../../img/buque-de-girassol-e-rosas-removebg-preview.png"),
  },
  {
    id: 40,
    name: "Mega Buquê com Girassóis e Rosas Brancas",
    old_price: "729,90",
    price: "639,90",
    category_item: [
      {
        name: "Girassóis",
      },
      {
        name: "Maternidade",
      },
      {
        name: "Agradecimento",
      },
      {
        name: "Boa Sorte",
      },
    ],
    img: require("../../img/mega-buque-com-girassois-e-rosas-brancas-removebg-preview.png"),
  },
  {
    id: 41,
    name: "Buquê Presente Gérberas Vermelhas",
    old_price: "125,90",
    price: "87,90",
    desc: "É como um jardim de paixão em suas mãos. Cada flor transmite um amor intenso e caloroso.",
    category_item: [
      {
        name: "Gérberas",
      },
      {
        name: "Home",
      },
    ],
    img: require("../../img/buque-presente-gerberas-vermelhas-removebg-preview.png"),
  },
  {
    id: 42,
    name: "Buquê Presente Gérberas Amarelas",
    old_price: "125,90",
    price: "87,90",
    category_item: [
      {
        name: "Gérberas",
      },
    ],
    img: require("../../img/buque-presente-gerberas-amarelas-removebg-preview.png"),
  },
  {
    id: 43,
    name: "Buquê de Mix Love",
    old_price: "225,90",
    price: "195,30",
    category_item: [
      {
        name: "Gérberas",
      },
    ],
    img: require("../../img/buque-de-mix-love-removebg-preview.png"),
  },
  {
    id: 44,
    name: "Buquê de Gérberas Coloridas",
    old_price: "229,90",
    price: "169,90",
    desc: "Essa diversidade de cores torna o buquê de gérberas uma opção alegre e cheia de vida para presentear alguém especial.",
    category_item: [
      {
        name: "Gérberas",
      },
      {
        name: "Romântico",
      },
    ],
    img: require("../../img/buque-de-gerberas-coloridas-removebg-preview.png"),
  },
  {
    id: 45,
    name: "Buquê de Gypsophila Encantada Amarelo",
    old_price: "195,90",
    price: "165,90",
    category_item: [
      {
        name: "Rosa Encantada",
      },
    ],
    img: require("../../img/buque-de-gypsophila-encantada-amarelo-removebg-preview.png"),
  },
  {
    id: 46,
    name: "Buquê de Gypsophila Encantada Azul Claro",
    old_price: "195,90",
    price: "165,90",
    desc: "É como um sonho delicado tornado realidade. Cada pequena flor parece uma estrela celestial.",
    category_item: [
      {
        name: "Rosa Encantada",
      },
      {
        name: "Home",
      },
    ],
    img: require("../../img/buque-de-gypsophila-encantada-azul-claro-removebg-preview.png"),
  },
  {
    id: 47,
    name: "Buquê de Gypsophila Encantada Laranja",
    old_price: "195,90",
    price: "165,90",
    category_item: [
      {
        name: "Rosa Encantada",
      },
    ],
    img: require("../../img/buque-de-gypsophila-encantada-laranja-removebg-preview.png"),
  },
  {
    id: 48,
    name: "Buquê de Gypsophila Encantada Vermelho",
    old_price: "195,90",
    price: "165,90",
    category_item: [
      {
        name: "Rosa Encantada",
      },
    ],
    img: require("../../img/buque-de-gypsophila-encantada-vermelho-removebg-preview.png"),
  },
  {
    id: 49,
    name: "Buquê de Gypsophila Encantada Roxo",
    old_price: "195,90",
    price: "165,90",
    category_item: [
      {
        name: "Rosa Encantada",
      },
    ],
    img: require("../../img/buque-de-gypsophila-encantada-roxo-removebg-preview.png"),
  },
  {
    id: 50,
    name: "Vaso Cerâmica Azul e Preto",
    old_price: "125,90",
    price: "89,90",
    desc: "Com um design clássico e elegante, o vaso possui um tom de azul profundo e escuro.",
    category_item: [
      {
        name: "Acessórios",
      },
    ],
    img: require("../../img/danete.png"),
  },
  {
    id: 51,
    name: "Regador de girasol",
    old_price: "78,90",
    price: "59,90",
    desc: "Regador encantador com girasois feito em metal perfeito para e decorar o ambiente",
    category_item: [
      {
        name: "Acessórios",
      },
    ],
    img: require("../../img/image-removebg-preview (2).png"),
  },
  {
    id: 52,
    name: "Vaso de flor transparente",
    old_price: "65,00",
    price: "42,90",
    desc: "Imagine um vaso de flor, feito de vidro delicado que brilha suavemente à luz do sol.",
    category_item: [
      {
        name: "Acessórios",
      },
    ],
    img: require("../../img/barronelius.png"),
  },
  {
    id: 53,
    name: "Buquê de Rosas Vermelhas",
    old_price: "250,00",
    price: "200,00",
    desc: "É uma exuberante e apaixonada expressão de amor e afeto. Cada rosa vermelha simboliza beleza, romance e desejo",
    img: require("../../img/product-2.png"),
    category_item: [
      {
        name: "Romântico",
      },
    ],
  },
  {
    id: 54,
    name: "Buquê de 12 Rosas Lilás",
    old_price: "120,99",
    price: "89,90",
    desc: "As rosas lilás simbolizam encanto, admiração e amor à primeira vista, tornando este arranjo floral uma maneira elegante de expressar sentimentos",
    category_item: [
      {
        name: "Romântico",
      },
    ],
    img: require("../../img/product-5.png"),
  },
  {
    id: 55,
    name: "Buquê de Tulipas",
    old_price: "129,90",
    price: "99,90",
    desc: "Um buquê de tulipas é uma escolha elegante e sofisticada para presentear alguém especial. As tulipas são flores conhecidas por sua beleza simples e graciosa.",
    category_item: [
      {
        name: "Romântico",
      },
    ],
    img: require("../../img/product-6.png"),
  },
  {
    id: 56,
    name: "Buquê de 12 Rosas Brancas",
    old_price: "129,90",
    price: "99,90",
    category_item: [
      {
        name: "Romântico",
      },
    ],
    img: require("../../img/buque-12-rosas-brancas.png"),
  },
  {
    id: 57,
    name: "Buquê de 12 Rosas Champanhe",
    old_price: "129,90",
    price: "99,90",
    category_item: [
      {
        name: "Romântico",
      },
      {
        name: "Condolências",
      },
    ],
    img: require("../../img/buque-12-rosas-champanhe.png"),
  },
  {
    id: 58,
    name: "Buquê de 36 Rosas Brancas",
    old_price: "359,90",
    price: "329,90",
    category_item: [
      {
        name: "Condolências",
      },
      {
        name: "Romântico",
      },
    ],
    img: require("../../img/buque-36-rosas-brancas.png"),
  },
  {
    id: 59,
    name: "Buquê de 24 Rosas Champanhe",
    old_price: "249,90",
    price: "229,90",
    category_item: [
      {
        name: "Condolências",
      },
      {
        name: "Romântico",
      },
    ],
    img: require("../../img/buque-24-rosas-champanhe.png"),
  },
  {
    id: 60,
    name: "Kit de Aniversário Felicidades para Você",
    old_price: "329,90",
    price: "249,90",
    category_item: [
      {
        name: "Cestas de Aniversário",
      },
    ],
    img: require("../../img/kit-felicidades.png"),
  },
  {
    id: 61,
    name: "Buquê de 8 Rosas Vermelhas e Pelúcia",
    old_price: "321,90",
    price: "273,0",
    category_item: [
      {
        name: "Pelúcias",
      },
    ],
    img: require("../../img/buque-rosas-urso.png"),
  },
];

const filters = [
  {
    name: "Tipo de flor",
    category: [
      {
        name: "Astromélias",
      },
      {
        name: "Flores Secas",
      },
      {
        name: "Gérberas",
      },
      {
        name: "Girassóis",
      },
      {
        name: "Rosa Encantada",
      },
    ],
  },
  {
    name: "Presentes",
    category: [
      {
        name: "Chocolates",
      },
      {
        name: "Pelúcias",
      },
    ],
  },
  {
    name: "Cestas",
    category: [
      {
        name: "Cestas de Aniversário",
      },
      {
        name: "Cestas de Flores",
      },
      {
        name: "Cestas para Homens",
      },
      {
        name: "Cestas para Mulheres",
      },
    ],
  },
  {
    name: "Ocasiões",
    category: [
      {
        name: "Agradecimento",
      },
      {
        name: "Amizade",
      },
      {
        name: "Aniversário",
      },
      {
        name: "Boa Sorte",
      },
      {
        name: "Condolências",
      },
      {
        name: "Desculpas",
      },
      {
        name: "Maternidade",
      },
      {
        name: "Romântico",
      },
    ],
  },
  {
    name: "Para cuidar",
    category: [
      {
        name: "Acessórios",
      },
    ],
  },
];

function getProductData(id) {
  for (const product of products) {
    if (product.id === id) {
      const price = parseFloat(product.price.replace(",", "."));
      const oldPrice = parseFloat(product.old_price.replace(",", "."));
      const name = product.name;
      return { ...product, price, old_price: oldPrice, name };
    }
  }
  console.log("Product data does not exist for ID: " + id);
  return undefined;
}

export { products, filters, getProductData };
