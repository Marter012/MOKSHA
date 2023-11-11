import React from "react";
import {
  CardContainerProducts,
  CardProductsAdd,
  CardProductsDescription,
  CardProductsImg,
} from "./CardProductsStyles";
import { ButtonStyled } from "../IU/Button/ButtonStyled";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";

const CardProducts = ({ title, desc, price, img ,id }) => {

  const dispatch = useDispatch();
  return (
    <CardContainerProducts>
      <CardProductsImg>
        <img src={img} alt={title} />
      </CardProductsImg>
      <CardProductsDescription>
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <CardProductsAdd>
          <span>${price}</span>
          <ButtonStyled onClick={()=> dispatch(addToCart({ title, desc, price, img ,id }))} whileTap={{ scale: 0.9 }} bg_color={"#237C69"}>
            Añadir
          </ButtonStyled>
        </CardProductsAdd>
      </CardProductsDescription>
    </CardContainerProducts>
  );
};

export default CardProducts;
