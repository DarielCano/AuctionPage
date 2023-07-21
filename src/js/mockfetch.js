let productos = [
  {
    id: 1,
    title: "Vue Js",
    price: 10,
    auctionPrice: 0,
    inAuctionPrice: 0,
    src: "/public/img/ropa/1.jpg",
    description: "Playera del Framework VueJs",
    stock: 10,
    category: "ropa",
  },
  /*  {
    title: "Angular Js",
    price: 20,
    src: "/public/img/2.jpg",
    description: "Playera del Framework Angular Js",
    stock: 10,
    category: "ropa",
  },
  {
    title: "React Js",
    price: 20,
    src: "/public/img/3.jpg",
    description: "Playera de la librería React Js",
    stock: 10,
    category: "ropa",
  },
  {
    title: "Redux Js",
    price: 20,
    src: "/public/img/4.jpg",
    description: "Playera de Redux Js",
    stock: 10,
    category: "ropa",
  },
  {
    title: "Node Js",
    price: 20,
    src: "/public/img/5.jpg",
    description: "Playera de Node Js",
    stock: 10,
    category: "ropa",
  },
  {
    title: "SASS",
    price: 20,
    src: "/public/img/6.jpg",
    description: "Playera de Sass",
    stock: 10,
    category: "ropa",
  },
  {
    title: "HTML",
    price: 20,
    src: "/public/img/7.jpg",
    description: "Playera de HTML",
    stock: 10,
    category: "ropa",
  },
  {
    title: "GitHub",
    price: 20,
    src: "/public/img/8.jpg",
    description: "Playera de GItHub",
    stock: 10,
    category: "ropa",
  },
  {
    title: "BulmaCSS",
    price: 20,
    src: "/public/img/9.jpg",
    description: "Playera de Bulma CSS",
    stock: 10,
    category: "ropa",
  },
  {
    title: "TypeScript",
    price: 20,
    src: "/public/img/10.jpg",
    description: "Playera de TypeScript",
    stock: 10,
    category: "ropa",
  },
  {
    title: "Drupal",
    price: 20,
    src: "/public/img/11.jpg",
    description: "Playera de Drupal",
    stock: 10,
    category: "ropa",
  },
  {
    title: "JavaScript",
    price: 20,
    src: "/public/img/12.jpg",
    description: "Playera de JavaScript",
    stock: 10,
    category: "ropa",
  },
  {
    title: "GraphQL",
    price: 20,
    src: "/public/img/13.jpg",
    description: "Playera de Graph SQL",
    stock: 10,
    category: "ropa",
  },
  {
    title: "WordPress",
    price: 20,
    src: "/public/img/14.jpg",
    description: "Playera de WordPress",
    stock: 10,
    category: "ropa", */

  /* zapatos */
  {
    id: 2,
    title: "Gorra FrontEnd",
    price: 20,
    auctionPrice: 0,
    inAuctionPrice: 0,
    src: "/public/img/zapatos/3.jpg",
    description: "Gorra con HTML CSS y JS",
    stock: 10,
    category: "zapatos",
  },

  /* {
    title: "Gorra GitHub",
    price: 20,
    src: "/public/img/zapatos/gorra3.webp",
    description: "Gorra con logo de GitHub",
    stock: 10,
    category: "zapatos",
  },
  {
    title: "Gorra .Net",
    price: 20,
    src: "/public/img/zapatos/gorra4.jpg",
    description: "Gorra con .NET Core Color negro con morado",
    stock: 10,
    category: "zapatos",
  },
  {
    title: "Gorra Angular Js",
    price: 20,
    src: "/public/img/zapatos/gorra5.webp",
    description: "Gorra con Angular en la parte de atrás",
    stock: 10,
    category: "zapatos",
  },

  {
    title: "Gorra Negra FrontEnd",
    price: 20,
    src: "/public/img/zapatos/gorra7.jpg",
    description: "Gorra negra con texto de desarrollador FrontEnd",
    stock: 10,
    category: "zapatos",
  },
  {
    title: "Gorra Js",
    price: 20,
    src: "/public/img/zapatos/gorra8.jpg",
    description: "Gorra con simbolo de JavaScript",
    stock: 10,
    category: "zapatos",
  },
  {
    title: "Gorra Python",
    price: 20,
    src: "/public/img/zapatos/gorra9.jpg",
    description: "Gorra color blanco con símbolo de Python",
    stock: 10,
    category: "zapatos",
  }, */

  /* objetos */

  {
    id: 3,
    title: "Sudadera Junior Dev",
    price: 20,
    auctionPrice: 0,
    inAuctionPrice: 0,
    src: "/public/img/objetos/5.jpg",
    description: "Sudadera color negro con cartel de Junior Developer",
    stock: 10,
    category: "objetos",
  },

  /*  {
    title: "Sudadera con código",
    price: 20,
    src: "/public/img/objetos/sudadera4.jpg",
    description: "Sudadera negra con fragmento de código impreso",
    stock: 10,
    category: "objetos",
  },
  {
    title: "Sudadera IT software Dev",
    price: 20,
    src: "/public/img/objetos/sudadera5.jpg",
    description: "Sudadera negra con cartel de desarrollador de software",
    stock: 10,
    category: "objetos",
  },
  {
    title: "Sudadera API",
    price: 20,
    src: "/public/img/objetos/sudadera6.jpg",
    description: "Sudadera gris con cartel de use my private API",
    stock: 10,
    category: "objetos",
  }, */
];

export let mockFetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};
