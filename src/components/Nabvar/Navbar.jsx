import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosMenu } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import {
  CartNavStyled,
  ContainerMenuHamburger,
  LinksContainerStyled,
  LogoStyled,
  NavbarContainerStyled,
  PanelClose,
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
  const [showPanelClose, setShowPanelClose] = useState(false);

  const user = useSelector((state) => state.user.currentUser);
  const hidden = useSelector((state) => state.cart.hidden);
  const burgerMenu = useSelector((state) => state.burgerMenu.hidden);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <NavbarContainerStyled>
      <ModalCart hidden={hidden} />

      <ContainerMenuHamburger>
        <IoIosMenu onClick={() => dispatch(toggleHiddenMenu(!burgerMenu))} />
      </ContainerMenuHamburger>

      <LogoStyled>
        <Link to="/">MOKSHA</Link>
      </LogoStyled>

      <LinksContainerStyled
        onClick={() => dispatch(toggleHiddenMenu(!burgerMenu))}
        burgerMenu={burgerMenu}
      >
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
        <PanelClose
          onClick={() => setShowPanelClose(!showPanelClose)}
          showPanelClose={showPanelClose}
        >
          <section
            onClick={() => {
              dispatch(setCurrentUser(null));
              dispatch(clearCart());
              navigate("/");
            }}
          >
            <p>Cerrar Session</p>
          </section>
        </PanelClose>

        <UserContainerStyled
          onClick={() =>
            user ? setShowPanelClose(!showPanelClose) : navigate("/login")
          }
        >
          <div>{user ? `${user?.user.name}` : "Iniciar Sesion"}</div>
        </UserContainerStyled>


        <CartNavStyled onClick={() => dispatch(toggleHiddenCart(hidden))}>
          <CartIcon />
        </CartNavStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
