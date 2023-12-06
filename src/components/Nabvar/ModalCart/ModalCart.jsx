import React, { useState } from "react";
import {
  ModalContainerStyled,
  ModalOverlayStyled,
  ModalPriceStyled,
  ModalProductsStyled,
  ModalTopStyled,
} from "./ModalCartStyled";
import { BsTrash3Fill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import ModalCartCard from "./ModalCartCard";
import { ButtonStyled } from "../../IU/Button/ButtonStyled";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggleHiddenCart } from "../../../redux/cart/cartSlice";
import Button from "../../IU/Button/Button";
import { useNavigate } from "react-router-dom";
import ModalBuy from "../../ModalPanel/ModalBuy";

const ModalCart = ({ hidden }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.currentUser);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce(
    (acc, item) => (acc = item.price * item.quantity + acc),
    0
  );

  const verifyUser = () => {
    if (user.verifiel) {
      dispatch(toggleHiddenCart(hidden));
      setShow(!show);
      dispatch(clearCart());
      return;
    } else {
      navigate("/verifyUser");
      dispatch(toggleHiddenCart(hidden));
      return;
    }
  };
  return (
    <>
      {!hidden && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart(hidden))}
          isHidden={hidden}
        />
      )}

      <ModalBuy show={show} setShow={setShow} />

      <ModalContainerStyled hidden={hidden}>
        <ModalTopStyled>
          <ButtonStyled
            onClick={() => dispatch(toggleHiddenCart())}
            fontSize={"0.7rem"}
          >
            <AiFillCloseCircle />
          </ButtonStyled>
          <p>Tus productos:</p>
          <ButtonStyled
            onClick={() => dispatch(clearCart())}
            bg_color={" rgb(255, 0, 0,0.8)"}
          >
            <BsTrash3Fill />
          </ButtonStyled>
        </ModalTopStyled>

        <ModalProductsStyled>
          {cartItems.length ? (
            cartItems.map((item) => <ModalCartCard key={item.id} {...item} />)
          ) : (
            <p>Añade productos a tu carrito.</p>
          )}
        </ModalProductsStyled>
        <ModalPriceStyled>
          <div>
            <p>Total</p>
            <span>${totalPrice}</span>
          </div>
          <Button
            onClick={() => {
              return !user
                ? (navigate("/login"), dispatch(toggleHiddenCart()))
                : verifyUser();
            }}
            color="white"
            bg_color="#344B46"
            disabled={!cartItems.length}
          >
            Confirmar
          </Button>
        </ModalPriceStyled>
      </ModalContainerStyled>
    </>
  );
};

export default ModalCart;
