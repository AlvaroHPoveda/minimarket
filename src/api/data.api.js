let products = [
    {
        id: 1,
        name: 'Canella',
        price: 10.50,
        url: 'https://i.postimg.cc/vm5SmLvp/1069723.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum rerum molestias ab. Illo labore rerum, corrupti eligendi omnis tenetur magnam inventore commodi autem animi non, laborum, quaerat sunt iusto?',
        cant: 0,
        total: 0,
    },
    {
        id: 2,
        name: 'Mix',
        price: 8.70,
        url: 'https://i.postimg.cc/hvDY6zTN/61f-HSZTi-Vy-L.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum rerum molestias ab. Illo labore rerum, corrupti eligendi omnis tenetur magnam inventore commodi autem animi non, laborum, quaerat sunt iusto?',
        cant: 0,
        total: 0,
    },
    {
        id: 3,
        name: 'Milk',
        price: 15.20,
        url: 'https://i.postimg.cc/Gm85W1T3/7702177007341-1.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum rerum molestias ab. Illo labore rerum, corrupti eligendi omnis tenetur magnam inventore commodi autem animi non, laborum, quaerat sunt iusto?',
        cant: 0,
        total: 0,
    },
    {
        id: 4,
        name: 'Milk',
        price: 12.80,
        url: 'https://i.postimg.cc/J7xvJxW8/Alqueria.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum rerum molestias ab. Illo labore rerum, corrupti eligendi omnis tenetur magnam inventore commodi autem animi non, laborum, quaerat sunt iusto?',
        cant: 0,
        total: 0,
    },
    {
        id: 5,
        name: 'Natural',
        price: 20.40,
        url: 'https://i.postimg.cc/VvKh8fFv/detodito-azul.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum rerum molestias ab. Illo labore rerum, corrupti eligendi omnis tenetur magnam inventore commodi autem animi non, laborum, quaerat sunt iusto?',
        cant: 0,
        total: 0,
    },
    {
        id: 6,
        name: 'BBQ',
        price: 25.10,
        url: 'https://i.postimg.cc/sXc6Yjqm/DETODITO-PAKETON-BBQ-F.webp',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum rerum molestias ab. Illo labore rerum, corrupti eligendi omnis tenetur magnam inventore commodi autem animi non, laborum, quaerat sunt iusto?',
        cant: 0,
        total: 0,
    },
    {
        id: 7,
        name: 'Milk',
        price: 30.90,
        url: 'https://i.postimg.cc/VkxV1HXq/LECHE-ALQUERIA-DESLACTOSADA-F.png',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum rerum molestias ab. Illo labore rerum, corrupti eligendi omnis tenetur magnam inventore commodi autem animi non, laborum, quaerat sunt iusto?',
        cant: 0,
        total: 0,
    },
    {
        id: 8,
        name: 'MiloGo',
        price: 14.40,
        url: 'https://i.postimg.cc/ZKqgLNTd/milo-bolsa-nestle-activ-go-x-2500-grs.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum rerum molestias ab. Illo labore rerum, corrupti eligendi omnis tenetur magnam inventore commodi autem animi non, laborum, quaerat sunt iusto?',
        cant: 0,
        total: 0,
    },
    {
        id: 9,
        name: 'Milo',
        price: 18.60,
        url: 'https://i.postimg.cc/ZRZsvB70/MILO-x500-g-79322.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum rerum molestias ab. Illo labore rerum, corrupti eligendi omnis tenetur magnam inventore commodi autem animi non, laborum, quaerat sunt iusto?',
        cant: 0,
        total: 0,
    },
    {
        id: 10,
        name: 'MiloFIT',
        price: 22.70,
        url: 'https://i.postimg.cc/7YQRtL6Q/supermercados-la-vaquita-supervaquita-milo-actigen-e-doy-pack-1100gr-bebidas-en-polvo-1024x1024.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum rerum molestias ab. Illo labore rerum, corrupti eligendi omnis tenetur magnam inventore commodi autem animi non, laborum, quaerat sunt iusto?',
        cant: 0,
        total: 0,
    },
    {
        id: 11,
        name: 'Cereal',
        price: 10.50,
        url: 'https://i.postimg.cc/9FM9Fmp2/1010001359-1-14-1.jpg',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum rerum molestias ab. Illo labore rerum, corrupti eligendi omnis tenetur magnam inventore commodi autem animi non, laborum, quaerat sunt iusto?',
        cant: 0,
        total: 0,
    },
    {
        id: 12,
        name: 'Cereal',
        price: 20.40,
        url: 'https://i.postimg.cc/rFPrDBnr/CEREAL-ZUCARITAS-F.png',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum rerum molestias ab. Illo labore rerum, corrupti eligendi omnis tenetur magnam inventore commodi autem animi non, laborum, quaerat sunt iusto?',
        cant: 0,
        total: 0,
    },
    {
        id: 13,
        name: 'total',
        total: 0,
    },
];

export function getAllProducts(){
    return products;
}

export function getProduct(id){
    return products.find(product => product.id === id);
}

export function deleteProduct(id){
    products = products.filter(product => product.id !== id);
}