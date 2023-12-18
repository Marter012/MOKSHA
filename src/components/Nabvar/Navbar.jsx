import React from "react";
import { motion } from "framer-motion";
import { IoIosMenu } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import {
  CartNavStyled,
  ContainerCartIcon,
  ContainerMenuHamburger,
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
import { toggleHiddenMenu } from "../../redux/burgerMenu/burgerMenu";

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const hidden = useSelector((state) => state.cart.hidden);
  const burgerMenu = useSelector((state) => state.burgerMenu.hidden);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(burgerMenu)
  return (
    <NavbarContainerStyled>
      <ModalCart hidden={hidden} />

      <ContainerMenuHamburger>
        <IoIosMenu onClick={()=> dispatch(toggleHiddenMenu(!burgerMenu))}/>
      </ContainerMenuHamburger>

      <LogoStyled>
        <Link to="/">MOKSHA</Link>
      </LogoStyled>

      <LinksContainerStyled onClick={()=>dispatch(toggleHiddenMenu(!burgerMenu))} burgerMenu={burgerMenu}>
        <motion.div whileTap={{ scale: 0.9 }}>
          <Link to="/">
            <HiHome />
            Inicio
          </Link>
        </motion.div>

        <motion.div whileTap={{ scale: 0.9 }}>
          <Link onClick={() => dispatch(selectCategory(null))} to="/products">
            Productos
          </Link>
        </motion.div>

        <motion.div whileTap={{ scale: 0.9 }}>
          <Link to="/infoMoksha">Que es Moksha?</Link>
        </motion.div>
        {user !== null ? (
          !user?.user.verifiel ? (
            <motion.div whileTap={{ scale: 0.9 }}>
              <Link
                style={{ color: "red", fontWeight: "600" }}
                to="/verifyUser"
              >
                Verificar Cuenta
              </Link>
            </motion.div>
          ) : (
            ""
          )
        ) : (
          ""
        )}

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
      </LinksContainerStyled>

      <ContainerCartIcon>
        <CartNavStyled onClick={() => dispatch(toggleHiddenCart(hidden))}>
          <CartIcon />
        </CartNavStyled>
      </ContainerCartIcon>
    </NavbarContainerStyled>
  );
};

export default Navbar;
