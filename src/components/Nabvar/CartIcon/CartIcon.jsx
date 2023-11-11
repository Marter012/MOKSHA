import React from "react";
import { LinkContainerStyled } from "../NavbarStyles";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const totalProducts = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  return (
    <LinkContainerStyled>
      <FaShoppingCart />
      <span>{totalProducts}</span>
    </LinkContainerStyled>
  );
};

export default CartIcon;
