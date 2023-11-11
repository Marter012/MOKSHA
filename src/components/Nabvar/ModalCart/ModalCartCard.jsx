import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CardDescription, CardQuantity, ContainerCardStyles } from "./ModalCartStyled";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/cart/cartSlice";

const ModalCartCard = ({img,title,price,quantity,id}) => {
  const dispatch = useDispatch();
  return (
    <ContainerCardStyles>
      <CardDescription>
        <img
          src={img}
          alt={title}
        />
        <div>
          <p>{title}</p>
          <span>${price}</span>
        </div>
      </CardDescription>
      <CardQuantity>
        <FaMinus onClick={()=> dispatch(removeFromCart(id))} />
        <span>{quantity}</span>
        <FaPlus  onClick={()=> dispatch(addToCart({img,title,price,quantity,id}))}/>
      </CardQuantity>
    </ContainerCardStyles>
  );
};

export default ModalCartCard;
