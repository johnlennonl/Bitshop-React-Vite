const productos = [
    {
        nombre: "Nike Max90 Swoosh Graphic T-Shirt Large",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/325ea07e-62df-49fb-9714-29b7a6f9a812/sportswear-mens-max90-t-shirt-Q1X4lj.png",
        precio: 34.99,
        talla: "Large",
        color: "Blanco",
        descripcion: "Camiseta gráfica con el icónico logo Swoosh de Nike.",
        cantidad: 1,
        botonTexto: "Comprar Ahora"
    },
    {
        nombre: "Nike Premium Essential Cotton T-Shirt X-Large, KHAKI",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f4a77b14-ca60-4821-9566-a85fad536ebb/M+NSW+TEE+PREM+ESSNTL+SSNL+1.png",
        precio: 34.99,
        talla: "X-Large",
        color: "Khaki",
        descripcion: "Camiseta de algodón premium, esencial para cualquier ocasión.",
        cantidad: 1,
        botonTexto: "Comprar Ahora"
    },
    {
        nombre: "Nike Dri-FIT UV Hyverse Fitness Top XX-Large, BLACK/WHITE",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ad59c742-aa0b-4961-a914-83bffc6367b0/ready-mens-dri-fit-short-sleeve-fitness-top-bc8lMz.png",
        precio: 29.99,
        talla: "X-Large",
        color: "Negro/Blanco",
        descripcion: "Top de entrenamiento con tecnología Dri-FIT UV para una mayor comodidad.",
        cantidad: 1,
        botonTexto: "Comprar Ahora"
    },
    {
        nombre: "Nike All Conditions Gear Lung Embroidered T-Shirt X-Large",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4cbb6958-db89-498c-b8c8-cad77a89abb7/playera-acg-bW3sRj.png",
        precio: 35.99,
        talla: "X-Large",
        color: "Negro",
        descripcion: "Camiseta ACG con diseño bordado, ideal para todas las condiciones.",
        cantidad: 1,
        botonTexto: "Comprar Ahora"
    },
    {
        nombre: "Nike Sportswear Graphic T-Shirt X-Large, WHITE",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/73393316-7170-4cb5-8d23-958bcd180b43/U+NSW+TEE+SPRING+BREAK+SUN.png",
        precio: 35.99,
        talla: "X-Large",
        color: "Blanco",
        descripcion: "Camiseta gráfica Nike Sportswear, ideal para un look casual.",
        cantidad: 1,
        botonTexto: "Comprar Ahora"
    },
    {
        nombre: "Nike Sportswear Graphic T-Shirt X-Large",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/368b0783-f045-40ee-b6c9-3e29c02791cc/dri-fit-legend-mens-fitness-t-shirt-JmKL0d.png",
        precio: 29.99,
        talla: "X-Large",
        color: "Gris",
        descripcion: "Camiseta gráfica de Nike, ideal para entrenamientos.",
        cantidad: 1,
        botonTexto: "Comprar Ahora"
    },
    {
        nombre: "Nike Elemental Belt Bag",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bde1b8b8-9c3a-4fb5-b2b1-80458a653a1a/elemental-premium-fanny-pack-8l-cSVFX2.png",
        precio: 40.55,
        talla: "Riñonera (8L)",
        color: "Gris",
        descripcion: "Riñonera Nike Elemental Premium.",
        cantidad: 1,
        botonTexto: "Comprar Ahora"
    },
    {
        nombre: "Nike Calm SE Slide Sandal ",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7138766e-a8b8-40d0-bd1c-c2f4424f3430/calm-se-mens-slides-1LcQk7.png",
        precio: 39.55,
        talla: "8",
        color: "Gris",
        descripcion: "Sandalias para Hombre Calm SE ",
        cantidad: 1,
        botonTexto: "Comprar Ahora"
    },
    ,
    {
        nombre: "Nike P-6000 Premiun Sneaker",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e3cc2305-65bb-4824-b4bd-9474386f6656/p-6000-shoes-SGxVgg.png",
        precio: 125.99,
        talla: "8",
        color: "Blanco",
        descripcion: "Calzado para Hombre, Original",
        cantidad: 1,
        botonTexto: "Comprar Ahora"
    },
    {
        nombre: "New Balance Gender Inclusive 530 Sneaker",
        imagen: "https://nb.scene7.com/is/image/NB/mr530sg_nb_03_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
        precio: 110.99,
        talla: "8H - 9.5M",
        color: "Blanco",
        descripcion: "Calzado Unisex Original NWB.",
        cantidad: 1,
        botonTexto: "Comprar Ahora"
    },
    {
        nombre: "Nike Gamma Force Sneaker ",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c20afd60-b230-4815-bfd2-6768c875f6cd/air-force-1-07-mens-shoes-J7xw5P.png",
        precio: 79.99,
        talla: "8",
        color: "Blanco",
        descripcion: "Calzado para Mujer , Original.",
        cantidad: 1,
        botonTexto: "Comprar Ahora"
    },
    {
        nombre: "Nike Air Force 1 '07 SE Sneaker",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a77350cd-fdb7-450f-8d3b-4a6999bf6db3/air-force-1-07-easyon-womens-shoes-q2Nz01.png",
        precio: 79.99,
        talla: "8",
        color: "Blanco",
        descripcion: "Calzado para Mujer, diseño clásico y versátil.",
        cantidad: 1,
        botonTexto: "Comprar Ahora"
    },
    {
        nombre: "Nike Dunk Mid Basketball Sneaker",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/10f64c4c-1b91-4109-a769-71a0679edd26/dunk-mid-mens-shoes-mxgfZx.png",
        precio: 95.50,
        talla: "10",
        color: "Blanco/Negro",
        descripcion: "Calzado para Hombre, ideal para baloncesto.",
        cantidad: 1,
        botonTexto: "Comprar Ahora"
    },
    {
        nombre: "Nike Air Max Pulse Sneaker",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4a793797-a7e0-4214-9ae6-a1235113be86/air-max-pulse-mens-shoes-DWTVpN.png",
        precio: 91.97,
        talla: "9",
        color: "Negro/Blanco",
        descripcion: "Calzado para Hombre, comodidad y estilo.",
        cantidad: 1,
        botonTexto: "Comprar Ahora"
    },
    {
        nombre: "Nike Dunk Low Basketball Sneaker",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bc016bc-cd7a-49cc-a399-47930b00c59f/dunk-low-retro-mens-shoes-5FQWGR.png",
        precio: 91.97,
        talla: "9",
        color: "Negro/Blanco",
        descripcion: "Calzado para Hombre, comodidad y estilo.",
        cantidad: 1,
        botonTexto: "Comprar Ahora"
    },
    {
        nombre: "Nike Air Force 1 '07 Sneaker ",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1b3f2818-e304-45ae-b48a-2de6a468d9e7/air-force-1-07-lv8-mens-shoes-frzlZf.png",
        precio: 91.97,
        talla: "9",
        color: "Negro/Blanco",
        descripcion: "Calzado para Hombre, comodidad y estilo.",
        cantidad: 1,
        botonTexto: "Comprar Ahora"
    },
    {
        nombre: "Nike Dunk Low Basketball Sneaker",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f8b0d10-a51f-4c40-b5de-953012998b19/dunk-low-mens-shoes-JMkfpg.png",
        precio: 149.99,
        talla: "8.5",
        color: "Negro/Blanco",
        descripcion: "Calzado para Hombre, comodidad y estilo.",
        cantidad: 1,
        botonTexto: "Comprar Ahora"


    }
    ,
    {
        nombre: "Nike Air Force 1 '07 Basketball Sneaker",
        imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6fea218b-6fe9-4d9f-994c-9a0e45afc72d/W+AIR+FORCE+1+%270+7+NN.png",
        precio: 89.99,
        talla: "9.5",
        color: "Negro/Blanco",
        descripcion: "Calzado para Mujer, comodidad y estilo.",
        cantidad: 1,
        botonTexto: "Comprar Ahora"


    }
];



export default productos;