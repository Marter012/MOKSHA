import React from "react";
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
import ModalPanel from "../../ModalPanel/ModalPanel";
import { toggleHiddenModal } from "../../../redux/Modal/modalSlice";

const ModalCart = ({ hidden }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.currentUser);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const ModalHidden = useSelector((state) => state.modal.hidden);

  const totalPrice = cartItems.reduce(
    (acc, item) => (acc = item.price * item.quantity + acc),
    0
  );
  return (
    <>
      {!hidden && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart(hidden))}
          isHidden={hidden}
        />
      )}

      <ModalPanel
        onClick={() => dispatch(toggleHiddenModal(), navigate("/products"))}
        ModalHidden={ModalHidden}
      >
        <h3>Pedido Confirmado</h3>
      </ModalPanel>

      <ModalContainerStyled hidden={hidden}>
        <ModalTopStyled>
          <ButtonStyled onClick={()=> dispatch(toggleHiddenCart())} fontSize={"0.7rem"}>
            <AiFillCloseCircle />
          </ButtonStyled>
          <p>Tus productos:</p>
          <ButtonStyled
            onClick={() => dispatch(clearCart())}
            bg_color={" rgb(255, 0, 0,0.8)"}
          >
            <BsTrash3Fill  />
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
            // onClick={() => (!user ? (navigate("/login"), dispatch(toggleHiddenCart())) : (dispatch(toggleHiddenCart()),dispatch(clearCart()),dispatch(toggleHiddenModal())))}
            onClick={() => {
              return !user
                ? (navigate("/login"), dispatch(toggleHiddenCart()))
                : (dispatch(toggleHiddenCart()),
                  dispatch(clearCart()),
                  dispatch(toggleHiddenModal()));
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
