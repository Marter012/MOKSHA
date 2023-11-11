import React from "react";
import NavProducts from "../../components/NavProducts/NavProducts";
import {
  ProductsContainerStyles,
  WrappetContainerProducts,
} from "./ProductsStyles";
import CardProducts from "../../components/Cards/CardProducts";
import { useSelector } from "react-redux";
import { products } from "../../data/Products";

const Products = () => {
  let arrayProducts = products;

  const selectedCategory = useSelector(state => state.categories.selectedCategory);  

  if(selectedCategory){
    arrayProducts = products.filter(product => product.category === selectedCategory.toLowerCase())
  }
  return (
    <WrappetContainerProducts>
      <NavProducts selectedCategory={selectedCategory}/>

      <ProductsContainerStyles>
      {(arrayProducts).map(product => {            
              if(selectedCategory){
                return <CardProducts  key={product.id} {...product} />; 
              }           
              return <CardProducts  key={product.id} {...product} />;
          })
      }
      </ProductsContainerStyles>
    </WrappetContainerProducts>
  );
};

export default Products;
