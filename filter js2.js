const products = [
    [
        {
          "name": "Anya Minimalist Shirt",
          "category": "shirt",
          "price": 315,
          "imageSrc": "Anya Minimalist.png"
        },
        {
          "name": "Survey Corps Jacket",
          "category": "jacket",
          "price": 550,
          "imageSrc": "Aot jacket.png"
        },
        {
          "name": "Itachi High Tops",
          "category": "shoes",
          "price": 815,
          "imageSrc": "Itachi top.png"
        },
        {
          "name": "Mai Sakurajima Shirt",
          "category": "shirt",
          "price": 315,
          "imageSrc": "Mai- Mock up.png"
        },
        {
          "name": "Zenitsu Shirt",
          "category": "shirt",
          "price": 339,
          "imageSrc": "ZENITSU_V1_MOCK_1556x2000.png"
        },
        {
          "name": "Itachi Jacket",
          "category": "jacket",
          "price": 550,
          "imageSrc": "itachi.jpg"
        },
        {
          "name": "Pain High Tops",
          "category": "shoes",
          "price": 815,
          "imageSrc": "pain hi.png"
        },
        {
          "name": "Kakashi Shirt",
          "category": "shirt",
          "price": 349,
          "imageSrc": "kakashi mock up.png"
        },
        {
          "name": "Natsu Graphic Shirt",
          "category": "shirt",
          "price": 349,
          "imageSrc": "Natsu Mock up.png"
        },
        {
          "name": "Law Sabaody Jacket",
          "category": "jacket",
          "price": 550,
          "imageSrc": "Law jacket.png"
        },
        {
          "name": "Wano Manga Hi-Tops",
          "category": "shoes",
          "price": 815,
          "imageSrc": "Wano shoes.png"
        },
        {
          "name": "Dazai Minimalist Shirt",
          "category": "shirt",
          "price": 315,
          "imageSrc": "Dazai Minimal Mock up.png"
        },
        {
          "name": "Ichigo Bankai Shirt",
          "category": "shirt",
          "price": 349,
          "imageSrc": "Bankai Mock Up.png"
        },
        {
          "name": "Baryon Mode Shirt",
          "category": "shirt",
          "price": 349,
          "imageSrc": "Baryon Mock Up.png"
        },
        {
          "name": "Chainsawman Shirt",
          "category": "shirt",
          "price": 315,
          "imageSrc": "minimal chainsaw.png"
        },
        {
          "name": "Gear 5 Shirt",
          "category": "shirt",
          "price": 339,
          "imageSrc": "GEAR 5 MOCK.png"
        }
      ]
      
    
  ];
  
  function filterProducts(category, minPrice, maxPrice) {
    return products.filter(product => {
      const inCategory = category === 'all' || product.category === category;
      const inPriceRange = product.price >= minPrice && product.price <= maxPrice;
      return inCategory && inPriceRange;
    });
  }
  
  const filteredProducts = filterProducts('shirt', 300, 400); // Example filtering: category = 'shirt', minPrice = 300, maxPrice = 400
  console.log(filteredProducts);
  