import React from "react";
import { motion } from "framer-motion";

import { HiHome } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import {
  CartNavStyled,
  LinksContainerStyled,
  LogoStyled,
  NavbarContainerStyled,
  UserContainerStyled,
} from "./NavbarStyles";
import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggleHiddenCart } from "../../redux/cart/cartSlice";
import { setCurrentUser } from "../../redux/user/userSlice";
import { selectCategory } from "../../redux/categories/categoriesSlice";

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const hidden = useSelector((state) => state.cart.hidden);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <NavbarContainerStyled>
      <ModalCart hidden={hidden} />

      <LogoStyled>
        <Link to="/">MOKSHA</Link>
      </LogoStyled>

      <LinksContainerStyled>
        <motion.div whileTap={{ scale: 0.9 }}>
          <Link to="/">
            <HiHome />
            Inicio
          </Link>
        </motion.div>

        <motion.div whileTap={{ scale: 0.9 }}>
          <Link onClick={()=>dispatch(selectCategory(null))} to="/products">Productos</Link>
        </motion.div>

        <motion.div whileTap={{ scale: 0.9 }}>
          <Link to="/infoMoksha">Que es Moksha?</Link>
        </motion.div>

        <UserContainerStyled
          onClick={() =>
            user
              ? (dispatch(setCurrentUser(null)),
                dispatch(clearCart()),
                navigate("/"))
              : navigate("/login")
          }
        >
          <div>{user ? `Cerrar Sesion` : "Iniciar Sesion"}</div>
        </UserContainerStyled>

        <CartNavStyled onClick={() => dispatch(toggleHiddenCart(hidden))}>
          <CartIcon />
        </CartNavStyled>
      </LinksContainerStyled>
      {/* <NavBarMenuBurger>
        <GiHamburgerMenu />
      </NavBarMenuBurger> */}
    </NavbarContainerStyled>
  );
};

export default Navbar;
