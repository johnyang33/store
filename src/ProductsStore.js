const productsArray = [
  {
    id: "1",
    title: "coffee",
    price: 3.99
  },
  {
    id: "2",
    title: "tea",
    price: 2.99
  },
  {
    id: "3",
    title: "milk",
    price: 1.99
  }
]

function getProductData(id) { 
  let productData = productsArray.find(product => product.id === id);
  
  if( productData === undefined ){ 
    console.log("Product data does not exist for id:" + id);
    return undefined;
  }
  
  return productData;
}

export { productsArray, getProductData };