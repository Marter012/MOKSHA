import React, { useState } from "react";
import {
  FoundContainerStyled,
  FoundTextStyled,
} from "../PageNotFound/PageNotFoundStyles";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import LoginInput from "../../components/IU/LoginInput/LoginInput";
import Submit from "../../components/IU/Submit/Submit";
import { Form } from "../Login/LoginStyles";
import { verifyUserInitialValues } from "../../Formik/initialValues";
import { verifyUserSchema } from "../../Formik/validationSchema";
import { verifyUser } from "../../axios/axiosUser";
import { setCurrentUser } from "../../redux/user/userSlice";
import useRedirect from "../../hooks/useRedirect";
import ModalVerifyUser from "../../components/ModalPanel/ModalVerifyUser";

const VerifyUser = () => {
  useRedirect("/products");

  const [show, setShow] = useState(false);

  const user = useSelector((state) => state.user.currentUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <ModalVerifyUser show={show} setShow={setShow} />

      <FoundContainerStyled>
        <FoundTextStyled>
          <p>Ingrese el codigo enviado a "{user.user.email}" </p>
          <Formik
            initialValues={verifyUserInitialValues}
            validationSchema={verifyUserSchema}
            onSubmit={async (values) => {
              const valid = await verifyUser(user.user.email, values.code);
              if (valid) {
                dispatch(
                  setCurrentUser({
                    ...user,
                    verifiel: true,
                  })
                );
                setShow(!show);
                setTimeout(() => {
                  navigate("/products");
                }, 5000);
              }
            }}
          >
            <Form>
              <LoginInput
                name="code"
                type="text"
                placeholder="Codigo de verificacion"
              />
              <Link>
                <p>Enviarme nuevamente mi codigo.</p>
              </Link>
              <Submit type="button">Verificar</Submit>
            </Form>
          </Formik>
        </FoundTextStyled>
      </FoundContainerStyled>
    </div>
  );
};

export default VerifyUser;
